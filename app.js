import express from 'express'
import {cors} from "cors"
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

import {petRoutes} from "./pets/routes/pets.routes.js"

const app = express()
const port = 3000

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pets API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ]
    },
    apis: ['./pets/routes/*.js'],
}

/* Global middlewares */
app.use(cors())
app.use(express.json())
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)

/* Route */
app.use('/pets', petRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`[server]: Server is running at https:localhost:${port}`))
}
/* Routes */
app.use('/pets', petRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
                app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
}
// https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/
export default app