const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { mesas, platos, pedidos } = require('./data/mock');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite a Express leer el body en formato JSON

const SECRET_KEY = 'mi_secreto_super_seguro_para_railway'; // En producción esto va en variables de entorno

// --- 1. Autenticación (Login) ---
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    // Simulación simple: si el correo y password existen y son más de 3 letras, entra.
    if (email === 'mesero@gmail.com' && password === '1234') {
        // Generar un token falso real con jsonwebtoken
        const token = jwt.sign({ email, id: 'user_123' }, SECRET_KEY, { expiresIn: '8h' });
        res.json({ token, user: { email } });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

// Middleware para proteger rutas
const verificarToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, SECRET_KEY, (err, authData) => {
            if (err) {
                res.sendStatus(403); // Prohibido
            } else {
                req.authData = authData;
                next(); // Pasa a la siguiente función
            }
        });
    } else {
        res.sendStatus(401); // No autorizado
    }
};

// --- 2. Platos (Menú) ---
app.get('/menu', verificarToken, (req, res) => {
    // Simulamos un poco de retraso (opcional)
    setTimeout(() => {
        res.json(platos);
    }, 500);
});

// --- 3. Mesas ---
app.get('/mesas', verificarToken, (req, res) => {
    const estado = req.query.estado;
    let resultado = mesas;

    if (estado) {
        resultado = mesas.filter(m => m.estado === estado);
    }

    res.json(resultado);
});

// --- 4. Pedidos ---
// Obtener un pedido por ID
app.get('/pedidos/:id', verificarToken, (req, res) => {
    const pedido = pedidos.find(p => p._id === req.params.id);
    if (pedido) {
        res.json(pedido);
    } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
    }
});

// Crear un nuevo pedido
app.post('/pedidos', verificarToken, (req, res) => {
    const { mesaId, tipo, items } = req.body;

    if (!items || items.length === 0) {
        return res.status(400).json({ message: 'El pedido debe tener al menos un ítem' });
    }

    const total = items.reduce((acc, item) => acc + (item.precioUnitario * item.cantidad), 0);

    const nuevoPedido = {
        _id: uuidv4().slice(0, 8), // ID corto simulando Mongo
        mesaId: mesaId || null,
        tipo: tipo, // 'mesa' | 'para_llevar'
        estado: 'pendiente',
        items: items,
        total: total,
        createdAt: new Date().toISOString()
    };

    pedidos.push(nuevoPedido);

    // Si se asignó a una mesa, cambiar el estado de la mesa a 'ocupada' (opcional, extra feature)
    if (mesaId) {
        const mesa = mesas.find(m => m._id === mesaId);
        if (mesa) {
            mesa.estado = 'ocupada';
            mesa.pedidoActivoId = nuevoPedido._id;
        }
    }

    res.status(201).json(nuevoPedido);
});

// Cambiar estado del pedido
app.patch('/pedidos/:id/estado', verificarToken, (req, res) => {
    const { estado } = req.body;
    const pedido = pedidos.find(p => p._id === req.params.id);

    if (pedido) {
        pedido.estado = estado;
        res.json(pedido);
    } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
    }
});

// Endpoint de prueba (Health Check para Railway)
app.get('/', (req, res) => {
    res.send('API del Restaurante en funcionamiento 🚀');
});

// --- Iniciar Servidor ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en el puerto ${PORT}`);
    console.log(`Punto de entrada: http://localhost:${PORT}`);
});
