'use strict';
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(1);
    const s10 = String(d.getSeconds()).padStart(2, '0').slice(0, 1);
    const s1 = String(d.getSeconds()).padStart(2, '0').slice(1, 2);
    const ms = String(d.getMilliseconds()).padStart(3, '0').slice(0, 1);
    timer.textContent = `${m} : ${s10} : ${s1} : ${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  start.addEventListener('click', () => {
    setButtonStateInitial();
    startTime = Date.now();
    countUp();
    setButtonStateRunning();
  });
  stop.addEventListener('click', () => {
    setButtonStateStopped()
    clearTimeout(timeoutId); 
    elapsedTime += Date.now() - startTime;

  });
  reset.addEventListener('click', () => {
    setButtonStateStopped()
    timer.textContent = '0 : 0 : 0 : 0';
    elapsedTime = 0;
    setButtonStateInitial();
  });
  setButtonStateInitial();
}