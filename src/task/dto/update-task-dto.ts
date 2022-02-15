import { TaskStatusEnum } from '../entities/task.entity';

export class UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: TaskStatusEnum;
}
