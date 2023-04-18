import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector('#datetime-picker');
const btStart = document.querySelector('button[data-start]');
const daysSt = document.querySelector('span[data-days]');
const hoursSt = document.querySelector('span[data-hours]');
const minutesSt = document.querySelector('span[data-minutes]');
const secondsSt = document.querySelector('span[data-seconds]');
btStart.disabled = true;




 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const date2 = selectedDates[0].getTime();
    const date1 = Date.now();
    
    if (date2 < date1){
        window.alert("Please choose a date in the future");
        btStart.disabled = true;
    } 
     else if (!date2 < date1){
        btStart.disabled = false;
        btStart.addEventListener('click', onStart);
        const intervalID  = setInterval(onStart,1000);
        function onStart(){
            const date1 = Date.now();
            let countdown = date2 - date1;
            const { days, hours, minutes, seconds } = convertMs(countdown);
            daysSt.textContent = `${days}`;
            hoursSt.textContent = `${hours}`;
            minutesSt.textContent = `${minutes}`;
            secondsSt.textContent = `${seconds}`;

            
        }
            
            
    }
   },
  };

  
 
  function addLeadingZero(value){
    return String(value).padStart(2,'0');
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    let days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };

  }

  
 
  

  
  

flatpickr(datetimePicker, options);

