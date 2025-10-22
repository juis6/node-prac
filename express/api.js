const express = require('express')
const morgan = require('morgan')
const { products } = require('./data')

const PORT = 5000

const app = express()

app.use('/api', morgan('tiny'))

const logger = (req, res, next) => {
    const { method, url } = req
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req, res) => {
    res.send(
        `
        <h1>Home Page</h1>
        <a href="/api/products">Products</a>
        `
    )
})

app.get('/api/products', logger, (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find((product) => {
        return product.id === Number(productID)
    })

    if (!singleProduct) {
        res.status(404)
    }

    res.json(singleProduct)
})

app.get('/api/query', (req, res) => {
    const { search, limit } = req.query

    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) {
        return res.status(200).send('No products found for provided query request!')
    }

    return res.status(200).json(sortedProducts)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
