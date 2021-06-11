import { Injectable } from '@nestjs/common';
import { CreateCanesterDto } from './dto/create-canester.dto';
import { UpdateCanesterDto } from './dto/update-canester.dto';

@Injectable()
export class CanestersService {
  create(createCanesterDto: CreateCanesterDto) {
    return 'This action adds a new canester';
  }

  findAll() {
    return `This action returns all canesters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} canester`;
  }

  update(id: number, updateCanesterDto: UpdateCanesterDto) {
    return `This action updates a #${id} canester`;
  }

  remove(id: number) {
    return `This action removes a #${id} canester`;
  }
}
