import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as ormconfig from '../../ormconfig.json';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions)],
})
export class DatabaseModule {}
