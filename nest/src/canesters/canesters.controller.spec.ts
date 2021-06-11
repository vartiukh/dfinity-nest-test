import { Test, TestingModule } from '@nestjs/testing';
import { CanestersController } from './canesters.controller';
import { CanestersService } from './canesters.service';

describe('CanestersController', () => {
  let controller: CanestersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanestersController],
      providers: [CanestersService],
    }).compile();

    controller = module.get<CanestersController>(CanestersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
