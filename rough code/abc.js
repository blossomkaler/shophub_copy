/* const express=require("express");
const app=express();
const PORT=5000;
app.set("views","./views");
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));
app.get('/',(req,res)=>{
    res.render("payment.html"); 
})
 */


/*````````````````````````MONGO DB````````````````````````````````*/
const {productsArray} = require("./orders.js")

const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/SHOPHUB")
.then(() => {
    console.log('MongoDB connected');
}).catch(() => {
    console.log('Error in MongoDB connection');
})

const mySchema = new mongoose.Schema({
    productsList: Array
}); 

const order = mongoose.model('orders', mySchema)

const ordersArray = productsArray;

const orderDetails= new order({
    productsList: ordersArray
});

orderDetails.save().then(() => console.log('user saved'))




/* app.listen(PORT); */