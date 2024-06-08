import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'products'})

export class ProductEntity{
    @PrimaryColumn({name: 'product_id'})
    product_id: number

    @Column({name: 'product_name'})
    product_name: string

    @Column({name: 'product_price'})
    product_price: number

    @Column({name: 'product_quantity'})
    product_quantity: number
}