import { Test, TestingModule } from '@nestjs/testing';
import { PnrController } from './pnr-web.controller';
import { PnrService } from './pnr-web.service';
import { Pnr } from './pnr-web.entity';

describe('Controller', () => {
  let Controller: PnrController;
  let fakePnrService: Partial<PnrService>;

  beforeEach(async () => {
    fakePnrService = {
      getPnrByLastName: (lastName: string) => {
        return Promise.resolve([
          {
            pnr: 'Test',
            bookingReference: 'Test',
            travelers:
              '[{firstName: "John", lastName: "Doe", passengerType: "ADT"}]',
          },
        ] as Pnr[]);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PnrController],
      providers: [{ provide: PnrService, useValue: fakePnrService }],
    }).compile();

    fakePnrService = module.get<PnrService>(PnrService);
    Controller = module.get<PnrController>(PnrController);
  });

  it('findPnr returns a pnr using last name', async () => {
    const pnr = await Controller.findPnr('Doe');
    expect(pnr.length).toEqual(1);
    expect(pnr[0].travelers).toEqual(
      '[{firstName: "John", lastName: "Doe", passengerType: "ADT"}]',
    );
  });
});
