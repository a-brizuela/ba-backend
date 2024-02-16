import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PnrMobile {
  @PrimaryColumn()
  pnr: string;

  @Column()
  bookingReference: string;
  @Column()
  travelers: string;
  @Column()
  itinerary: string;
  @Column()
  contactInformation: string;
  @Column()
  ticketing: string;
  @Column()
  travelAgency: string;
}
