// Add the current day into the HTML file
// Not sure how to add in the extension that allows for ordinal number https://day.js.org/docs/en/plugin/advanced-format

let today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM DD YYYY"));

// User input
// Start by loading any task in local storage

// Save function

// save event handler

const saveHandler = (event) => {
    let buttonElement = event.target;
    let buttonId = buttonElement.getAttribute('id');
    if (buttonId === 'save-nine-am') {
        // Returning NULL... not sure how to select the user



        // tired https://stackoverflow.com/questions/717224/how-can-i-get-the-selected-text-in-a-textarea 
        let nineAm = document.getElementById('#nine-am')
        let nineAmStart = nineAm.selectionStart;
        let nineAmFinish = nineAm.selectionEnd;
        let nineAmTask = nineAM.value.substring(nineAmStart, nineAmFinish)
        console.log(nineAmTask)
        // localStorage.setItem('taskNineAm', document.getElementById('#nine-am').textContent())
 
    }
}


$('.container').on('click', saveHandler);
