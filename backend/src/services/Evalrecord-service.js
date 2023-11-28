

const evalrecord= require("../models/Evalrecord");


exports.createEvalRecord = async function (db, evalRecord){
    return (await db.collection('evalRecord').insertOne(evalRecord)).insertedId; //return unique ID
}


exports.getAllEvalRecords = async function(db){
    return (await db.collection('evalRecord').find({}).toArray());
}

exports.getEvalRecordByYear = async function(db, year){
    return (await db.collection('evalRecord').find({year: parseInt(year)}).toArray());
}
