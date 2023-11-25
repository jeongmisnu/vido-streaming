import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audio } from 'src/entities/audio.entity';
import { File } from 'src/entities/file.entity';
import { Video } from 'src/entities/video.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(File) private fileRepository: Repository<File>,
    @InjectRepository(Video) private videoRepository: Repository<Video>,
    @InjectRepository(Audio) private audioRepository: Repository<Audio>,
    private entityManager: EntityManager,
  ) {}
  async fileUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    for (let idx = 0; idx < files.length; idx++) {
      await this.fileRepository
        .createQueryBuilder()
        .insert()
        .into(File)
        .values({
          name: files[idx].originalname,
          path: files[idx].path,
          format: files[idx].mimetype,
          size: files[idx].size,
        })
        .execute();
    }

    return result;
  }

  async videoUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    for (let idx = 0; idx < files.length; idx++) {
      await this.videoRepository
        .createQueryBuilder()
        .insert()
        .into(File)
        .values({
          name: files[idx].originalname,
          path: files[idx].path,
          format: files[idx].mimetype,
          size: files[idx].size,
        })
        .execute();
    }

    return result;
  }

  async audioUpload(files: Array<Express.Multer.File>) {
    const result = {
      status: 201,
      success: true,
    };

    for (let idx = 0; idx < files.length; idx++) {
      await this.audioRepository
        .createQueryBuilder()
        .insert()
        .into(File)
        .values({
          name: files[idx].originalname,
          path: files[idx].path,
          format: files[idx].mimetype,
          size: files[idx].size,
        })
        .execute();
    }

    return result;
  }
}
