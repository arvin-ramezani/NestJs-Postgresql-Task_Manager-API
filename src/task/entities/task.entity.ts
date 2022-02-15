import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatusEnum {
  Created,
  InProgress,
  Done,
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 64 })
  title: string;

  @Column({ nullable: true, length: 1024 })
  description: string;

  @Column({ default: TaskStatusEnum.Created })
  status: TaskStatusEnum;
}
