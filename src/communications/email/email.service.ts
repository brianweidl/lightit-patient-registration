import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EMAIL_QUEUE_NAME } from '../constants';

@Injectable()
export class EmailService {
  constructor(@InjectQueue(EMAIL_QUEUE_NAME) private emailQueue: Queue) {}
  private logger = new Logger(EmailService.name);

  async sendEmail(
    email: string,
    subject: string,
    message: string,
  ): Promise<void> {
    try {
      await this.emailQueue.add({ email, subject, message });
    } catch (error) {
      this.logger.error('Failed to enqueue email job:', error);
      throw new Error('Failed to enqueue email job');
    }
  }
}
