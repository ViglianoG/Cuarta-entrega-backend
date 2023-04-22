import CartModel from "./models/cart.model.js"

export default class Cart {
    constructor() {}

    create = async () => {
        const cart = await CartModel.create({
            products: []
        })
        return cart
    }

    getById = async (id) => {
        return await CartModel.findById(id).populate("products.product")
    }

    update = async (id, data) => {
        return await CartModel.updateOne({
            _id: id
        }, data)
    }

}