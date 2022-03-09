const fastify = require('fastify')({ logger: true });
const dotenv = require('dotenv').config({ path: './src/config/.env' });

const port = process.env.PORT || 3002;
fastify.register(require('fastify-cors'));

// db
require('./src/config/db');

fastify.get('/', async (req, reply) => {
    return { message: 'Hello Fastify'}
});

const startServer = async () => {
    try {
        await fastify
            .listen(port)
            .then(() => {
                console.log(`Server started on port ${port}`);
            }).catch((err) => {
                console.log(`Server failed to start on port ${port}`);
            });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
};

startServer();