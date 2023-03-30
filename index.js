//Lab01
//Declaring constants and importing required libraries

const Movie = require("./movie");
const _ = require('lodash');

//Part 1: Create arrays for movies with name, rating, description and a array of genres for each movie

console.log("\n--------- First Part ---------\n")

let movies = [
    new Movie("Fallen", 8.2, "A fallen angel has to save his love from her eternal curse.", ["Romance", "Action", "Comedy", "Religious"]),

    new Movie("Your Name", 9.7, "Two high schoolers from different timelines find each other through a falling comet.",
        ["Romance", "Drama", "Comedy", "Fiction", "Animation", "Science Fiction"]),

    new Movie("A Silent Voice", 9.2, "A popular boy bullies a deaf girl in highschool and then becomes the outcast " + 
        "of the school.", ["Romance", "Drama", "Slice of life", "Animation"]),

    new Movie("Bacurau", 5.2, "A small countryside town in the middle of Brazil is seemingly forgotten from existence", 
        ["Thriller", "Action", "Drama", "Fiction"]),

    new Movie("If Anything Happens I love You", 10, "A short film about grieving parents who lost their children in a school shooting", 
        ["Drama", "Sentimental", "Animation", "Silent"]),
]

//Part 2: Print all names and genres from the movies array

movies.forEach((movie) =>{
    movie.summary();
})

console.log("\n--------- Next Part ---------\n")

//Part 3: Using Loadash output all info from 2 random movies in the array
let random_movie_1 = _.sample(movies);
let random_movie_2 = _.sample(movies);

random_movie_1.allInfo();
random_movie_2.allInfo();

console.log("\n--------- Next Part ---------\n")

//Part 4: Using Loadash find the difference between the genres of 2 random movies

diff_genres = _.difference(random_movie_1.genres, random_movie_2.genres);
diff_genres.concat(_.difference(random_movie_2.genres, random_movie_1.genres));

console.log(diff_genres);
