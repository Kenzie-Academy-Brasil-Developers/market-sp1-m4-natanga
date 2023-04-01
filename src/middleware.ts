import { NextFunction, Request, Response } from "express";
import { products } from "./database";
import { Tproducts, IReqProduct } from "./interfaces";

export const productVerifyExistbyId = (req: Request, res: Response, next: NextFunction): Response | void => {

    const product: Tproducts | undefined = products.find(product => product.id == Number(req.params.id))

    if (!product ?? req.method !== 'PATCH') {
        return res.status(404).json({ "error": "Product not found" });
    }


    return next()
}

export const productVerifyExistbyName = (req: Request, res: Response, next: NextFunction): Response | void => {

    const productsToVerify = Array.isArray(req.body) ? req.body : [req.body];

    const verify = productsToVerify.filter((product: IReqProduct) => products.find(prod => prod.name === product.name))

    if (verify.length) {
        return res.status(409).json({ "error": "Product already registered" })
    }

    return next()
}