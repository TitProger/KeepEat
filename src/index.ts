import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';
import { Envs } from './common/config/envs/env';
import { MigrationService } from './common/config/mikro-orm/migration.service';

export class App {
  private readonly ADDRESS: string;
  private readonly PORT: number;

  constructor(PORT: number, ADDRESS: string) {
    this.PORT = PORT;
    this.ADDRESS = ADDRESS;
  }

  public async run() {
    // Создаем экземпляр приложения с Fastify
    const app = await App.createNestApp();

    if (Envs.postgres.migrationsRun) {
      const migrationService = app.get(MigrationService);

      if (Envs.postgres.migrationsRun) await migrationService.migrate();
    }
    // Настройка CORS для доступа с фронтенда
    app.enableCors({
      origin: ['http://localhost:3000', 'http://localhost:5173'], // Пока разрешаем только локальный доступ
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    // Настройка глобальной валидации данных
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );

    // Запускаем сервер
    await app.listen(this.PORT, this.ADDRESS);

    // Выводим в консоль, на каком порту запущен сервер
    console.log(`Server is running on url: ${await app.getUrl()}`);
  }

  // Статический метод для создания экземпляра Nest-приложения
  public static createNestApp(): Promise<NestFastifyApplication> {
    return NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
      bufferLogs: true,
    });
  }
}