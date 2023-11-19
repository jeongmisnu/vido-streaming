import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileMulterOptions } from './MulterOptions/file-multer';
import { VideoMulterOptions } from './MulterOptions/video-multer';
import { AudioMulterOptions } from './MulterOptions/audio-multer';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('file')
  @UseInterceptors(FilesInterceptor('files', 10, FileMulterOptions))
  async fileUpload(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return await this.uploadService.fileUpload(files);
  }

  @Post('video')
  @UseInterceptors(FilesInterceptor('video', 2, VideoMulterOptions))
  async videoUpload(@UploadedFiles() video: Array<Express.Multer.File>) {
    return await this.uploadService.videoUpload(video);
  }

  @Post('audio')
  @UseInterceptors(FilesInterceptor('audio', 5, AudioMulterOptions))
  async audioUpload(@UploadedFiles() audio: Array<Express.Multer.File>) {
    return await this.uploadService.audioUpload(audio);
  }
}
