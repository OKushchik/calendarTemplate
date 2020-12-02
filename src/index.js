import { renderCalendar } from "./renderCalendar.js";
let currentDate = new Date();

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

prev.addEventListener('click', function() {
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1,currentDate.getDate());
  renderCalendar(currentDate);
})
next.addEventListener('click', function() {
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDate());
  renderCalendar(currentDate);
})

renderCalendar(currentDate);
console.log('hello')

/*
const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
];
*/
