const Sequelize = require('sequelize');
const database = require('../config/database');

const Song = database.define('song', {
    wrapperType: {
        type:Sequelize.STRING
    },
    kind: {
        type:Sequelize.STRING
    },
    artistId: {
        type:Sequelize.INTEGER
    },
    collectionId: {
        type:Sequelize.INTEGER
    },
    artistName: {
        type:Sequelize.STRING
    },
    collectionName: {
        type:Sequelize.STRING
    },
    trackName: {
        type:Sequelize.STRING
    },
    collectionCensoredName: {
        type:Sequelize.STRING
    },
    trackCensoredName: {
        type:Sequelize.STRING
    },
    artistViewUrl: {
        type:Sequelize.STRING
    },
    collectionViewUrl: {
        type:Sequelize.STRING
    },
    trackViewUrl: {
        type:Sequelize.STRING
    },
    previewUrl: {
        type:Sequelize.STRING
    },
    artworkUrl30: {
        type:Sequelize.STRING
    },
    artworkUrl60: {
        type:Sequelize.STRING
    },
    artworkUrl100: {
        type:Sequelize.STRING
    },
    collectionPrice: {
        type:Sequelize.DOUBLE
    },
    trackPrice: {
        type:Sequelize.DOUBLE
    },
    releaseDate: {
        type:Sequelize.DATE
    },
    collectionExplicitness: {
        type:Sequelize.STRING
    },
    trackExplicitness: {
        type:Sequelize.STRING
    },
    discCount: {
        type:Sequelize.INTEGER
    },
    discNumber: {
        type:Sequelize.INTEGER
    },
    trackCount: {
        type:Sequelize.INTEGER
    },
    trackNumber: {
        type:Sequelize.INTEGER
    },
    trackTimeMillis: {
        type:Sequelize.INTEGER
    },
    country: {
        type:Sequelize.STRING
    },
    currency: {
        type:Sequelize.STRING
    },
    primaryGenreName: {
        type:Sequelize.STRING
    },
    contentAdvisoryRating: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Song;