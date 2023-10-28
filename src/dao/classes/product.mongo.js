import productModel from "../models/product.model.js"

export default class Products {
    
    get = async (query, limitParam, pageParam, sortParam) => {
        try {
            let paginateProducts = await productModel.paginate(query, { limit: limitParam, page: pageParam, sort: { price: sortParam } })
            return paginateProducts
        } catch (error) {
            console.error(error)
        }
    }

    put = async (queryId, data) => {
        try {
            let update = await productModel.updateMany(queryId, data)
            return update
        } catch (error) {
            console.error(error)
        }
    }

    post = async (data) => {
        try {
            let newProduct = await productModel.create(data)
            return newProduct
        } catch (error) {
            console.error(error)
        }
    }

    delete = async (productId) => {
        try {
            let deleteProduct = await productModel.deleteOne(productId)
            return deleteProduct
        } catch (error) {
            console.error(error)
        }
    }
}