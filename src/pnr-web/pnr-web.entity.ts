import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pnr {
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
  @Column()
  remarks: string;
}
