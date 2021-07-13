function Movie(title, length, genre) {

    this.title = title;
    this.mLength = parseInt(length);
    this.genre = genre;
}




Movie.prototype.getGenreCode = function () {
    var firstLetter = this.genre.charAt(0);
    var lastLetter = this.genre.charAt(this.genre.length - 1);
    return (firstLetter + lastLetter).toUpperCase();
};




Movie.prototype.getData = function () {
    return this.title + ", " + this.mLength + "min, " + this.getGenreCode();
};



export default Movie;