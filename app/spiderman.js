class spiderman {
    constructor(name, age, actor, numberOfMovies, studio){
        this.name = name,
        this.age = age,
        this.actor = actor,
        this.numberOfMovies = numberOfMovies,
        this.studio = studio
    }

    getGeneralInfo() {
        return `Hey, I'm ${this.name} from ${this.studio} Studio`
    }

}

module.exports = spiderman