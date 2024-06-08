import express = require('express')
import {Request, Response} from 'express'
import { AppDataSource } from '../AppDataSource'
import { ProductEntity } from '../entities/products.entity'

const router = express.Router()


router.get("/", async(req: Request, res: Response)=>{
    const products = await AppDataSource.createQueryBuilder().select().from(ProductEntity, "product").execute()

    console.log(products)

    res.status(200).send(products)
})



module.exports = router