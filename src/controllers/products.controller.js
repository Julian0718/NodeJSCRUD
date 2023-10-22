import Product from '../models/product.model.js'

export const getProducts = async(req, res) => {
    const name = req.query.name;

    if (name) {
        const productByName = await Product.find({ name: name });
        res.json(productByName);
      } else {
        const products = await Product.find();
        res.json(products);
      }
};

export const getProduct = async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({message: "Product not found"});
    res.json(product);
};

export const createProduct = async (req, res) => {
    const {name, description, price, quantity, category} = req.body;
    try{
        const newProduct = new Product({
            name,
            description,
            price,
            quantity,
            category
        });

        const saveProduct = await newProduct.save();
        res.send(saveProduct);
    }catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if(!product) return res.status(404).json({message: "Product not found"});
    res.json(product);
};

export const deleteProduct = async(req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product) return res.status(404).json({message: "Product not found"});
    res.json(product);
};

export const deleteProducts = async (req, res) => {
    try{
        await Product.deleteMany();
        res.status(200).json({message: "Deleted all products"});
    }catch (error) {
        console.log(error);
    }
};