import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PnrService } from './pnr.service';
import { CreatePnrDto } from './dto/create-pnr.dto';

@Controller('pnr')
export class PnrController {
  constructor(private pnrService: PnrService) {}

  @Post()
  createPnr(@Body() body: CreatePnrDto) {
    console.log(
      body.pnr,
      'pnr',
      body.bookingReference,
      'ref',
      JSON.stringify(body.travelers),
      "travelers",
      JSON.stringify(body.itinerary),
      "itinerary",
      JSON.stringify(body.contactInformation),
      "info",
      JSON.stringify(body.ticketing),
      "ticket",
      JSON.stringify(body.travelAgency),
      "agency",
      JSON.stringify(body.remarks),
      "remarks"
    );
    this.pnrService.create(
      body.pnr,
      body.bookingReference,
      JSON.stringify(body.travelers),
      JSON.stringify(body.itinerary),
      JSON.stringify(body.contactInformation),
      JSON.stringify(body.ticketing),
      JSON.stringify(body.travelAgency),
      JSON.stringify(body.remarks),
    );
  }

  // @Get('/:lastName')
  // getAllPnr(@Param('travelers') lastName: string) {
  //   return this.pnrService.find(lastName);
  // }

  @Get()
  async findPnr(@Query('lastName') lastName:string) {
    return await this.pnrService.getPnrByLastName(lastName);
  }
}
