const domainMethods = require('../domainServices/songDomainServices');

song = 
{
    wrapperType: "track",
    kind: "song",
    artistId: 909253,
    collectionId: 120954021,
    artistName: "Jack Johnson",
    collectionName: "Sing-a-Longs and Lullabies for the Film Curious George",
    trackName: "Upside Down",
    collectionCensoredName:"Sing-a-Longs and Lullabies for the Film Curious George",
    trackCensoredName: "Upside Down",
    artistViewUrl: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewArtist?id=909253",
    collectionViewUrl: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
    trackViewUrl: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
    previewUrl: "http://a1099.itunes.apple.com/r10/Music/f9/54/43/mzi.gqvqlvcq.aac.p.m4p",
    artworkUrl30: "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.60x60-50.jpg",
    artworkUrl60:  "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.100x100-75.jpg",
    artworkUrl100: "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.100x100-75.jpg",
    collectionPrice: 10.99,
    trackPrice:0.99,
    releaseDate: "2005-03-01T12:00:00Z",
    collectionExplicitness:"notExplicit",
    trackExplicitness: "notExplicit",
    discCount:  1,
    discNumber:  1,
    trackCount: 14,
    trackNumber:  1,
    trackTimeMillis: 210743,
    country: "USA",
    currency: "USD",
    primaryGenreName: "Rock",
    contentAdvisoryRating:  "None"
}

 
test('kind should contain only letters',()=>{
    expect(domainMethods.isKindValid(song.kind)).toBe(true);
})

test('wrapperType should contain only letters',()=>{
    expect(domainMethods.isWrapperTypeValid(song.wrapperType)).toBe(true);
})

test('artistName should contain only letters',()=>{
    expect(domainMethods.isArtistNameValid(song.artistName)).toBe(true);
})

test('artistId should contain only numbers',()=>{
    expect(domainMethods.isArtistIdValid (song.artistId)).toBe(true);
})

test('collectionId should contain only numbers',()=>{
    expect(domainMethods.isCollectionIdValid (song.collectionId)).toBe(true);
})





test('all input fields should be valid', () =>{
    return expect(domainMethods.isSongValid(song)).resolves.toBe('Valid');
 }); 
    

    
