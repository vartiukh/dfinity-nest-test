import {Controller, Get, Param, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('deploy')
  deploy() {
    return this.appService.deploy();
  }

  @Get('canisters')
  list() {
    return this.appService.list();
  }

  @Get(':canisterId/count')
  getCount(@Param('canisterId') canisterId: string) {
    return this.appService.getCount(canisterId);
  }

  @Post(':canisterId/count')
  setCount(@Param('canisterId') canisterId: string, @Body() { count }: { count: string }){
    return this.appService.setCount(canisterId, parseInt(count));
  };
}
