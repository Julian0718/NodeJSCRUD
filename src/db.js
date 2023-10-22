import mongoose from 'mongoose'

const uri = "mongodb+srv://julianRodriguez0718:admin1234@webapplication.ossxttd.mongodb.net/Marketplace?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

export const connectDB = async() => {
    try {
        await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log('You successfully connected to MongoDB!');
    }catch (error) {
        console.log(error);
    }
};