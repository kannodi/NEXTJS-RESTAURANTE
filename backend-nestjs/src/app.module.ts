import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MesasModule } from './mesas/mesas.module';
import { PlatosModule } from './platos/platos.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [MesasModule, PlatosModule, PedidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
