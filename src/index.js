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
    name: "Frontend_Team",
    percentageOfAbsent: 0,
    color: 'rgba(155, 153, 255, .3)',
    members: [{ name: "FE_Team_User1" },{ name: "FE_Team_User2" },{ name: "FE_Team_User3" },{ name: "FE_Team_User4" },{ name: "FE_Team_User5" },],
  },
  {
    id:'2',
    name: "Designers",
    percentageOfAbsent: 5,
    color: 'rgba(122, 175, 255, .3)',
    members: [{ name: "Des_Team_User1" },{ name: "Des_Team_User2" },{ name: "Des_Team_User3" },{ name: "Des_Team_User4" },{ name: "Des_Team_User5" },{ name: "Des_Team_User6" },{ name: "Des_Team_User7" }],
  },
  {
    name: "Backend_Team",
    percentageOfAbsent: 5,
    color: 'rgba(255, 153, 153, .3)',
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
