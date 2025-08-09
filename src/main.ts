// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proxy from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Пример маршрутизации:
  // Перенаправляем все запросы к '/api/auth' на микросервис аутентификации
  app.use('/api/auth', proxy.createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

  // Перенаправляем все запросы к '/api/products' на микросервис продуктов
  app.use('/api/products', proxy.createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

  await app.listen(3000);
}
bootstrap();