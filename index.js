const addDays = require("date-fns/addDays");

const getDateAfterxDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getDateAfterxDays;
console.log(getDateAfterxDays(5));
