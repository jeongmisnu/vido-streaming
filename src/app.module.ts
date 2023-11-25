import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { StreamingController } from './streaming/streaming.controller';
import { StreamingModule } from './streaming/streaming.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresService } from './databases/postgres.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresService,
    }),
    EventsModule,
    StreamingModule,
    UploadModule,
  ],
  controllers: [AppController, StreamingController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
