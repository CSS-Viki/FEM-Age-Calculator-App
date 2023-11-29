// Input elements
const inputYears = document.getElementById("input__year");
const inputMonths = document.getElementById("input__month");
const inputDays = document.getElementById("input__day");

// Output elements
const outputYears = document.querySelector(".your__years span");
const outputMonths = document.querySelector(".your__months span");
const outputDays = document.querySelector(".your__days span");

// Error elements
const errorYears = document.querySelector(".error__year");
const errorMonths = document.querySelector(".error__month");
const errorDays = document.querySelector(".error__day");

const errorYear = document.querySelector(".calendar__year label");
const errorMonth = document.querySelector(".calendar__month label");
const errorDay = document.querySelector(".calendar__day label");

// Submit button
const submitBtn = document.getElementById("arrow__calculate");

let isValid = false;
const date = new Date();

inputDays.addEventListener("input", () => {
  if (+inputDays.value > 31) {
    errorDays.textContent = "Must be a valid date";
    errorDay.style.color = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDays.textContent = "";
    errorDay.style.color = "hsl(0, 1%, 44%)";
  }
  if (+inputDays.value === 0) {
    isValid = false;
    errorDays.textContent = "This field is required";
    errorDay.style.color = "hsl(0, 100%, 67%)";

    return;
  } else {
    errorDays.textContent = "";
    errorDay.style.color = "hsl(0, 1%, 44%)";
  }
});

inputMonths.addEventListener("input", () => {
  if (+inputMonths.value > 12) {
    errorMonths.textContent = "Must be a valid month";
    errorMonth.style.color = "hsl(0, 100%, 67%)";

    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonths.textContent = "";
    errorMonth.style.color = "hsl(0, 1%, 44%)";
  }
  if (+inputMonths.value === 0) {
    isValid = false;
    errorMonths.textContent = "This field is required";
    errorMonth.style.color = "hsl(0, 100%, 67%)";
    return;
  } else {
    errorMonths.textContent = "";
    errorMonth.style.color = "hsl(0, 1%, 44%)";
  }
});

inputYears.addEventListener("input", () => {
  if (+inputYears.value > date.getFullYear()) {
    errorYears.textContent = "Must be a valid month";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYears.textContent = "";
    errorYear.style.color = "hsl(0, 1%, 44%)";
  }
  if (+inputYears.value === 0) {
    isValid = false;
    errorYears.textContent = "This field is required";
    errorYear.style.color = "hsl(0, 100%, 67%)";
    return;
  } else {
    errorYears.textContent = "";
    errorYear.style.color = "hsl(0, 1%, 44%)";
  }
});

function outputAge() {
  if (isValid) {
    let birthday = `${inputMonths.value}/${inputDays.value}/${inputYears.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonths = ageDate.getUTCMonth();
    let ageDays = ageDate.getUTCDay() - 1;

    outputYears.textContent = ageYears;
    outputMonths.textContent = ageMonths;
    outputDays.textContent = ageDays;
  } else {
    alert("Error calculating age, try again!");
  }
}

//Event listener
submitBtn.addEventListener("click", outputAge);
