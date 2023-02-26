import { DataSource } from 'typeorm'
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: [
    './src/models/*.ts'
  ],
  migrations: [
    './src/database/migrations/*.ts'
  ]
})

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Successfully connected with database!')
  })
  .catch((err) => {
    console.error('❌ Error during Data Source initialization', err)
  })
