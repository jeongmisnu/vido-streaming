import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pages')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('upload')
  @Render('upload')
  async pageUpload() {
    return await this.appService.renderUpload();
  }
}
