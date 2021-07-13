function Festival (){
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}



Festival.prototype.addMovie = function(movie){
   this.listOfAllMovies.push(movie)
   return this.listOfAllMovies.length - 1;
}



Festival.prototype.addProgram = function(program){
    this.listOfAllPrograms.push(program);
    return this.listOfAllPrograms.length - 1;
};

export default Festival;

