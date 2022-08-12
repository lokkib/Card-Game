export default function renderTimeGame() {
    const minutes = document.querySelector('.timer-minutes');
    const seconds = document.querySelector('.timer-seconds');
    let numberMinutesFormat = +minutes.textContent;
    let count = 0;

    function counting() {
        count++;
        seconds.textContent = count;
        if (count > 59) {
            numberMinutesFormat++;
            minutes.textContent = numberMinutesFormat;
            seconds.textContent = 0;
            count = 0;
        }
    }

    setInterval(counting, 1000);
}
