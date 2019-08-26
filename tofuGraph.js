
//required dependencies need installing before use

// var mysql = require("mysql");
// var Table = require("cli-table2");
var inquirer = require("inquirer");

//end of dependencies

//connecting to my database from mysql
// var connection = mysql.createConnection({
//     host: "127.0.0.1",
//     // Your port; if not 3306
//     port: 3306,
//     // Your username
//     user: "root",
//     // Your password
//     password: "=LizWiens2342",
//     database: "*************************"
// });

// connection.connect();

//beginning display when you run node <file name>




function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "Click item to see if it will be produced next week.",
        choices: [
          "Cranberry",
          "Curry and Mint",
          "Cream Cheese",
          "Apple",
          "Double Bacon",
          "Pizza"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Cranberry":
          console.log("");
          console.log("==Finishes this Week==");
          console.log(" ");
                var cranberry = beforeProduction();
                console.log("Cranberry will be produced by next week");
                console.log("")
                console.log("=======================")
                console.log("")
          runSearch();
          break;
  
        case "Curry and Mint":
            console.log("");
            console.log("==Finishes next Week==");
            console.log(" ");
                var curryAndMint =  duringProduction();
                console.log("Yes Curry and Mint will finish in the middle of next week ");
                console.log("")
                console.log("=======================")
                console.log("")
          runSearch();
          break;
  
        case "Cream Cheese":
            console.log("");
            console.log("==Finishes the week after next week==");
            console.log(" ");
                var creamCheese =  afterProduction();
                console.log("cream cheese will not be ready next week");
                console.log("")
                console.log("=======================")
                console.log("")
                runSearch();
          
          break;
  
        case "Apple":
            console.log("");
            console.log("==Finishes the Week after next week==");
            console.log(" ");
                var apple = afterProduction();
                console.log("apple won't be ready");
                console.log("")
                console.log("=======================")
                console.log("")
          runSearch();
          break;
  
        case "Double Bacon":
            console.log("");
            console.log("==Finishes the week after next week==");
            console.log(" ");
                var doubleBacon = afterProduction();

                console.log("double bacon won't be ready");
                console.log("")
                console.log("=======================")
                console.log("")
          runSearch();
          break;

          case "Pizza":
              console.log("");
              console.log("==Finishes next Week==");
              console.log(" ");
                var pizza = duringProduction();
                console.log("Yes pizza will be ready next week ");
                console.log("");
                console.log("=======================");
                console.log("");
            runSearch();
            break;
        }
      });
  }
  runSearch();

function beforeProduction(){
    var day = new Date("August 25 2019");
    var week = new Array (
        "Sunday_25",
        "Monday_26",
        "Tuesday_27",
        "Wednesday_28",
        "Thursday_29",
        "Friday_30",
        "Saturday_31"
    );
    for (i = 0; i < week.length; i++) {
        console.log(week[(day.getDay()  + i) % 7]);
      
      }
      console.log("");
      console.log(day);
      console.log("========================");
      console.log("");
    
}


function duringProduction(){
    var day2 = new Date("September 1 2019");
    var week2 = new Array (
        "Sunday_1",
        "Monday_2",
        "Tuesday_3",
        "Wednesday_4",
        "Thursday_5",
        "Friday_6",
        "Saturday_7"
    );
    for (i = 0; i < week2.length; i++) {
        console.log(week2[(day2.getDay()  + i) % 7]);
      
      }
      console.log("");
      console.log(day2);
      console.log("========================");
      console.log("");
    
}


function afterProduction(){
    var day3 = new Date("September 8 2019");
    var week3 = new Array (
        "Sunday_8",
        "Monday_9",
        "Tuesday_10",
        "Wednesday_11",
        "Thursday_12",
        "Friday_13",
        "Saturday_14"
    );
    for (i = 0; i < week3.length; i++) {
        console.log(week3[(day3.getDay()  + i) % 7]);
       
      }
      console.log("");
      console.log(day3);
      console.log("========================");
      console.log("");
    
}





//end test 

