// const square = function (x)
// {
// return x*x;
// }


// const square = (a) => {
//     return a*a;
// }

const event = {
    name : "Birthday Party",
    printGuestList: function() {
        console.log('guest list for '+ this.name)
    }

}

event.printGuestList();


// console.log(square(5))