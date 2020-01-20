// const x = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(num);
//     }, 1000);
// })
// (async () => {
//     const y = await x(5);
//     y.catch((e) => {
//     console.error(e);
//     })
//     console.log(y);
// })();



// Closure implemetation
/*
In other words, closure is created when a child function keep the environment 
of the parent scope even after the parent function has already executed
*/
function foo(outer_arg) { 
  
    function inner(inner_arg) { 
        return outer_arg + inner_arg; 
    } 
    return inner; 
} 
var get_func_inner = foo(5); 
  
console.log(get_func_inner(4)); 
console.log(get_func_inner(3));








//-------------------------------------------------------------



























/*


const x =  new Promise((resolve, reject) => {
   setTimeout(() => {
        resolve(5);
    }, 0);
})

// const y = Promise.resolve(5);

// console.log(typeof(x) === typeof(y));

// console.log('Called console A')

x.
    then((r) =>{
        console.log(r);
    })
    .catch((e) => {
        console.log(e);
    });

console.log('Called console B');


*/


















//-------------------------------------------------------------














/*





const api = () => axios("www.gogle.co.in"); // => 4

const api_wrapper = (file) => new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })

    api()
        .then((r) => {
            resolve(r);
        })
        .catch((e) => {
            reject(null);
        });
});

t = 5;
    api()
        .then((r) => {
            console.log(r.data)
            if(r) console.log(r * t);
            else console.log(5 * t);
        })
        .catch((e) => {
            console.error(e);
        })


*/



































//-------------------------------------------------------------        



/*

const x = (num) => {
    console.log(num);
    setTimeout(() => {
    console.log(num);
    }, 1000)
}

for (let i = 0; i < 10; i++) {
 setTimeout(() => {
   console.log(i);
 }, 5000);
}

*/




















//-------------------------------------------------------------







//  function x(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Function x called');
//             resolve("Success")
//         }, 100);
//     });
// }

// console.log(typeof x())


// const x = function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Function x called');
//             resolve("Success")
//         }, 100);
//     });
// }

// console.log(typeof x())

// const x = new Promise((resolve, reject) => {
//     console.log('Function x called');
//     setTimeout(() => {
//         resolve("Success")
//     }, 100);
// });


// x.
//     then((r) => {
//         console.log(r);
//     })
//     .catch((e) => {
//         console.error(e);
//     });

// console.log('After promise');





//-------------------------------------------------------------





//console.log("Hello There");
//new Error()
// Hello There
// Function x called


// const test = (num) => {
//     return num * 5;
// }

// console.log(test());
























//-------------------------------------------------------------




/*



const square = (power__) => {
    const power = power__ || 2;
    return (num) => {
        return num * power;
    };
};

// const square = (num) => Math.pow(num, 2);

// const square_times_2 = (num) => 2 * square(num)



console.log(square(5));  //
console.log(square(5)(2)); //10
console.log(square()(3)); //6
console.log(square(5)()); //undefined


// x = square(5); //x = NaN

// NaN(5)
// undefined(5)
// console.log(x); // 
// console.log(x(3)); //15









// console.log(x);
// var x = 1;






// let y;
console.log(x); // undefined
console.log(y); // undefine
var x = 1;
let y = 1;












var b = 'yay';

const a = () => {
var b = "yay1"
console.log(b);
};

const ba = () => {
b = "yay2"
console.log(b);
};

a(); //
ba(); //
console.log(b); 
















const x = [
{
a: {
b: 2
}
},
{
a: 2
},
{
a: 3
}
];

// const x = [["tfy"],["tyy"],["htdht"]]
// const y = [...x];

// const y = x;

// const y = [...x];
const y = JSON.parse(JSON.stringify(x));
const y = [...x]
x[0].a.b = 5;
console.log(y[0].a.b); //5
console.log(x[0].a.b); //5

x[1].a = 5;
console.log(y[1].a); //2
console.log(x[1].a); //5













const x = [1, 2, 3, 4];
// console.log(x.map(i => i)); //1,2,3,4
// console.log(x.map(i => i * 2)); // 2,4,6,8
// console.log(x) //1,2,3,4
// console.log(x.filter(k => k > 2)) //3,4
// console.log(x) //x
// const gt_2 = (num) => num > 2;
// const gt_2 = (num) => 0;

// console.log(x.filter(k => Boolean(k * 2))) //

const x = [{a: 2}, {a: 3}, {a: 4}];
x.forEach(function(k){
// k.a = k.a*2;
// if(k.a == 5) return 5;
// else k.a *= 2;
// return k.a*2;
// return;
})
// console.log(x.forEach((k) => {
// return k.a * 2
// })); //4,6,8
console.log(x); // 4,6,8, 


// console.log(for (let k = 0; k < x.length; k++){
// return null;
// });

// console.log(x);








// console.log(x.map(k => k * 2)); 
// console.log(x);


// console.log(x.filter(function(k){
// return k * 4;
// }))

// console.log(x.map(k => {
// k = k * 2;
// return k 
// })); 
// console.log(x);


let x = [1, 2, 3, 4];

x.forEach((k, i) => {
k = k * 2
return 5;
});

console.log(x) //




console.log(x.forEach((k) => {
return k * 2;
}))// [2,4,6,8]











// console.log(x.forEach(i => {
// i = i * 2;
// })); //[3,4]
// console.log(x);//[1,2,3,5]






console.log(Boolean("false")) //false

console.log(false == "false") //Error
console.log(1 == "1")








// const i = 2;
// console.log(Boolean(i * 2))

// console.log("5" * "5")
// console.log("a" * 4) 

// console.log(2 * "a") // NaN

console.log(Boolean("false") == true) //















// 2 === '2'; // True or False
// 2 == '2'; // True or false
console.log(2 == "2 * 1") //false

// const x = {
// a: 2
// };

// const y = x;

// const y = { ...x }

const x = [1,2,3,4]
// const y = [...x]
const y = x;


console.log(x == y); //
console.log(x === y); //











// console.log('2' * 4); //8
// console.log('a' * 4); //NaN

// console.log(undefined == null); //true








// console.log(isNaN(undefined * 10));




// console.log("HEllo");
// axios(.......)
// .then(r => {console.log("result")});
// console.log("Done");




const x = Promise.reject({error: "Some generic error"});

const y = () => new Promise((resolve, reject) => {
setTimeout(() => {
// resolve({
// message: "Success from Y"
// });
throw new Error("Something broke");
})
});


y()
.then((r) => {
console.log(r);
return x;
})
.then((r) => {
console.log('Output', r);
})
.catch((e) => {
console.error('Error', e)
})



const x = Promise.resolve(1);
const y = Promise.resolve(2);
const z = Promise.reject(3);

// const error_logger = (err) => {
// console.error(e);
// };

x.then((r) => {
console.log(r); //1
return y;
})
.then((r) => {
console.log(r); //2
return z;
})
.then((r) => {
console.log(r);
})
.catch((e) => {
console.error(e); //3
});


*/