//? Solo las acciones y de la base de datos

const  uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = () =>{
    const data = Products.findAll()
    return data
}

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id : id
        },
    });
    return data 
}

const editProduct = async(id,data)=>{
    const response = await Products.update(data, {
        where: {
            id:id
        }
    })
    return response //? si el where no encuentra nada, retorna null
}

const deleteProduct = async(id)=>{
    const data = await Products.destroy({
        where:{
            id:id
        }
    })
    return data
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
}