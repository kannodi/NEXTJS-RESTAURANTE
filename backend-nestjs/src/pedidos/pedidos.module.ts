import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { MesasModule } from '../mesas/mesas.module';

@Module({
  imports: [MesasModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
