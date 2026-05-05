import { Injectable } from '@nestjs/common';
import { Mesa } from '../types';

@Injectable()
export class MesasService {
  private mesas: Mesa[] = [
    { _id: '1', numero: 1, estado: 'disponible', capacidad: 4 },
    { _id: '2', numero: 2, estado: 'ocupada', capacidad: 2, comensales: 2, pedidoActivoId: 'p1' },
    { _id: '3', numero: 3, estado: 'reservada', capacidad: 6 },
    { _id: '4', numero: 4, estado: 'disponible', capacidad: 4 },
    { _id: '5', numero: 5, estado: 'fuera_servicio', capacidad: 2 },
  ];

  findAll(): Mesa[] {
    return this.mesas;
  }

  findOne(id: string): Mesa | undefined {
    return this.mesas.find((m) => m._id === id);
  }

  update(id: string, updateMesa: Partial<Mesa>): Mesa | null {
    const index = this.mesas.findIndex((m) => m._id === id);
    if (index !== -1) {
      this.mesas[index] = { ...this.mesas[index], ...updateMesa };
      return this.mesas[index];
    }
    return null;
  }
}
