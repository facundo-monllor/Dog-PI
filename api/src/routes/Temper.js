const axios = require("axios")
const { Router } = require('express');
const {allTemps} = require("./Controllers")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async(req,res) => {
    try{
        const respuesta = await allTemps()
        res.status(200).send(respuesta)
    }catch(e){
        res.status(400).send(e.message)
    }
    
})


module.exports = router;
