import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "DATABASE_CONNECTION",
      type: 'postgres',
      host: 'localhost',
      port: 56001,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [
        __dirname + '/entities/*.entity{.ts,.js}',
      ],
      synchronize: true
    }),
  ]
})
export class DatabaseModule {}