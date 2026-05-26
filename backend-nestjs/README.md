# 🍽️ Restaurant Backend (NestJS)

Este es el backend del proyecto **Sistema de Restaurante**, construido con [NestJS](https://nestjs.com/). Proporciona una API REST para gestionar mesas, platos y pedidos, sincronizada con las interfaces de TypeScript del frontend.

## 🚀 Características

- **Tecnología**: NestJS (Node.js Framework).
- **Puerto**: Ejecuta en `http://localhost:3001`.
- **CORS**: Habilitado para comunicación con el frontend de Next.js.
- **Datos**: Utiliza datos en memoria (seeds) para pruebas rápidas sin necesidad de base de datos externa inicialmente.

## 🛠️ Instalación y Uso

1. Entra a la carpeta del backend:
   ```bash
   cd backend-nestjs
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

## 📡 Endpoints de la API

Todos los endpoints tienen el prefijo `/api`.

| Entidad | Endpoint | Método | Descripción |
| :--- | :--- | :--- | :--- |
| **Mesas** | `/api/mesas` | `GET` | Obtiene la lista de todas las mesas. |
| **Mesas** | `/api/mesas/:id` | `GET` | Obtiene el detalle de una mesa específica. |
| **Platos** | `/api/platos` | `GET` | Obtiene el menú completo del restaurante. |
| **Pedidos** | `/api/pedidos` | `GET` | Obtiene la lista de pedidos realizados. |
| **Pedidos** | `/api/pedidos` | `POST` | Crea un nuevo pedido. |

## 📁 Estructura del Proyecto

- `src/mesas`: Lógica para la gestión de mesas.
- `src/platos`: Lógica para el catálogo de platos/menú.
- `src/pedidos`: Lógica para la creación y consulta de comandas.
- `src/types.ts`: Definiciones de tipos compartidas con el frontend.

---
*Desarrollado como parte de las prácticas de Next.js.*
