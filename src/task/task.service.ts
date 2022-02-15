import { Task, TaskStatusEnum } from './entities/task.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/create-task-dto';
import { TaskDTO } from './dto/task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  public async createOne(createTaskReq: CreateTaskDTO) {
    const newTask = this.taskRepository.create({
      ...createTaskReq,
      status: TaskStatusEnum.Created,
    });

    return await this.taskRepository.save(newTask);
  }

  public async getAll(): Promise<TaskDTO[]> {
    return this.taskRepository.find();
  }

  public async getOne(taskId: number): Promise<TaskDTO> {
    const task = await this.taskRepository.findOne(taskId);

    if (!task) throw new NotFoundException(`Task with id ${taskId} not found`);

    return task;
  }

  public async updateOne(
    taskId: number,
    updateTaskReq: UpdateTaskDTO,
  ): Promise<Task> {
    let updateTask: Task = await this.getOne(taskId);

    if (!updateTask)
      throw new NotFoundException(`Task with id ${taskId} not found`);

    updateTask.title = updateTaskReq.title || updateTask.title;
    updateTask.description =
      updateTaskReq.description || updateTask.description;
    updateTask.status = updateTaskReq.status || updateTask.status;

    return await this.taskRepository.save(updateTask);
  }

  public async deleteOne(taskId: number): Promise<Task> {
    const existingTask: Task = await this.getOne(taskId);

    if (!existingTask)
      throw new NotFoundException(`Task with id ${taskId} not found`);

    return await this.taskRepository.remove(existingTask);
  }
}
