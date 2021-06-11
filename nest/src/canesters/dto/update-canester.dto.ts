import { PartialType } from '@nestjs/mapped-types';
import { CreateCanesterDto } from './create-canester.dto';

export class UpdateCanesterDto extends PartialType(CreateCanesterDto) {}
