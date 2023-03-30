class Movie {
    constructor(name, rating, description, genres){
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.genres = genres;
    }

    summary() {
        console.log(`The movie name is: "${this.name}", and its rating is: ${this.rating}!`);
    }

    allInfo(){
        console.log(`The movie name is: ${this.name}\nThe movie rating is: ${this.rating}\nThe movies description: ${this.description}\nFinally,` +
            `the movies genres are: ${this.genres}\n`)
    }

}

module.exports = Movie;