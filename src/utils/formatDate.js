
export function getDayName(dateString) {
  const date = new Date(dateString); //parses dateString into a JS Date object
  return date.toLocaleDateString("en-US", { weekday: "short" }); //returns the day of the week in short form (e.g., "Mon")
}

export function getCurrentHourIndex(currentTime) {

  // currentTime looks like "2026-07-07T11:30", extract just the hour number (11) from that string
  const hour = currentTime.split("T")[1].split(":")[0];   
  return Number(hour);
}

export function getHourLabel(time) {
  const hour = new Date(time).toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  return hour;
}