import { Module } from '@nestjs/common';
import { CanestersService } from './canesters.service';
import { CanestersController } from './canesters.controller';

@Module({
  controllers: [CanestersController],
  providers: [CanestersService]
})
export class CanestersModule {}
