import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailService } from './email/email.service';
import { EmailProcessor } from './email/email.processor';
import { SMSService } from './sms/sms.service';
import { EMAIL_QUEUE_NAME } from './constants';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: EMAIL_QUEUE_NAME,
    }),
  ],
  providers: [EmailService, EmailProcessor, SMSService],
  exports: [EmailService, SMSService],
})
export class CommunicationsModule {}
