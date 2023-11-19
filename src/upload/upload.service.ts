import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audio } from 'src/entities/audio.entity';
import { File } from 'src/entities/file.entity';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(File) private fileRepository: Repository<File>,
    @InjectRepository(Video) private videoRepository: Repository<Video>,
    @InjectRepository(Audio) private audioRepository: Repository<Audio>,
  ) {}
  async fileUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    return result;
  }

  async videoUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    return result;
  }

  async audioUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    return result;
  }
}
