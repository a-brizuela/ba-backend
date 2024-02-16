import { Module } from '@nestjs/common';
import { PnrController } from './pnr.controller';
import { PnrService } from './pnr.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pnr } from './pnr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pnr])],
  controllers: [PnrController],
  providers: [PnrService],
})
export class PnrModule {}
