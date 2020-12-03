import { renderCalendar } from "./renderCalendar.js";
import { renderEmployees } from "./renderCalendar.js";
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

const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" },{ name: "FE_Team_User2" },{ name: "FE_Team_User3" },{ name: "FE_Team_User4" },{ name: "FE_Team_User5" },],
  },
  {
    name: "Designers",
    percentageOfAbsent: 5,
    members: [{ name: "Des_Team_User1" },{ name: "Des_Team_User2" },{ name: "Des_Team_User3" },{ name: "Des_Team_User4" },{ name: "Des_Team_User5" },{ name: "Des_Team_User6" },{ name: "Des_Team_User7" }],
  },
  {
    name: "Backend Team",
    percentageOfAbsent: 5,
    members: [{ name: "Des_Team_User1" },{ name: "Des_Team_User2" },{ name: "Des_Team_User3" },{ name: "Des_Team_User4" }],
  },
];
renderEmployees(currentDate, departmentTeams);


