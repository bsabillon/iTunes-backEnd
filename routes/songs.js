const express = require('express');
const router = express.Router();
const appServices = require('../applicationServices/songApplicationServices');
const db = require('../config/database');
const bodyParser = require('body-parser');
const PokeSongmon = require('../models/song');


router.post('/add',appServices.addSong);
router.get('/',appServices.getSongs);
router.get('/byId/:id?',appServices.getSongById);
router.put('/update/:id?',appServices.updateSong);
router.delete('/delete/:id?',appServices.deleteSong);


module.exports = router;