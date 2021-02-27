import './common.css';
// Плагін - це клас CountdownTimer, екземпляр якого створює новий таймер з настройками.

class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.intervalId = null;
        this.isActive = false;
        this.selector = document.querySelector(`${selector}`);
        this.onTick = this.updateTimerFields;
        this.targetDate = targetDate;
        this.init();
    }    
init() {
        const time = this.getTimeComponents(this.targetDate.getTime() - Date.now());
        this.onTick(time);
    }

start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;  
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate.getTime() - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
        }, 1000);
    }
    updateTimerFields({ days, hours, mins, secs }) {
    this.selector.querySelector('[data-value="days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;
    }
     getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
    pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new CountdownTimer({selector: '#timer-1', targetDate: new Date('Mar 01, 2021')});
timer.start.call(timer);


// // Для підрахунку значень використовуй такі готові формули, де time - різниця між targetDate і поточною датою.

// /*
//  * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
//  * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
//  * залишку% і ділимо його на кількість мілісекунд в одній годині
//  * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
//  * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);