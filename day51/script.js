const list = {};

let num = 0;
while (true) {
    let command=prompt("Insert a command.").toLowerCase();

    //QUIT APP
    if (command==="quit") {
        console.log("You've quit the app.");
        break;
    }
    //NEW ITEM
    else if (command==="new") {
        let newItem = prompt("Insert a to-do item.");
        while (true) {
            list[num] = newItem;
            num++;
            break;
        }
        //Added the below update after posting on Twitter
        console.log(`Added '${newItem}' to the list.`);
    }
    //LIST ITEMS
    else if (command==="list") {
        //Added the stars after posting on Twitter
        console.log("*************************");
        for (let item in list) {
            console.log(`${item} - ${list[item]}`);
        }
        console.log("*************************");
    }
    //DELETE ITEM
    else if (command==="delete") {
        let delItem = prompt("Insert the item number you want to delete.");
        //Added the console.log below after posting on Twitter
        console.log(`You've deleted '${list[delItem]}'`);
        delete list[parseInt(delItem)];
    }
    //INCORRECT ENTRY
    else {
        prompt("Insert an actual command!");
    }
}

/*
NOTES AFTER WATCHING THE UDEMY TUTORIAL (WHICH I WATCHED AFTER DOING THIS)

1. I could've used an array instead of an object since arrays have built in index numbers. I overcomplicated it with an object.

2. I could've used !=="quit" as the paramater for the initial while loop, instead of making it "true". That would made the loop more efficient.

3. When deleting, if someone submits an invalid index number, we could create a conditional that says "hey, that's undefined."
*/