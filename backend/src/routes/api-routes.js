const express = require('express');
const router = express.Router();
const {checkAuthorization} = require('../middlewares/auth-middleware');

/*
    In this file is the routing for the REST-endpoints under /api managed
 */

const authApi = require('../apis/auth-api'); //api-endpoints are loaded from separate files
router.post('/login', authApi.login); //the function decides which request type should be accepted
router.delete('/login', checkAuthorization(),authApi.logout); //middlewares can be defined in parameters
router.get('/login', authApi.isLoggedIn); //the function, which handles requests is specified as the last parameter

const userApi = require('../apis/user-api');
router.get('/user', checkAuthorization(), userApi.getSelf);

const peopleDemoApi = require('../apis/people-demo-api');
router.get('/people', checkAuthorization(), peopleDemoApi.getPeople);



const salesmenApi= require("../apis/Salesmen-api");
router.get("/salesmen", salesmenApi.getAll);
router.get("/salesman/:sid", salesmenApi.getById);
router.post("/addsalesman", salesmenApi.addSalesman);
router.put("/updatesalesman/:sid", salesmenApi.updateById);
router.delete("/salesman/byid/:sid", salesApi.deleteSalesManById);


const evalrecordApi= require("../apis/Evalrecord-api");
router.post("/addrecord", evalrecordApi.addEvalrecord);
router.get("/recors", evalrecordApi.getAllRecords);
router.get("/record/:year", evalrecordApi.getRecordByYear);







module.exports = router;