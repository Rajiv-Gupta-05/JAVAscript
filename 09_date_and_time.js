// ********************** Dates ************************

let mydate = new Date()
console.log(mydate); // 2024-04-16T07:19:28.915Z
console.log(mydate.toString()); // Tue Apr 16 2024 12:51:02 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); // Tue Apr 16 2024
console.log(mydate.toISOString()); // 2024-04-16T07:23:33.943Z
console.log(mydate.toJSON()); // 2024-04-16T07:23:33.943Z
console.log(mydate.toLocaleDateString()); // 4/16/2024
console.log(mydate.toLocaleString()); // 4/16/2024, 12:53:33 PM
console.log(typeof mydate);  // object datatype


let myCreatedDate = new Date(2024, 0, 22)
console.log(myCreatedDate.toDateString()); // Mon Jan 22 2024 || Month is starting from "0" that's why 0 -> January and 11 -> December.

let CreatedDateTime = new Date(2024, 0, 22, 8, 9)
console.log(CreatedDateTime.toLocaleString()); // 1/22/2024, 8:09:00 AM

let DateTime = new Date("01-14-2024")
console.log(DateTime.toLocaleString()); // 1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1713253095397 || it will return millisecond time.
console.log(Math.floor(Date.now()/1000)); // 1713253176

let newDate = new Date() 
console.log(newDate); // 2024-04-16T07:42:27.371Z
console.log(newDate.getMonth()); // 3
console.log(newDate.getDay()); // 2

newDate.toLocaleString('default', {
    weekday: "long",
})