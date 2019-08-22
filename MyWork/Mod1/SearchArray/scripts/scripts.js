"use strict";

function checkThis(value, index, array) {
    if (value.CourseId == '19SUM200') return true;
    else return false;
}

function foundCourseInfo() {
    let data = [
        {
            "CourseId": "19SUM100",
            "Title": "Introduction to HTML/CSS/Git",
            "Location": "Classroom 7",
            "StartDate": "07/08/19",
            "Fee": "100.00"
        },
        {
            "CourseId": "19SUM200",
            "Title": "Introduction to JavaScript",
            "Location": "Classroom 7",
            "StartDate": "07/22/19",
            "Fee": "350.00"
        },
        {
            "CourseId": "19SUM300",
            "Title": "Introduction to Node.JS and Express",
            "Location": "Classroom 7",
            "StartDate": "09/09/19",
            "Fee": "50.00"
        },
        {
            "CourseId": "19SUM400",
            "Title": "Introduction to SQL and Databases",
            "Location": "Classroom 7",
            "StartDate": "09/16/19",
            "Fee": "50.00"
        },
        {
            "CourseId": "19SUM500",
            "Title": "Introduction to Angular",
            "Location": "Classroom 7",
            "StartDate": "09/23/19",
            "Fee": "50.00"
        }
    ];

    let x = data.find(checkThis);

    return console.log(x);
}

//foundCourseInfo();

function filterProducts() {
    let candy = [
        {
            product: "Gummy Worms", 
            price: 5.79
        },
        {
            product: "Plain M&Ms", 
            price: 2.89
        },
        {
            product: "Twizzlers", 
            price: 3.49
        },
        {
            product: "Twix", 
            price: 5.19
        },
        {
            product: "Kit Kat", 
            price: 5.59
        },
        {
            product: "Jolly Ranchers", 
            price: 4.79
        },
        {
            product: "Taffy", 
            price: 6.79
        },
        {
            product: "Starburst", 
            price: 2.99
        },
        {
            product: "Snickers", 
            price: 4.19
        },
        {
            product: "Dum Dum", 
            price: 1.99
        }
    ];

    //let haveIt = candy.find(candy.product == "Mars")

    //if(haveIt == null) console.log("Dont have it")
    //else console.log("we got it at " + haveIt.price)

    let cheapCandy = candy.filter(v => v.price < 5);

    let sortedCandy = (candy1, candy2) => {
        if(candy1.price > candy2.price) return 1;
        else return -1;
    }

    candy.sort(sortedCandy);

    let [first, second, third] = candy;

    for(let i = 0; i < candy.length; i++) {
        //console.log(cheapCandy[i]);
        //console.log(candy[i]);
    }

    //console.log(first);
    //console.log(second);
    //console.log(third);
    //console.log(haveIt);
}

filterProducts();

let movies = [
    {
        name: "Twister",
        description: "Epic action disaster film",
        yearReleased: 1996,
        rating: "PG-13",
        cast: ["Bill Paxton", "Helen Hunt"]
    },
    {
        name: "Toy Story 4",
        description: "Inanimate objects running around",
        yearReleased: 2019,
        rating: "G",
        cast: ["Tom Hanks", "Tim Allen"]
    },
    {
        name: "Mulan",
        description: "Has a dragon",
        yearReleased: 1998,
        rating: "G",
        cast: ["Ming-Na Wen", "Eddie Murphy"]
    },
    {
        name: "Jurassic Park",
        description: "Has dinosaurs",
        yearReleased: 1993,
        rating: "PG-13",
        cast: ["Sam Neill", "Laura Dern"]
    },
    {
        name: "Avengers Endgame",
        description: "Epic action disaster film",
        yearReleased: 2019,
        rating: "PG-13",
        cast: ["Robert Downey Jr.", "Chris Evans"]
    },
    {
        name: "Frozen",
        description: "Chilling Story",
        yearReleased: 2013,
        rating: "PG",
        cast: ["Kristen Bell", "Idina Menzel"]
    },
]

for(let {name: n, yearReleased: yr} of movies) {
    console.log("Movie: " + n + ", Year Released: " + yr);
}