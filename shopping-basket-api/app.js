const fastify = require('fastify')({ logger: true });
const dotenv = require('dotenv');
fastify.register(require('fastify-cors'));
const db = require('./src/config/db');
const qs = require('qs')
fastify.register(require('fastify-formbody'), { parser: str => qs.parse(str) })

// dotenv
dotenv.config({ path: './src/config/.env' });

const port = process.env.PORT || 3002;

// routes
const productRouter = require('./src/routes/productRouter');
const basketRouter = require('./src/routes/basketRouter');

// db
db();

fastify.get('/', async (req, reply) => {
    return { message: 'Hello Fastify'}
});

productRouter.forEach((route, index) => {
    fastify.route(route)
})

basketRouter.forEach((route, index) => {
    fastify.route(route)
})

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