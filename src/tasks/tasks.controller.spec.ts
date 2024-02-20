import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const customModule: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
    }).compile();

    controller = customModule.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
