const accountId = 1223344 // If you want to change the state of any variable then please don't  use const. use let only.  
let accountEmail = "rajiv@js.com"
var accountPassword = "11234"
accountCity = "kathmandu" // Possibility of variable declaration but please dont use this type of declaration.
let accountState = ""; // if there is no value in variable then it return undefined.

// accountId = 2 (Which is not allowed) 

accountEmail = "rj@gmail.com"
accountPassword = "0000"
accountCity = "Delhi"

console.table([accountEmail, accountPassword, accountCity])

/*
    var- not in used because of issue in block scope and functional scope.
*/