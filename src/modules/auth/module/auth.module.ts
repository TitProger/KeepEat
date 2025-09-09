import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import {AuthService} from "../service/auth.service";
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from '../entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
