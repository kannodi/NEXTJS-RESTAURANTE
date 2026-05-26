import { Injectable } from '@nestjs/common';
import { Plato } from '../types';

@Injectable()
export class PlatosService {
  private platos: Plato[] = [
    { _id: 'p1', nombre: 'Hamburguesa Especial', precio: 12.5, stock: 20, categoria: 'Comida Rápida', descripcion: 'Doble carne, queso cheddar, tocino y salsa de la casa.' },
    { _id: 'p2', nombre: 'Pizza Margherita', precio: 15.0, stock: 15, categoria: 'Italiana', descripcion: 'Salsa de tomate, mozzarella fresca y albahaca.' },
    { _id: 'p3', nombre: 'Ensalada César', precio: 9.0, stock: 10, categoria: 'Saludable', descripcion: 'Lechuga romana, crutones, queso parmesano y aderezo clásico.' },
    { _id: 'p4', nombre: 'Tacos al Pastor', precio: 10.0, stock: 30, categoria: 'Mexicana', descripcion: '3 tacos de cerdo marinado con piña, cebolla y cilantro.' },
    { _id: 'p5', nombre: 'Sushi Variado', precio: 25.0, stock: 5, categoria: 'Japonesa', descripcion: '12 piezas de rolls surtidos con salmón, atún y palta.' },
  ];

  findAll(): Plato[] {
    return this.platos;
  }

  findOne(id: string): Plato | undefined {
    return this.platos.find((p) => p._id === id);
  }
}
