import { NestFactory } from '@nestjs/core';
import { Logger, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Environment } from './config/environment.enum';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './core/constants/swagger.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Logger session
  const isProduction: boolean =
    configService.get<string>('NODE_ENV') === Environment.Production;
  const logger: LogLevel[] = isProduction
    ? ['debug', 'warn', 'error']
    : ['warn', 'error'];
  Logger.overrideLogger(logger);

  // Swagger session
  const swaggerConfig = new DocumentBuilder()
    .setTitle(SwaggerConfig.title)
    .setDescription(SwaggerConfig.description)
    .setVersion(SwaggerConfig.version)
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(configService.get<number>('PORT') || 3000);
}
bootstrap();
