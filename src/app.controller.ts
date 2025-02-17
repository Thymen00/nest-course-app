import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/showname')
  showName(): string {
    return this.appService.getName();
  }
  @Get('/showinfo')
  showInfo(): string {
    return this.appService.getInfo();
  }
  @Get('/showjson')
  showJson() {
    return this.appService.getJson();
  }
  @Get('/showgit')
  showGit(): string {
    return this.appService.getGit();
  }
}
