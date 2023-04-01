
type tsection = ["food", "cleaning"]

export type Tproducts = {
    id: number,
    name: string,
    price: number,
    weight: number,
    section: tsection,
    expirationDate: Date,
}

export type IReqProduct = Omit<Tproducts, 'id'>

export type IReqProductOptional = Partial<Tproducts>