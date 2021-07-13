function Program(date) {
    this.date = new Date(date);
    this.listOfmovies = [];
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var finalDate = day + "." + month + "." + year+ ".";
    this.finalDate = function() {
        return finalDate;
};
}



Program.prototype.addMovieToList = function(movie){
    
        return this.listOfmovies.push(movie);
    };
Program.prototype.getTotalLength = function () {
    var totalLength = 0;
    this.listOfmovies.forEach(function (movie) {
        totalLength = totalLength + movie.mLength;
    })
    return totalLength;
};

Program.prototype.getData = function (){   
  

    return this.finalDate() + " ," + this.listOfmovies.length +" movies, duration: "+ this.getTotalLength() +" min";
}

export default Program;