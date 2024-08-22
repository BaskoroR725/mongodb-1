const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => {
    console.log("CONNECTION OPEN!!!")
  })
  .catch(err => {
    console.log("OH NO ERROR!!!!")
    console.log(err)
  })
 
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 20
    },
    price:{
        type: Number,
        required: true
    },
    onSale:{
        type:Boolean,
        default: false
    },
    categories:[String],
    qty: {
        online: {
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    }
});

const Product = mongoose.model('Product', productSchema)

const bike = new Product({name: 'Street Helmet', price: 699, categories:['CYCLING','SAFETY'] })
bike.save()
.then(data =>{
    console.log("It Worked!")
    console.log(data)
})
.catch(
    console.log(error)
)