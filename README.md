# Description of the Stopwatch Project

In this project, I created a simple stopwatch using vanilla JavaScript, HTML, and CSS.
The stopwatch displays hours, minutes, seconds, and tenths of a second, and it includes three main buttons: Start, Stop, and Reset.

The core logic is as follows:
When the Start button is clicked, the stopwatch records the current time and starts counting up by repeatedly updating the display using setTimeout.The Stop button pauses the timer by clearing the scheduled setTimeout and updates the elapsed time.
The Reset button clears the timer display, resets the elapsed time to zero, and sets the buttons back to their initial state.
I implemented button state control functions to manage when each button should be active or disabled, ensuring that the user can interact with the stopwatch correctly at each stage.
Time calculations are performed using the Date object, and formatting is handled using String().padStart() for consistent display.

This project helped me practice fundamental JavaScript concepts, such as:

* Event handling with addEventListener

* DOM manipulation

* Using setTimeout for repeated updates

* Managing application state with variables like startTime, timeoutId, and elapsedTime

* Structuring code for better readability and separation of concerns

Overall, this stopwatch project strengthened my understanding of JavaScript timing events and dynamic UI updates.

