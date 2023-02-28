const express = require('express')

const router = express.Router();

const indexController = require("../controller/index")

router.get('/', indexController.getDashboard)

router.get('/home', indexController.getHome)

router.get('/login', indexController.getlogin)

router.get('/about', indexController.getAbout)

router.post('/contactdata',indexController.postContact ) 

router.get('/admin',indexController.getAdmin)

router.get('/footer',indexController.getFooter)

router.get('/newsportal',indexController.getNewsPortal)

router.post('/newsdata',indexController.postNewsPortal)

router.get('/news',indexController.getNews)

router.get('/admincontact', indexController.getadmincontact)

router.get('/delete/:id',indexController.getDelete)

router.get('/edit/:id', indexController.getEdited)

router.post('/update/:id',indexController.postUpdate)




module.exports = router


