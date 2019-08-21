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

    let cheapCandy = candy.filter(v => v.price < 5);

    for(let i = 0; i < cheapCandy.length; i++) {
        console.log(cheapCandy[i]);
    }
}

filterProducts();