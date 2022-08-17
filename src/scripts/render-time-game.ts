export const minutes: HTMLElement | null =
    document.querySelector('.timer-minutes');
export const seconds: HTMLElement | null =
    document.querySelector('.timer-seconds');
export let timer: any;

export default function renderTimeGame() {
    if (!(minutes instanceof HTMLElement)) {
        return;
    }
    let numberMinutesFormat: number | null;
    if (minutes !== null) {
        numberMinutesFormat = Number(minutes.textContent);
    }
    let count = 0;

    function counting() {
        count++;
        if (seconds !== null) {
            let value: number = Number(seconds.textContent);
            value = count;
        }
        if (seconds !== null) {
            seconds.textContent = String(count);
        }

        if (count > 59) {
            if (numberMinutesFormat !== null) {
                numberMinutesFormat++;
            }

            if (minutes !== null) {
                minutes.textContent = String(numberMinutesFormat);
            }
            if (seconds !== null) {
                seconds.textContent = String(0);
                count = 0;
            }
        }
    }

    timer = setInterval(counting, 1000);
}
