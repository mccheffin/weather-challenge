const days = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday"
}

export const getNameOfDay = (date) => {
  if(!date.match(/^\d{4}-\d{2}-\d{2}$/)){
    return null;
  }
  const dayOfWeek = new Date(date).getDay();
  return days[dayOfWeek];
}