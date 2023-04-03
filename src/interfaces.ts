
import { products } from './database';
type tsection = ["food", "cleaning"]

export type Tproducts = {
    id: number,
    name: string,
    price: number,
    weight: number,
    section: tsection,
    expirationDate: Date,
}


export interface ICleaningProduct extends Tproducts { }

export interface IFoodProduct extends Tproducts {
    calories: number;
}

export type IReqProduct = {
    name: string,
    price: number,
    weight: number,
    section: tsection,
    calories?: number;
    expirationDate: Date,
}
