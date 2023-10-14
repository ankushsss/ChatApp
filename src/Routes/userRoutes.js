const express = require("express");
const router = express.Router();
const addUserPage = require("../controler/userControler")

console.log(addUserPage)

router.post("/addUser",addUserPage.addUser)
router.get("/getUser",addUserPage.getUser)






module.exports = router