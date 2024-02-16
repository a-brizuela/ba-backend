import { Controller, Get, Query } from '@nestjs/common';
import { PnrService } from './pnr-mobile.service';

@Controller('pnr-mobile')
export class PnrController {
  constructor(private pnrService: PnrService) {}

  @Get()
  async findPnr(@Query('lastName') lastName:string) {
    return await this.pnrService.getPnrByLastName(lastName);
  }
}
