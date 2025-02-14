import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS!';
  }
  getName(): string {
    return 'Thymen';
  }
  getInfo(): string {
    return 'Hello, I am Thymen, I am 21 years old';
  }
  getJson() {
    return {
      name: 'Thymen',
      lastname: 'Fegel',
      age: 21,
      hobby: 'eat a lot',
    };
  }
}
