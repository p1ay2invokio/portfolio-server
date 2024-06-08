import express = require('express')

import {Request, Response} from 'express'
import { AppDataSource } from '../AppDataSource'
import { MessageEntity } from '../entities/messages.entity'


const router = express.Router()

router.get('/', async(req: Request, res: Response)=>{
    const comments = await AppDataSource.createQueryBuilder().select().from(MessageEntity, "message").execute()

    res.status(200).send(comments)
})

router.patch('/like/:mid', async(req: Request, res: Response)=>{

    const {mid} = req.params

    const current_like = await AppDataSource.createQueryBuilder().select(['likes']).from(MessageEntity, 'message').where("mid = :mid", {mid: mid}).getRawOne()

    const liked = await AppDataSource.createQueryBuilder().update(MessageEntity).set({likes: current_like.likes + 1}).where({mid: mid}).execute()

    res.status(200).send("Liked")
})

module.exports = router