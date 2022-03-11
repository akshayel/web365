//Using the 'this' keyword with arrow functions

const name = {
    firstName: 'Michael',
    lastName: 'Jordan',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    //This 'reverse' property would result in undefined because the arrow function switches the referral of 'this' to the 'window' object. In this case you'd need to use the standard 'function ()' syntax.
    reverse: () => {
        return `${this.lastName}, ${this.firstName}`;
    },
    shoutName: function() {
        setTimeout(()=> {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    }
}