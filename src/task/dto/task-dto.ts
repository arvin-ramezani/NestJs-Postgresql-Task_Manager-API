import { TaskStatusEnum } from '../entities/task.entity';

export class TaskDTO {
  id: number;
  title: string;
  description: string;
  status: TaskStatusEnum;
}
