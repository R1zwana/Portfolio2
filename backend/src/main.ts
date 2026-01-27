import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable CORS for frontend
    app.enableCors({
        origin: '*', // Allow all for development, restrict in production
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });

    // Global validation pipe
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    // Global prefix
    app.setGlobalPrefix('api');

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
