import { Module } from '@nestjs/common';
import { PnrModule } from './pnr/pnr.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pnr } from './pnr/pnr.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // host: 'localhost',
      // port: 5432,
      // username: 'adrian.brizuela',
      // password: 'postgres',
      // database: 'british-academy-db',
      database: 'db.sqlite',
      // autoLoadEntities: true,
      entities: [Pnr],
      synchronize: true,
    }),
    PnrModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
