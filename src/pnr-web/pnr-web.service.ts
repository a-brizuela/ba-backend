import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Pnr } from './pnr-web.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PnrService {
  constructor(
    @InjectRepository(Pnr)
    private pnrRepository: Repository<Pnr>,
  ) {}

  create(
    pnr,
    bookingReference,
    travelers,
    itinerary,
    contactInformation,
    ticketing,
    travelAgency,
    remarks,
  ) {
    const newPnr = this.pnrRepository.create({
      pnr,
      bookingReference,
      travelers,
      itinerary,
      contactInformation,
      ticketing,
      travelAgency,
      remarks,
    });

    return this.pnrRepository.save(newPnr);
  }

  find() {
    const found = this.pnrRepository.find();
  }

  async getPnrByLastName(lastName: string): Promise<Pnr[]> {
    const queryBuilder = this.pnrRepository.createQueryBuilder('pnr');
    console.log(lastName)
    const found = await queryBuilder
      .where('pnr.travelers LIKE :lastName', { lastName: `%${lastName}%` })
      .getMany();

    console.log(found);
    if (found.length === 0 || !found) {
      throw new NotFoundException(`Cannot find PNR for last name ${lastName}`);
    }

    return found;
  }
}
