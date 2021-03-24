console.log('***** Music Collection *****');

console.log('************* Add To Collection Function');

let collection = [];

function addToCollection(title, artist, yearPublished){
  console.log( `in addToCollection:`, title, artist, yearPublished);
  let record ={
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end record
  collection.push(record);
  return console.log('added new record to collection:', record);
} //end addToCollection

addToCollection('Self Titled', 'The Modern Lovers', 1976);
addToCollection('Talking Heads 77', 'Talking Heads', 1977);
addToCollection('Stop Making Sense', 'Talking Heads', 1984);
addToCollection('Light Up Gold + Tally All The Things You Broke', 'Parquet Courts', 2013);
addToCollection('Thelonious Monk With John Coltrane', 'Thelonious Monk & John Coltrane', 1961);
addToCollection('The Infotainment Scan', 'The Fall', 1993);
console.log( 'my record collections contains:', collection );

console.log('************* Show Collection Function');

function showCollection(array){
  console.log( 'in showCollection:', array );
  console.log( 'The length of this collection is:', array.length );
  for(item of array){
    console.log( item.title + ' by ' + item.artist + ', published in ' + item.yearPublished );
  } // end for of loop
} // end showCollection

showCollection(collection);

console.log('************* Find By Artist Function');

function findByArtist(artist){
  console.log( 'in findByArtist:', artist );
  let array = [];
  for(item of collection){
    if(artist === item.artist){
      array.push(item);
    } // end if
  } return array; // end for of loop
} // end findByArtist

console.log( findByArtist('Talking Heads') );
console.log( findByArtist('Devo') );
console.log( findByArtist('The Fall') );

console.table(collection);
