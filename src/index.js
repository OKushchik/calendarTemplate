import { renderCalendar } from "./renderCalendar.js";
import { renderEmployees } from "./renderCalendar.js";

const now = new Date;
const month = now.getMonth();
const year = now.getFullYear();
let currentDate = new Date(year,month+1,0);


let prev = document.querySelector('.prev')
let next = document.querySelector('.next')


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
renderCalendar(currentDate);
renderEmployees(currentDate, departmentTeams);

prev.addEventListener('click', function() {
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1,currentDate.getDate());
  renderCalendar(currentDate);
  renderCalendar(currentDate);
  console.log(currentDate);
  renderEmployees(currentDate, departmentTeams);
})
next.addEventListener('click', function() {
  currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDate());
  renderCalendar(currentDate);
  console.log(currentDate);
  renderEmployees(currentDate, departmentTeams);
})
