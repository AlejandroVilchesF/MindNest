import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/client';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTestInfo(): Promise<string> {
    const value = await prisma.test.findFirst();
    return value?.test_row ?? 'Default test row';
  }  
}
