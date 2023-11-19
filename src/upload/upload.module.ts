import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { Audio } from 'src/entities/audio.entity';
import { Video } from 'src/entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File, Audio, Video])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
