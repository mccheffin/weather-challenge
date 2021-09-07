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
  console.log(date);
  const dayOfWeek = new Date(date).getDay();
  console.log(days[dayOfWeek])
  return days[dayOfWeek];
}