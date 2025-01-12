import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailService } from './email/email.service';
import { EmailProcessor } from './email/email.processor';
import { SMSService } from './sms/sms.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: 'emailQueue',
    }),
  ],
  providers: [EmailService, EmailProcessor, SMSService],
  exports: [EmailService, SMSService],
})
export class CommunicationsModule {}
