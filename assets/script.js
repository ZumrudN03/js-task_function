// ? 16

// function task16(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }
// task16(6);

// ? 17

// function task17(num) {
//   count = 0;

//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       count = count + 1;
//     }
//   }
//   console.log(count);
// }
// task17(12);

// ? 18

// function task18(num) {
//   sum = 0;
//   hasil = 1;

//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       sum += +i;
//       hasil *= +i;
//     }
//   }
//   console.log("cemi = " + sum, "hasili = " + hasil);
// }
// task18(6);

// ? 20

// function sade_eded(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(sade_eded(32));

// ? 21 unfinished

// function sade_eded(num1, num2) {
//   // let num
//   for (let i = num1; i < num2; i++) {
//     for (let j = 2; j < num1; j++) {
//       if (num1 % j === 0) {
//         return true;
//       }

//       //   return false
//       // }
//     }
//   }
// }

// console.log(sade_eded(3, 9));







// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=> x===3 ? console.log(x,i) : null)


// ? 26

// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=> x%2===1 ? console.log("eded: "+x,"index: "+i) : null)


// ? 27
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=> x%2===0 ? console.log("eded: "+x,"index: "+i) : null)


// ? 28
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=> i%2===1 ? console.log("eded: "+x,"index: "+i) : null)


// ? 29
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=> i%2===0 ? console.log("eded: "+x,"index: "+i) : null)


// ? 30
// const arr=[1,2,3,4,5,6,7,8,9,10]
// let max =arr[0]
// arr.forEach((x)=>x >max? max=x : null);
// console.log(max)


// ? 31
// const arr=[1,2,3,4,5,6,7,8,9,10]
// let min =arr[0]
// arr.forEach((x)=>x <min? min=x : null);
// console.log(min)


// ? 32
// const arr=[2,3,4,5,6,7,8,9,10,11]
// let min =arr[0]
// arr.forEach((x)=> x%2===0 && x < min ? min=x : null);
// console.log(min)


// ? 33
// const arr=[2,3,4,5,6,7,8,9,10,11,12]
// let max =arr[0]
// arr.forEach((x)=> x%2===0 && x > max ? max=x : null);
// console.log(max)


// ? 34
// const arr=[2,3,4,5,6,7,8,9,10,11,12]
// let max =arr[0]
// arr.forEach((x)=> x%2===1 && x > max ? max=x : null);
// console.log(max)


// ? 35
// const arr=[2,3,4,5,6,7,8,9,10,11,12]
// let min =arr[0]
// arr.forEach((x)=> x%2===1 && x < min ? min=x : null);
// console.log(min)


// ? 36
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let min = arr[0]
// let index = 0
// arr.forEach((x, i)=>{
//     if(x < min ) {
//     min = x;
//     index = i
// }})
// console.log(index)


// ? 37
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let max = arr[0]
// let index = 0
// arr.forEach((x, i)=>{
//     if(x > max ) {
//     max = x;
//     index = i
// }})
// console.log(index)


// ? 38
// const arr=[1,2,10,3,4,5,6,10,7,8,9,10]
// let max =arr[0]
// let count=0
// arr.forEach((x)=>{
//         if(x > max ) {
//         max = x;

//     }else if (max==x) {
//         count++
//     }
// });
// console.log(count)


// ? 39
// const arr = [1, 2, 1, 3, 4, 5, 6, 1, 7, 8, 9, 1]
// let min = arr[0]
// let count = 0
// arr.forEach((x) => {
//     if (min > x) {
//         min = x;

//     } else if (min == x) {
//         count++
//     }
// });
// console.log(count)


// ? 40
// const arr=[1,2,3,4,5,6,7,8,9,10]
// let max =arr[0]
// let maxIndex=0
// arr.forEach((x,i)=>{
//     if (x >max) {
//         max=x;
//         maxIndex=i
//     }
// });
// let firstelement = arr[0]
// arr[0]=arr[maxIndex]
// arr[maxIndex]=firstelement

