import { Module } from '@nestjs/common';
import { PnrController } from './pnr-web.controller';
import { PnrService } from './pnr-web.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pnr } from './pnr-web.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pnr])],
  controllers: [PnrController],
  providers: [PnrService],
})
export class PnrWebModule {}
