import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContactService {
    constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
    ) { } // Trigger rebuild

    async sendEmail(createContactDto: CreateContactDto) {
        const { name, email, message } = createContactDto;
        const recipient = this.configService.get<string>('MAIL_USER');

        try {
            const result = await this.mailerService.sendMail({
                to: recipient,
                subject: `New Portfolio Message from ${name}`,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            });

            // Log for Demo Mode
            if (result.messageId && result.messageId.includes('@')) {
                // Real email sent
            } else {
                console.log('📧 [MOCK EMAIL SENT]', result);
            }

            return { success: true, message: 'Email sent successfully (or logged)' };
        } catch (error) {
            console.error('Email sending failed:', error);
            throw new InternalServerErrorException('Failed to send email');
        }
    }
}
