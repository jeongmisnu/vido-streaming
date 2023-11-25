import { Module } from '@nestjs/common';
import { StreamingController } from './streaming.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [
    StreamingController
  ],
})
export class StreamingModule {}
