
export function getDayName(dateString) {
  const date = new Date(dateString); //parses dateString into a JS Date object
  return date.toLocaleDateString("en-US", { weekday: "short" }); //returns the day of the week in short form (e.g., "Mon")
}
