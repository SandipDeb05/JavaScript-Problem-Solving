// TODO WAF that returns the precise number of days between two given dates?

function differenceBetweenDates(date1, date2) {
  const millisecondsPerDay = 3600 * 24 * 1000;
  const timeDifferenceMillis = Math.abs(date1.getTime() - date2.getTime());

  return Math.floor(timeDifferenceMillis / millisecondsPerDay);
}

const date1 = new Date("1998/06/06"); // YYYY-MM-DD
const date2 = new Date("1998/07/06"); // YYYY-MM-DD

console.log(differenceBetweenDates(date1, date2)); // 30
