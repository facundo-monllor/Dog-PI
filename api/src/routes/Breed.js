const axios = require("axios")
const { Router } = require('express');
const { apiInfo, dbInfo, allInfo, createBreed, allTemps } = require("./Controllers")
const { Breed} = require("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req,res,next) => {
    try{
        const respuesta = await allInfo()
        const {name} = req.query
        if(name){
            let breedName = respuesta.filter((d) => 
            d.name.toLowerCase().includes(name.toLowerCase()))
            if(breedName){
                return res.status(200).send(breedName)
            }else{
                return res.status(400).send("Breed no found in the Data")
            }
        }
        res.status(200).send(respuesta)
    }catch(e){
        res.status(400).send(e.message)
    }
})


router.get("/:idRaza", async (req,res,next) => {
        const {idRaza} = req.params
        const all = await allInfo()
        let founded = all.find((b) => b.id == idRaza)
        if(!founded){
            res.status(400).send("Breed no found in the Data")
        }else{
            let foundedArray= []
            foundedArray.push(founded)
            res.status(200).json(foundedArray)
        }
})


router.post("/", async (req,res,next) => {
    try{
        let {name,heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers} = req.body
        await allTemps()
        const newDog = await createBreed(name,heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers)
        res.status(200).send(newDog)
    }catch(e){
        res.status(404).send(e.message)
    }
})

module.exports = router;
