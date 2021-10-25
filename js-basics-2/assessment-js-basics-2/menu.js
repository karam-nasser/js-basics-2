///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: "Veg Lover",
    price: 10.99,
    category: "Vegan",
    popularity: 5,
    rating: 5,
    tags: ["tofu", "vegetables", "non-dairy", "meatless"]
};


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza,popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1]);


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

const { price } = pizza;
console.log(price);


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const { category } = pizza;
console.log(category);


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const obj1 = {
    prop1: "val1";
    rating: 4,
    popularity: 9,
    tags: ["tag1", "tag9"]
};
const obj2 = {prop1: "val2", rating: 3, popularity: 8, tags: ["tag2"]};
const obj3 = {
    prop1: "val3",
    rating: 4,
    popularity: 7,
    tags: ["tag0", "tag3", "tag4"]
};
const obj5 = {prop1: "val5", rating: 5, popularity: 1, tags: ["tag6"] };

const myFoodArr = [obj1, obj2, obj3, obj4, obj5];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

const filteredArr = myFoodArr.filter((obj) => obj.tags.includes("tags2"));
console.log(filteredArr);

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(prop, number, type) {
    if (type === "below") {
        //console.log("below");
        //console.log(prop);
        //console.log(myfoodArr);
        return myFoodArr.filter((obj) => obj.popularity < number);
    }
    else {
        //console.log("above";)
    return myFoodArr.filter((obj) => obj.popularity > number);
    }
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

console.log("------");
const newFilteredArr = filterByProperty("popularity", 4, "above");
console.log(newFilteredArr);
