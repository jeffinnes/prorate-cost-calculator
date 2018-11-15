const millsecInDay = (24 * 60 * 60 * 1000);

// Define Selectors
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#renewal-date');
const daysLeft = document.querySelector('#days-left');
const perYearCost = document.querySelector("#single-cost-per-year");
const perDayCost = document.querySelector('#single-cost-per-day');
const proratedSingle = document.querySelector('#prorated-single');
const qty = document.querySelector('#qty');
const subtotal = document.querySelector('#subtotal');
const tax = document.querySelector('#tax');
const total = document.querySelector('#total');

// Define current date
let currentDate = new Date();
let curYear = currentDate.getFullYear();
let curMonth = currentDate.getMonth() + 1;
let curDay = currentDate.getDate();

// Set Start date to current date
startDate.setAttribute('value', `${curYear}-${curMonth}-${curDay}`);

// Misc. Function Declarations
function calcDate (start, end) {
  const sDate = new Date(start);
  const eDate = new Date(end);
  let dateDiff = (eDate - sDate) / millsecInDay;
  return dateDiff;
};

// Define event listeners
startDate.addEventListener('input', () => {
   let days = calcDate(document.querySelector('#start-date').value, document.querySelector('#renewal-date').value);

   daysLeft.innerHTML = days;
});

endDate.addEventListener('input', () => {
  let days = calcDate(document.querySelector('#start-date').value, document.querySelector('#renewal-date').value);

  daysLeft.innerHTML = days;
});

