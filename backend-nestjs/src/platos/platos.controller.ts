import { Controller, Get, Param } from '@nestjs/common';
import { PlatosService } from './platos.service';
import { Plato } from '../types';

@Controller('platos')
export class PlatosController {
  constructor(private readonly platosService: PlatosService) {}

  @Get()
  findAll(): Plato[] {
    return this.platosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Plato | undefined {
    return this.platosService.findOne(id);
  }
}
