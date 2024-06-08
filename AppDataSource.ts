import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    host: 'localhost',
    type: 'mysql',
    username: 'root',
    password: '',
    database: 'portfolio',
    port: 3306,
    entities: ['./entities/*.entity.ts'],
    synchronize: false
})


AppDataSource.initialize().then(()=>{
    console.log("AppDataSource Initialized!")
})