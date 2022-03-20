//USING THE 'THIS' KEYWORD IN METHODS

const dog = {
    name: "groot",
    color: "grey",
    breed: "husky",
    bark: function() {
        console.log("woof woof woof");
    }
}

const dog2 = {
    name: "snoopy",
    color: "white",
    breed: "beagle",
    bark: function() {
        console.log("this is", this);
        console.log(`${this.name} says 'woof woof woof'`);
    }
}

const woof = dog2.bark;

//^If you call woof(), you're going to get " says 'woof woof woof'". The reason is, the 'this' keyword is tied to the object that the method is calling. If an object is not being explicitly called, then the 'this' keyword will automatically use the default object, which is the 'window' object. The 'window' object is the primary object in javascript, where all methods are defined. Since the 'name' property doesn't exist in the 'window' object, you would get a blank space in that area.