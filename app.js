var monthNames = [ "January", "February", "March", "April"," May", "June", "July", "August", "September", "October"," November", "December"];
var dayName = [ "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
function date() {
    
let todayDate = new Date();
let date = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();
let day = todayDate.getDay();
// return dayName[todayDate.getDay()] + "," + date +" "+ monthNames[todayDate.getMonth()] + " " + year ;
document.getElementById("date").innerHTML = dayName[todayDate.getDay()] + "," + date +" "+ monthNames[todayDate.getMonth()] + " " + year ;
}