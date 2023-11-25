import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  async pageHeader() {
    const result = {};

    return result;
  }

  async pageContent(page: string) {
    const result = {};

    return result;
  }

  async renderUpload() {
    const result = {
      title: '',
    };

    return result;
  }
}
