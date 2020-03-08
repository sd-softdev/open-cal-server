import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppSettings } from './app.settings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(AppSettings.Port, () => {
    console.log('Listen on port:', AppSettings.Port);
  });
}
bootstrap();
