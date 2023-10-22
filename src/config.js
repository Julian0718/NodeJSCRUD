import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import productsRoutes from './routes/products.routes.js';
import morgan from 'morgan';

export default function () {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(morgan("dev"));
    app.set('views', './src/views');
    app.set('view engine', 'ejs');
    app.use('/api', productsRoutes);
    app.use(express.static('public'));
    app.use(express.static("./node_modules"));
    return app;
};