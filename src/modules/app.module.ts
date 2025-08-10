import { Module } from '@nestjs/common';
import { AuthModule } from './auth/module/auth.module';

@Module({
  imports: [AuthModule],
  providers: [],
})
export class AppModule {}