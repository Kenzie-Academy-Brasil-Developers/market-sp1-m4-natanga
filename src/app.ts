import express, { Application } from 'express'
import { productVerifyExistbyId, productVerifyExistbyName } from './middleware'
import { getAllProducts, getProduct, createdProduct, updateproduct, deleteProduct } from './logic';

const app: Application = express()
app.use(express.json())

app.post('/products', productVerifyExistbyName, createdProduct )

app.get('/products', getAllProducts)

app.get('/products/:id', productVerifyExistbyId, getProduct)

app.patch('/products/:id',productVerifyExistbyId, productVerifyExistbyName, updateproduct)

app.delete('/products/:id', productVerifyExistbyId, deleteProduct)



app.listen(3000, () => {
    console.log('Server is Runing')
})