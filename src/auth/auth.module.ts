import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule],
})
export class AuthModule {}
