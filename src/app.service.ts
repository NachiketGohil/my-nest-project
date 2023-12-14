import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nachiket!\nYou are Smart!';
  }

  postHello(): string {
    return 'Bye Smart Nachiket!';
  }
}
