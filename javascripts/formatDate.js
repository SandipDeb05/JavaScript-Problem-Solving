// TODO WAF that accepts a date string as input in YYYY-MM-DD HH:MM:SS FORMAT
// and returns a formatted string representing the date
// and time in the format DD/MM/YYYY HH:MM AM/PM.

function getFormattedTime(inputDateStr) {
  if (!inputDateStr) return "N/A";
  const inputDate = new Date(inputDateStr);

  const formattedDate = inputDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = inputDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedDate + " " + formattedTime;
}

const DATE_STR = "2024-07-12 08:45:21"; // YYYY-MM-DD HH:MM:SS
console.log(getFormattedTime(DATE_STR)); // DD/MM/YYYY HH:MM AM/PM
