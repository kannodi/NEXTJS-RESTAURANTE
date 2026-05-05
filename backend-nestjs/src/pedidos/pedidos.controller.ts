import { Controller, Get, Post, Body } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from '../types';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  findAll(): Pedido[] {
    return this.pedidosService.findAll();
  }

  @Post()
  create(@Body() pedido: Pedido): Pedido {
    return this.pedidosService.create(pedido);
  }
}
