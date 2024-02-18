
// import { Module } from '@nestjs/common';
// import { TasksController } from './tasks.controller';

// @Module({
//   controllers: [TasksController],
// })
// export class TasksModule {}

// export const getAllTasks = () => {
//   const [tasks, setTasks] = useState<string[]>(['Task 1', 'Task 2']);
//   return {
//     tasks,
//     addTask:(newTask: string) => {
//       setTasks([...tasks, newTask])
//     }
//   }

// }
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}