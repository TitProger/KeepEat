import { App } from './index';

async function bootstrap() {
  const app = new App(3000, '0.0.0.0');
  console.log("111");
  await app.run();
}

bootstrap()