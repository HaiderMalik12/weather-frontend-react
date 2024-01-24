const moment = require("moment");

const selectedTime = 1;

function convertTo12HourFormat(time24) {
  const timeMoment = moment(`${time24}:00`, "HH:mm:ss");
  return timeMoment.format("hh:mm A");
}

const convertedTime = convertTo12HourFormat(selectedTime);

console.log(convertedTime);

console.log(moment(convertedTime).isSame("01:00 AM"));
