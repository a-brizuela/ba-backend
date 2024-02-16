import { Module } from '@nestjs/common';
import { PnrController } from './pnr-mobile.controller';
import { PnrService } from './pnr-mobile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PnrMobile } from './pnr-mobile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PnrMobile])],
  controllers: [PnrController],
  providers: [PnrService],
})
export class PnrMobileModule {}
