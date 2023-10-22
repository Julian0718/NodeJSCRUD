import mongoose from 'mongoose';

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        enum: ['Men', 'Women', 'Teens']
    },
});

export default mongoose.model('Category', categoriesSchema);