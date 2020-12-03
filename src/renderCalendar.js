import { dateFormatter } from "./utils/dateUtils.js";

export function renderCalendar(currentDate) {
  const outputCalendar = document.querySelector(".outputCalendar");

  let outputCalendarHTML = `<td><button class="table-btn">add vacation</button></td>`;
  let daysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const chosenMonth = document.querySelector(".chosenMonth");
  chosenMonth.innerHTML = dateFormatter
    .format(new Date(currentDate ))
    .replace(",", "")
    .split(" ")[1];

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

  let tableSum = document.createElement('td');
  tableSum.innerHTML = 'SUM'
  outputCalendar.after(tableSum)
  
  // let buttonHeder = document.createElement('button');
  // let boxButton = document.createElement('td');
  // buttonHeder.innerHTML = "add vacation"
  // boxButton.appendChild('buttonHeder');
  // outputCalendar.before(boxButton)

  outputCalendar.innerHTML = outputCalendarHTML;
}
