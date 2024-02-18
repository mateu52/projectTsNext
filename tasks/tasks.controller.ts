import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): string[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  addTask(@Body() newTask: string): void {
    this.tasksService.addTask(newTask);
  }

  @Delete(':index')
  removeTask(@Param('index') index: string): void {
    this.tasksService.removeTask(parseInt(index));
  }
}