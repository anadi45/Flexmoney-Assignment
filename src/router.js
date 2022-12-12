const router = require("express").Router();
const {completePayment} = require("./controllers/userController");

router.post("/enroll", completePayment);
router.get("/enroll", (req,res)=> {
    res.send("hello")
});

module.exports = {router}