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
  };


  outputCalendar.innerHTML = outputCalendarHTML;
  outputCalendar.insertAdjacentHTML("afterbegin",`<td><button class="table-btn">+ Add vacation</button></td>`);
  outputCalendar.insertAdjacentHTML('beforeend','<td class="table__sum " > Sum </td>')
}
