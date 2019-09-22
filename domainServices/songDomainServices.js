const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Song = require('../models/song');
const bodyParser = require('body-parser');
var containsOnlyStrings = /^[A-Za-z_ ]+$/; 
var containsOnlyNumbers = /^[0-9]/;


var domainMethods = {
   isWrapperTypeValid: (wrapperType)=>{
      return (containsOnlyStrings.test(wrapperType))
   }, 
  
   isKindValid: (kind)=>{
      return (containsOnlyStrings.test(kind))
   },

   isArtistNameValid: (artistName)=>{
      return (containsOnlyStrings.test(artistName))
   },

   isArtistIdValid (artistId){
      return (containsOnlyNumbers.test(artistId))
   },
  
   isCollectionIdValid (collectionId){
    return (containsOnlyNumbers.test(collectionId))
    },

   


    isSongValid : (song) => {
        return new Promise((resolve, reject) => {
            // console.log("POKETEST");
            // console.log(pokemon);
           if(domainMethods.isWrapperTypeValid(song.wrapperType)&&
              domainMethods.isKindValid(song.kind)&&
              domainMethods.isArtistNameValid(song.artistName)&&
              domainMethods.isArtistIdValid(song.artistId)&&
              domainMethods.isCollectionIdValid(song.collectionId)
            ) 
            {
                resolve("Valid");
            }else{
                
                reject("Invalid");
            }
        })
    },
  
}

module.exports= domainMethods;