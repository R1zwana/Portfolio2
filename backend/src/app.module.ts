import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ContactModule } from './contact/contact.module';
import * as nodemailer from 'nodemailer';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const user = config.get<string>('MAIL_USER');
                const pass = config.get<string>('MAIL_PASS');

                // If credentials are missing or default, use "Mock" mode
                if (!pass || pass === 'your-app-password') {
                    console.log('⚠️  No email credentials found. Running in MOCK mode (emails will be logged to console).');
                    return {
                        transport: {
                            streamTransport: true,
                            newline: 'windows',
                            buffer: true
                        },
                        defaults: {
                            from: '"Portfolio Contact" <noreply@portfolio.com>',
                        },
                    };
                }

                // Real SMTP Configuration
                return {
                    transport: {
                        host: 'smtp.gmail.com',
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user,
                            pass,
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    },
                    defaults: {
                        from: `"Portfolio Contact" <${user}>`,
                    },
                };
            },
        }),
        ContactModule,
    ],
})
export class AppModule { }
