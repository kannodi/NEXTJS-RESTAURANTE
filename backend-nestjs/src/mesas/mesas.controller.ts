import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { Mesa } from '../types';

@Controller('mesas')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Get()
  findAll(): Mesa[] {
    return this.mesasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Mesa | undefined {
    return this.mesasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesa: Partial<Mesa>): Mesa | null {
    return this.mesasService.update(id, updateMesa);
  }
}
