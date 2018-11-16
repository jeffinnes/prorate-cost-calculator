const millsecInDay = (24 * 60 * 60 * 1000);

// Define Selectors
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#renewal-date');
const daysLeft = document.querySelector('#days-left');
const perYearCost = document.querySelector("#single-cost-per-year");
const perDayCost = document.querySelector('#single-cost-per-day');
const prorateSingle = document.querySelector('#prorate-single');
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

// Various Function Declarations
function calcDate (start, end) {
  const sDate = new Date(start);
  const eDate = new Date(end);
  let dateDiff = (eDate - sDate) / millsecInDay;
  return dateDiff;
};

function setDaysLeft () {
  let days = calcDate(startDate.value, endDate.value);
  daysLeft.innerHTML = days;
};

function setPerDayCost (perYearCost) {
  perDayCost.innerHTML = (perYearCost / 365).toFixed(2);
};

function setProratedSingle (days, perDay) {
  prorateSingle.innerHTML = (perDay * days).toFixed(2);
};

function setSubtotal (qtyAdd, singleRate) {
  subtotal.innerHTML = (qtyAdd * singleRate).toFixed(2);
};


// Define event listeners
startDate.addEventListener('input', () => {
  setDaysLeft();
  setProratedSingle(parseInt(daysLeft.innerHTML, 10), parseFloat(perDayCost.innerHTML).toFixed(2));
  setSubtotal(qty.value, parseFloat(prorateSingle.innerHTML).toFixed(2));
});

endDate.addEventListener('input', () => {
  setDaysLeft();
  setProratedSingle(parseInt(daysLeft.innerHTML, 10), parseFloat(perDayCost.innerHTML).toFixed(2));
  setSubtotal(qty.value, parseFloat(prorateSingle.innerHTML).toFixed(2));
});

perYearCost.addEventListener('input', () => {
  setPerDayCost(perYearCost.value);
  setProratedSingle(parseInt(daysLeft.innerHTML, 10), parseFloat(perDayCost.innerHTML).toFixed(2));
  setSubtotal(qty.value, parseFloat(prorateSingle.innerHTML).toFixed(2));
});

qty.addEventListener('input', () => {
  setSubtotal(qty.value, parseFloat(prorateSingle.innerHTML).toFixed(2));
});