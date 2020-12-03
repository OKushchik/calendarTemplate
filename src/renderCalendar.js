import { dateFormatter } from "./utils/dateUtils.js";

export function renderCalendar(currentDate) {
  const outputCalendar = document.querySelector(".outputCalendar");
  
  let outputCalendarHTML='';
  let daysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const chosenMonth = document.querySelector(".chosenMonth");
  let currentMonth = dateFormatter
    .format(new Date(currentDate))
    .replace(",", "")
    .split(" ")[1];
    chosenMonth.innerHTML =  currentMonth + ' ' + currentDate.getFullYear()


  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i ,
    );
    const [dayName, , date] = dateFormatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");
    let isWeekend = dayName === "Sat" || dayName === "Sun";
    outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
        </td>`;

  }
  outputCalendarHTML += `<td>sum</td>`

  };



  outputCalendar.innerHTML = outputCalendarHTML;
  outputCalendar.insertAdjacentHTML("afterbegin",`<td><button class="table-btn">+ Add vacation</button></td>`);
  outputCalendar.insertAdjacentHTML('beforeend','<td class="table__sum " > Sum </td>')
}

export function renderEmployees(currentDate, departmentTeams){
  let tableContainer = document.querySelector('.table-container');
  tableContainer.innerHTML='';
  let amountOfDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  for(let item of departmentTeams){
    let color = Math.floor(Math.random()*16777215).toString(16);
    let mainTable = document.createElement('table');
    mainTable.className = 'team-table';
    let row = document.createElement('tr');
    row.style.background = `#${color}`;
    let html = `<td class='groupHeader'  style='border-left: 3px solid #${color};'>${item.name}</td>`;
    for (let i=1; i<=amountOfDays;i++){
      let chosenDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i,
      );
      const [dayName, , date] = dateFormatter
        .format(chosenDate)
        .replace(",", "")
        .split(" ");
      let isWeekend = dayName === "Sat" || dayName === "Sun";
      html+=`<td class="outputItem ${isWeekend ? "weekend" : ""}">`
      row.innerHTML=html;
      mainTable.appendChild(row);
    }
    for(let elem of item.members){
      let row = document.createElement('tr');
      let html = `<td class='employeeHeader' style='border-left: 3px solid #${color};'>${elem.name}</td>`;
      for (let i=1; i<=amountOfDays;i++){
        let chosenDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i,
        );
        const [dayName, , date] = dateFormatter
          .format(chosenDate)
          .replace(",", "")
          .split(" ");
        let isWeekend = dayName === "Sat" || dayName === "Sun";
        html+=`<td class="outputItem ${isWeekend ? "weekend" : ""}">`
        row.innerHTML=html;
        mainTable.appendChild(row);
      }
    }
    console.log(amountOfDays)
    tableContainer.appendChild(mainTable);
  }
}