// console.log(arr)


// ? 41

// const arr=[2,3,4,5,6,7,8,9,10,1]
// let min =arr[0]
// let minIndex=0
// arr.forEach((x,i)=>{
//     if (x <min) {
//         min=x;
//         minIndex=i
//     }
// });
// let firstelement = arr[0]
// arr[0]=arr[minIndex]
// arr[minIndex]=firstelement

// console.log(arr)


// ? 42

// const arr=[1,2,3,4,5,6,7,8,9,10]
// let min =arr[0]
// let minIndex=0
// let max=arr[0]
// let maxIndex=0
// arr.forEach((x,i)=>{
//     if (x <min) {
//         min=x;
//         minIndex=i
//     }else if(x>min){
//         max=x;
//         maxIndex=i
//     }
// });

// arr[maxIndex]=arr[minIndex]
// arr[minIndex]=max

// console.log(arr)


// ? 43

// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((x,i)=>{
//     if 
// }
// )





// const arr=[1,2,3,4,5,6,7,8,9,10]

// const result =arr.reduce((ilk,sonraki) => ilk+sonraki)
// console.log(result);



// const data={
//     name: "Zumrud",
//     surname: "Nusretova"
// }

// console.log(data.name);

// console.log(data["name"]);




// const arr = [
//     {
//         "id": 2,
//         "description": "Sweet and savory sauces relishes spreads and seasonings",
//         "name": "Condiments"
//     },
//     {
//         "id": 1,
//         "description": "Soft drinks coffees teas beers and ales",
//         "name": "Beverages"
//     },
//     {
//         "id": 3,
//         "description": "Desserts candies and sweet breads",
//         "name": "Confections"
//     },
//     {
//         "id": 4,
//         "description": "Cheeses",
//         "name": "Dairy Products"
//     },
//     {
//         "id": 5,
//         "description": "Breads crackers pasta and cereal",
//         "name": "Grains/Cereals"
//     },
//     {
//         "id": 6,
//         "description": "Prepared meats",
//         "name": "Meat/Poultry"
//     },
//     {
//         "id": 7,
//         "description": "Dried fruit and bean curd",
//         "name": "Produce"
//     },
//     {
//         "id": 8,
//         "description": "Seaweed and fish",
//         "name": "Seafood"
//     }
// ]



// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id>5) {
//         console.log(arr[i]);
//     }

// }


// arr.filter(x=>x.name.includes("Seafood"))


// arr.forEach(x=>{
//     if (x.name.includes("Seafood")) {
//         console.log(x);
//     }
// })

// arr.forEach(x=>{
//     if (x.name.includes("D")) {
//         console.log(x);
//     }
// })


// arr.forEach((x)=> arr[i].id>5 ? console.log(arr[i]))



// function arr_sort(a,b) {
//     let ageDiff=a.id-b.id
//     return ageDiff
// }

// arr.sort(arr_sort);


// arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
// console.table(arr);

// arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))


// arr.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))






// ?  task 1

// function task1(text) {

//     if (text === text.toUpperCase() || text === text.toLowerCase()) {

//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(task1("nese"));


// ?  task 2

// function task2(text) {

//     return text.filter((x) => x.length > 6);
// }


// const arr = ["jkdhgjyh", "fju", "wkijdrwl", "wjfa"]
// console.log(task2(arr));

// ? task 3

// const task3=(file)=> file.slice(file.lastIndexOf("."))

// console.log(task3("style.css"));


// ? task 4

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.net",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.net",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.net",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]




// users.forEach((x)=>x.id>5 ? console.log(x.address) :null)

// users.forEach((x)=>x.id%2===1 &&  x.website.includes(".net") ? console.log(x.website) : null)

// users.forEach((x)=>x.id%2===0 ? console.log(x.company) :null)
