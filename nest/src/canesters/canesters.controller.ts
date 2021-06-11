import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanestersService } from './canesters.service';
import { CreateCanesterDto } from './dto/create-canester.dto';
import { UpdateCanesterDto } from './dto/update-canester.dto';

@Controller('canesters')
export class CanestersController {
  constructor(private readonly canestersService: CanestersService) {}

  @Post()
  create(@Body() createCanesterDto: CreateCanesterDto) {
    return this.canestersService.create(createCanesterDto);
  }

  @Get()
  findAll() {
    return this.canestersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canestersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanesterDto: UpdateCanesterDto) {
    return this.canestersService.update(+id, updateCanesterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canestersService.remove(+id);
  }
}
