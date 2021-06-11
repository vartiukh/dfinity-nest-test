import { Test, TestingModule } from '@nestjs/testing';
import { CanestersService } from './canesters.service';

describe('CanestersService', () => {
  let service: CanestersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanestersService],
    }).compile();

    service = module.get<CanestersService>(CanestersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
