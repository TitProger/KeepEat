import { Module } from '@nestjs/common';
import { AuthModule } from './auth/module/auth.module';
import { getMikroOrmModule } from '../common/config/mikro-orm/mikro-orm.module';

@Module({
  imports: [getMikroOrmModule(), AuthModule],
  providers: [],
})
export class AppModule {}