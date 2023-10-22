import {Router} from 'express'
import { createProduct, updateProduct, deleteProduct, getProduct, getProducts, deleteProducts} from '../controllers/products.controller.js'

const router = Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home' });
  });

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products', deleteProducts);
router.delete('/products/:id', deleteProduct);

router.get('/products/published');
router.get('/products?name=');

export default router; 