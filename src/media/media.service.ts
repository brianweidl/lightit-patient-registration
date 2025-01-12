import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MediaService {
  private uploadDir = path.join(__dirname, '..', 'uploads');

  constructor() {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }
  async handleMedia(base64String: string): Promise<string> {
    const matches = base64String.match(/^data:(.+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      throw new BadRequestException('Invalid Base64 string');
    }

    const fileType = matches[1];
    const fileExtension = fileType.split('/')[1];

    const buffer = Buffer.from(base64String, 'base64');

    const fileName = `${Date.now()}.${fileExtension}`;

    const filePath = path.join(__dirname, '..', 'uploads', fileName);

    await fs.promises.writeFile(filePath, buffer);

    return filePath;
  }
}
