import { Delete, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateTaskDTO } from './dto/create-task-dto';
import { TaskDTO } from './dto/task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  public async createOne(
    @Body()
    createTaskReq: CreateTaskDTO,
  ): Promise<TaskDTO> {
    const resp = await this.taskService.createOne(createTaskReq);
    return resp;
  }

  @Get()
  public async getAll(): Promise<TaskDTO[]> {
    return await this.taskService.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id') taskId: number): Promise<TaskDTO> {
    return await this.taskService.getOne(taskId);
  }

  @Put(':id')
  public async updateTask(
    @Param('id') taskId: number,
    @Body() updateTaskReq: UpdateTaskDTO,
  ): Promise<Task> {
    return await this.taskService.updateOne(taskId, updateTaskReq);
  }

  @Delete(':id')
  public async deleteOne(@Param('id') taskId: number): Promise<Task> {
    return this.taskService.deleteOne(taskId);
  }
}
