import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: string[] = ['Task 1', 'Task 2'];

    getAllTasks(): string[] {
        return this.tasks;
    }

    addTask(newTask: string): void {
        this.tasks.push(newTask);
    }

    removeTask(index: number): void {
        this.tasks.splice(index, 1);
    }
}