
const salesmenService= require("../services/Salesmen-service");



exports.addSalesman= async function(req, res){
    const db= req.app.get("db"); //get database

    await salesmenService.createSalesmen(db,req.body);

    res.send("Salesman created successfully");
}



exports.getAll= async function(req, res){
    const db= req.app.get("db");
    res.send(await salesmenService.getAllSalesmen(db));

}


exports.getById= async function(req, res){
    const db= req.app.get("db");
    res.send(await salesmenService.getSalesmenBySid(db, req.param.sid));
}


exports.updateById= async function(req, res){
    const db= req.app.get("db");
    await salesmenService.updateSalesmen(db, params.sid, req.body);

    res.send("Salesman updated successfully");
}


exports.deleteById= async function(req, res){
    const db= req.app.get("db");
    res.send(await salesmenService.deleteSalesmen(db, req.params.sid));

}




