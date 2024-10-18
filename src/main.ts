import { NestFactory } from '@nestjs/core';
import { Logger, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Environment } from './config/environment.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const isProduction: boolean =configService.get<string>('NODE_ENV') === Environment.Production;
  const logger: LogLevel[] = isProduction
    ? ['debug', 'warn', 'error']
    : ['warn', 'error'];
  Logger.overrideLogger(logger);

  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
