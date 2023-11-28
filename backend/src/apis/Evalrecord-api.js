
const evalrecordsevice= require("../services/Evalrecord-service");



exports.addEvalrecord= async function(req, res){
    const db= req.app.get("db"); //get database

    await evalrecordsevice.createEvalRecord(db,req.body);

    res.send("Evalrecord created successfully");
}


exports.getAllRecords= async function(req, res){
    const db= req.app.get("db");
    res.send(await evalrecordsevice.getAllEvalRecords(db));

}


exports.getRecordByYear= async function(req, res){
    const db= req.app.get("db");
    res.send(await salesmenService.getSalesmenBySid(db, req.param.year));
}