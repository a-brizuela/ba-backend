import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { PnrMobile } from './pnr-mobile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PnrService {
  constructor(
    @InjectRepository(PnrMobile)
    private pnrRepository: Repository<PnrMobile>,
  ) {}

  find() {
    const found = this.pnrRepository.find();
  }

  async getPnrByLastName(lastName: string): Promise<PnrMobile[]> {
    const queryBuilder = this.pnrRepository.createQueryBuilder('pnr');
    const found = await queryBuilder
      .where('pnr.travelers LIKE :lastName', { lastName: `%${lastName}%` })
      .getMany();

    console.log('found', found);
    const payload: PnrMobile[] = found.map((pnr) => {
      return {
        pnr: pnr.pnr,
        bookingReference: pnr.bookingReference,
        travelers: pnr.travelers,
        contactInformation: pnr.contactInformation,
        itinerary: pnr.itinerary,
        ticketing: pnr.ticketing,
        travelAgency: pnr.travelAgency,
      };
    });
    if (found.length === 0 || !found) {
      throw new NotFoundException(`Cannot find PNR for last name ${lastName}`);
    }

    return payload;
  }
}
