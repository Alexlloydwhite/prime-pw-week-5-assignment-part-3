console.log('***** Music Collection *****')

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
