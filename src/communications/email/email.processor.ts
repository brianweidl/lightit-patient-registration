import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import * as nodemailer from 'nodemailer';
import { EMAIL_QUEUE_NAME } from '../constants';

@Processor(EMAIL_QUEUE_NAME)
export class EmailProcessor {
  private transporter: nodemailer.Transporter;
  private logger = new Logger(EmailProcessor.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  @Process()
  async handleEmailJob(job: Job) {
    this.logger.log('Processing email job');
    const { email, subject, message } = job.data;

    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject,
        text: message,
      });
      this.logger.log(`Email sent to ${email} with subject: "${subject}"`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}:`, error);
      throw error;
    }
  }
}
