import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Habilitar CORS aqui
  app.enableCors({
    origin: ['http://18.188.60.38', 'http://localhost:3000'], // Permitir tanto o S3 quanto o localhost
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se for necessário enviar cookies ou autenticação
  });

  const config = new DocumentBuilder()
    .setTitle('API Customers')
    .setDescription('API Desafio Bemol Ominichannel')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
