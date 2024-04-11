const mongoose=require ('mongoose');
const userSchema=new mongoose.Schema({
	   product:{type:String},
       details:{type:String},
	   price:{type:Number},
	   category:{type: String},
	   imageurl:{type: String, default:'images/user.jpg'}
	   	
	});
const products=mongoose.model('products',userSchema);
module.exports=products;
