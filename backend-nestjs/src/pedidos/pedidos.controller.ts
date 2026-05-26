import { Controller, Get, Post, Body, Patch, Param, NotFoundException } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from '../types';
import type { EstadoPedido } from '../types';

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

  @Patch(':id/estado')
  cambiarEstado(
    @Param('id') id: string,
    @Body('estado') estado: string,
  ): Pedido {
    const pedido = this.pedidosService.updateEstado(id, estado as EstadoPedido);
    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return pedido;
  }
}
