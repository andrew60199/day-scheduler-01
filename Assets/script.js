// Add the current day into the HTML file
// Not sure how to add in the extension that allows for ordinal number https://day.js.org/docs/en/plugin/advanced-format

let today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM DD"));

