import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Audio } from 'src/entities/audio.entity';
import { File } from 'src/entities/file.entity';
import { Media } from 'src/entities/media.entity';
import { Video } from 'src/entities/video.entity';

@Injectable()
export class PostgresService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('POST_HOST'),
      port: this.config.get<number>('POST_PORT'),
      username: this.config.get<string>('POST_ID'),
      password: this.config.get<string>('POST_PW'),
      database: this.config.get<string>('POST_DB'),
      entities: [File, Video, Audio, Media],
      synchronize: true,
    };
  }
}
