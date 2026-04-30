const mesas = [
    { _id: '1', numero: 1, estado: 'disponible', capacidad: 2, comensales: 0, pedidoActivoId: null },
    { _id: '2', numero: 2, estado: 'ocupada', capacidad: 4, comensales: 3, pedidoActivoId: '101' },
    { _id: '3', numero: 3, estado: 'disponible', capacidad: 6, comensales: 0, pedidoActivoId: null },
    { _id: '4', numero: 4, estado: 'reservada', capacidad: 4, comensales: 0, pedidoActivoId: null },
    { _id: '5', numero: 5, estado: 'fuera_servicio', capacidad: 2, comensales: 0, pedidoActivoId: null },
];

const platos = [
    { _id: 'p1', nombre: 'Lomo Saltado', precio: 35.50, stock: 10, categoria: 'Fondos' },
    { _id: 'p2', nombre: 'Ceviche Mixto', precio: 40.00, stock: 5, categoria: 'Entradas' },
    { _id: 'p3', nombre: 'Ají de Gallina', precio: 28.00, stock: 8, categoria: 'Fondos' },
    { _id: 'p4', nombre: 'Causa Rellena', precio: 18.00, stock: 12, categoria: 'Entradas' },
    { _id: 'p5', nombre: 'Pisco Sour', precio: 22.00, stock: 20, categoria: 'Bebidas' },
    { _id: 'p6', nombre: 'Chicha Morada', precio: 12.00, stock: 15, categoria: 'Bebidas' }
];

let pedidos = []; // Almacenamiento en memoria para pedidos

module.exports = {
    mesas,
    platos,
    pedidos
};
