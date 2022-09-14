// Add the current day into the HTML file
// Not sure how to add in the extension that allows for ordinal number https://day.js.org/docs/en/plugin/advanced-format

let today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM DD YYYY"));

// User input
// Load daily schedule
const loadSchedule = () => {
    // const taskNineAm = localStorage.getItem('taskNineAm')
    // console.log(taskNineAm)

    if (localStorage.getItem('taskNineAm') !== null) {
        // console.log('Did I work?')
        let taskNineAm = document.getElementById('nine-am')
        taskNineAm.textContent = localStorage.getItem('taskNineAm')
    };
    
    if (localStorage.getItem('taskTenAm') !== null) {
        let taskTenAm = document.getElementById('ten-am')
        taskTenAm.textContent = localStorage.getItem('taskTenAm')
    };

    if (localStorage.getItem('taskElevenAm') !== null) {
        let taskElevenAm = document.getElementById('eleven-am')
        taskElevenAm.textContent = localStorage.getItem('taskElevenAm')
    };

    if (localStorage.getItem('taskTwelvePm') !== null) {
        let taskTwelvePm = document.getElementById('twelve-pm')
        taskTwelvePm.textContent = localStorage.getItem('taskTwelvePm')
    };

    if (localStorage.getItem('taskOnePm') !== null) {
        let taskOnePm = document.getElementById('one-pm')
        taskOnePm.textContent = localStorage.getItem('taskOnePm')
    };

    if (localStorage.getItem('taskTwoPm') !== null) {
        let taskTwoPm = document.getElementById('two-pm')
        taskTwoPm.textContent = localStorage.getItem('taskTwoPm')
    };

    if (localStorage.getItem('taskThreePm') !== null) {
        let taskThreePm = document.getElementById('three-pm')
        taskThreePm.textContent = localStorage.getItem('taskThreePm')
    };

    if (localStorage.getItem('taskFourPm') !== null) {
        let taskFourPm = document.getElementById('four-pm')
        taskFourPm.textContent = localStorage.getItem('taskFourPm')
    };

    if (localStorage.getItem('taskFivePm') !== null) {
        let taskFivePm = document.getElementById('five-pm')
        taskFivePm.textContent = localStorage.getItem('taskFivePm')
    };
};

loadSchedule();

// Save event handler
// Would be best to save the user input into one object rather than multiple 
const saveHandler = (event) => {
    let buttonElement = event.target;
    let buttonId = buttonElement.getAttribute('id');

    if (buttonId === 'save-nine-am') {
        localStorage.setItem('taskNineAm', document.getElementById('nine-am').value)
 
    } else if (buttonId === 'save-ten-am') {
        localStorage.setItem('taskTenAm', document.getElementById('ten-am').value)

    } else if (buttonId === 'save-eleven-am') {
        localStorage.setItem('taskElevenAm', document.getElementById('eleven-am').value)
        
    } else if (buttonId === 'save-twelve-pm') {
        localStorage.setItem('taskTwelvePm', document.getElementById('twelve-pm').value)
        
    } else if (buttonId === 'save-one-pm') {
        localStorage.setItem('taskOnePm', document.getElementById('one-pm').value)
        
    } else if (buttonId === 'save-two-pm') {
        localStorage.setItem('taskTwoPm', document.getElementById('two-pm').value)
        
    } else if (buttonId === 'save-three-pm') {
        localStorage.setItem('taskThreePm', document.getElementById('three-pm').value)
        
    } else if (buttonId === 'save-four-pm') {
        localStorage.setItem('taskFourPm', document.getElementById('four-pm').value)
        
    } else if (buttonId === 'save-five-pm') {
        localStorage.setItem('taskFivePm', document.getElementById('five-pm').value)
        
    };
};

$('.container').on('click', saveHandler);
