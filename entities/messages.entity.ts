import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'messages'})
export class MessageEntity{
    @PrimaryColumn({name: 'mid'})
    mid: number

    @Column({name: 'sender'})
    sender: number

    @Column({name: 'text'})
    text: string

    @Column({name: 'likes'})
    likes: number
}