import { Module } from '@nestjs/common';
import { PnrWebModule } from './pnr-web/pnr-web.module';
import { PnrMobileModule } from './pnr-mobile/pnr-mobile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pnr } from './pnr-web/pnr-web.entity';
import { PnrMobile } from './pnr-mobile/pnr-mobile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Pnr, PnrMobile],
      synchronize: true,
    }),
    PnrWebModule,
    PnrMobileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
