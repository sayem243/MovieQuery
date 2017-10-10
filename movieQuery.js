var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  {title: "Titanic”, year: “1997", length: 194 , rating: "9.2", genre: "Drama"},

];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}


var newMovie = {title:"Titanic”, year: “1997", length: 194 , rating: "7.7", genre: "Drama" };
console.log(addMovie(newMovie));

function movieByRating(){
  //add code
   var init = [];
  for(var i=0; i<movieList.length; i++){
       for(var j=i; j<movieList.length-1; j++){
         if(movieList[j].rating<movieList[j+1].rating){
           init=movieList[j];
           movieList[j]=movieList[j+1];
           movieList[j+1]=init;
         }
       }
     }
     movieList.sort(function(a, b){
       return (b.rating)-(a.rating);
     });
      return movieList;
}
console.log("Movie by rating");
console.log(movieByRating());

function findByTitle( title ){
  //add code
    var list = [];
   movieList.map(function(m,i){
     if(m.title.toLowerCase().includes(title)) list.push(m);
   });
   return list;
}

console.log(findByTitle("matrix"));
