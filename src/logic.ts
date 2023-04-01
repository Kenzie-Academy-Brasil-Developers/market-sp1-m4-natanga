import { Response, Request } from "express";
import { products } from './database';
import { IReqProduct, IReqProductOptional, Tproducts } from "./interfaces";

export const getAllProducts = (req: Request, res: Response): Response => {

    let value = 0;

    products.map((product: Tproducts) =>
        value = value + product.price
    )
    const page = {
        total: value,
        marketProducts: products,
    }
    return res.status(200).json(page)
}

export const getProduct = (req: Request, res: Response): Response => {

    const product: Tproducts | undefined = products.find(prod => prod.id === Number(req.params.id))

    return res.status(200).json(product)
}

export const createdProduct = (req: Request, res: Response): Response => {

    let value: number = 0

    const marketProducts = req.body.map((product: IReqProduct) => {
        value = product.price + value;

        let id = products.length
        if (id == 0) {
            id = 1
        } else {
            id = products[id - 1].id + 1
        }

        const currentDate = new Date();
        const futureDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMilliseconds())

        const newProduct: Tproducts = {
            ...product,
            id: id,
            expirationDate: futureDate,
        }
        products.push(newProduct)

        return newProduct
    })

    const page = {
        total: value,
        marketProducts: marketProducts,
    }

    return res.status(201).json(page)

}

export const updateproduct = (req: Request, res: Response): Response => {

    const IndexProduct: number | undefined = products.findIndex(product => product.id === Number(req.params.id));

    const updateProduct: Tproducts = {
        ...products[IndexProduct],
        ...req.body
    }

    products[IndexProduct] = updateProduct


    return res.status(200).json(updateProduct)
}

export const deleteProduct = (req: Request, res: Response): Response => {

    const indexProduct: number | undefined = products.findIndex(product => product.id === Number(req.params.id));

    products.splice(indexProduct,1)

    return res.status(204).json()
}