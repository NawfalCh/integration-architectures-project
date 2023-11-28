
const salesmen= require("../models/Salesmen");



// insert a new Salesman 

exports.createSalesmen= async function(db, salesmen){
    
    return (await db.collecction("Salesmen").insertOne(salesmen)).insertedId; //return unique ID
}


//get all Salesmen from database

exports.getAllSalesmen= async function(db){
    return await db.collection("Salesmen").find({}).toArray();
}

// get Salesmen by sid

exports.getSalesmenBySid= async function(db, sid){

    return await db.collection("Salesmen").findOne({ sid: sid });
}

//update Salesmen by sid 

exports.updateSalesmen= async function(db, sid,salesmen){
    return await db.collecction("Salesmen").replaceOne({sid},salesmen);
}

//delete Salesmen by sid from database

exports.deleteSalesmen= async function(db, sid){

    return  await db.collection("Salesmen").deleteOne({sid});

}