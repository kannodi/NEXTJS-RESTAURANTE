import { Injectable } from '@nestjs/common';
import { Mesa } from '../types';

@Injectable()
export class MesasService {
  private mesas: Mesa[] = [
    { _id: '1111', numero: 1, estado: "disponible", capacidad: 4 },
    { _id: '2222', numero: 2, estado: 'disponible', capacidad: 2 },
    { _id: '3333', numero: 3, estado: 'reservada', capacidad: 6 },
    { _id: '4444', numero: 4, estado: 'disponible', capacidad: 4 },
    { _id: '5555', numero: 5, estado: 'fuera_servicio', capacidad: 2 },
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
