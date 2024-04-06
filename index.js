require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Routes
const authRoute = require('./src/routes/authRoute');
const tmpRoute = require('./src/routes/tmpRoute');

// Middlewares
const { errorMiddleware } = require('./src/middlewares/errorMiddleware');
const { NotFoundError } = require('./src/services/errorService');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/tmp', tmpRoute);


// Para manejar el error de rutas no definidas
app.use(() => { throw new NotFoundError() });

// Middleware de gestion de errores
app.use(errorMiddleware);

app.listen(3000, () => {
	console.log('Server running...');
})