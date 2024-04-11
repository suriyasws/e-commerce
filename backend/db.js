const mongoose=require('mongoose');


module.exports=()=>{
	mongoose.connect("mongodb://suriyawpo2255:srysrysry@ac-mjcsoan-shard-00-00.x5hhis3.mongodb.net:27017,ac-mjcsoan-shard-00-01.x5hhis3.mongodb.net:27017,ac-mjcsoan-shard-00-02.x5hhis3.mongodb.net:27017/?ssl=true&replicaSet=atlas-uivrk3-shard-0&authSource=admin&retryWrites=true&w=majority")
 .then(data=>{
	  console.log('connected');
	})
 .catch((err)=>{console.log(err)});
};
