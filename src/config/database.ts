import { knex } from 'knex'
import dotenv from 'dotenv'
import pgPromise from 'pg-promise'

dotenv.config({path: './.env'})

const db =  knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'changeme',
        database: 'wallet',
        port: 5433,
    },
})




export {db}