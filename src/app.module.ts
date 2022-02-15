import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
