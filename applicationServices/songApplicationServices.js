const express = require('express');
const Song = require('../models/song');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/songDomainServices');

var appServices = {

    addSong: function(request, response){
        domainMethods.isSongValid(request.body)
        .then( onResolved =>
            Song.create(
                request.body
             )
             .then(song=>{
                response
                .status(200)
                .send('song added successfully');
                })
             .catch(error=>
                response.send("Error adding Song: "+ error))
            )    
            .catch(onError =>
                response.send("Error: "+ onError)
            )  
    },
    
    getSongs: function(request, response){
        Song.findAll()
        .then(songs=>{
            response.json(songs);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getSongById: function(request, response){
        Song.findOne({
            where:{
                id: request.params.id,
            }
        })
        .then(song=>{
            response.json(song);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getSongByName: function(request, response){
        Song.findOne({
            where:{
                name: request.params.name,
            }
        })
        .then(song=>{
            response.json(song);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    updateSong: function(request,response){
        Song.update(
            {
            wrapperType: request.body.wrapperType,
            kind:  request.body.kind,
            artistId:  request.body.artistId,
            collectionId:  request.body.collectionId,
            artistName:  request.body.artistName,
            collectionName:  request.body.collectionName,
            trackName:  request.body.trackName,
            collectionCensoredName: request.body.collectionCensoredName,
            trackCensoredName:  request.body.trackCensoredName,
            artistViewUrl:  request.body.artistViewUrl,
            collectionViewUrl:  request.body.collectionViewUrl,
            trackViewUrl:  request.body.trackViewUrl,
            previewUrl:  request.body.previewUrl,
            artworkUrl30:  request.body.artworkUrl30,
            artworkUrl60:  request.body.artworkUrl60,
            artworkUrl100:  request.body.artworkUrl100,
            collectionPrice:  request.body.collectionPrice,
            trackPrice:  request.body.trackPrice,
            releaseDate:  request.body.releaseDate,
            collectionExplicitness:  request.body.collectionExplicitness,
            trackExplicitness:  request.body.trackExplicitness,
            discCount:  request.body.discCount,
            discNumber:  request.body.discNumber,
            trackCount:  request.body.trackCount,
            trackNumber:  request.body.trackNumber,
            trackTimeMillis:  request.body.trackTimeMillis,
            country:  request.body.country,
            currency:  request.body.currency,
            primaryGenreName:  request.body.primaryGenreName,
            contentAdvisoryRating:  request.body.contentAdvisoryRating
            },
            {where:{id: request.params.id } }
        )
        .then(song=>{
            response
            .status(200)
            .send('song updated successfully!')
        })
        .catch(error=>
            response.send("Error: "+ error)
        )
    },


    deleteSong: function(request,response){
        Song.destroy({
            where: {
                id: request.params.id
            }
        })
        .then(song=>{
            response
            .status(200)
            .send('song has been deleted successfully!')
        })
        .catch(error=>
            response.send("Error: "+error))
    },


    


}

module.exports= appServices;