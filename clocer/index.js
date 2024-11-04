
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const errorMessage = document.getElementById("errorMessage");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            showError("Please enter a task.");
            return;
        }
       
       
        const li = document.createElement("li");
        li.textContent = taskText;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed", checkbox.checked);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.prepend(checkbox);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
        clearError();
    }
    function showError(message) {
        errorMessage.textContent = message;
    }
        
    


    function clearError() {
        errorMessage.textContent = "";
    }
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("numberInput");
    const sortOrder = document.getElementById("sortOrder");
    const sortButton = document.getElementById("sortButton");
    const errorMessage = document.getElementById("errorMessage");
    const sortedResult = document.getElementById("sortedResult");

    function sortNumbers() {
        const input = numberInput.value.trim();

        if (!input) {
            showError("Please enter some numbers.");
            return;
        }

        const numberArray = input.split(",").map(num => num.trim());

        if (!numberArray.every(num => !isNaN(num) && num !== "")) {
            showError("Please enter valid numbers separated by commas.");
            return;
        }

        const parsedNumbers = numberArray.map(Number);

        parsedNumbers.sort((a, b) => {
            return sortOrder.value === "ascending" ? a - b : b - a;
        });

        sortedResult.textContent = `Sorted Numbers: ${parsedNumbers.join(", ")}`;
        clearError();
    }
    function showError(message) {
        errorMessage.textContent = message;
        sortedResult.textContent = "";
    }
    function clearError() {
        errorMessage.textContent = "";
    }
    sortButton.addEventListener("click", sortNumbers);
});
//change color
document.addEventListener("DOMContentLoaded", () => {
    const changeColorButton = document.getElementById("changeColorButton");
    let isBlack = false;

    // Function to toggle the background color
    function toggleBackgroundColor() {
        document.body.style.backgroundColor = isBlack ? "white" : "black";
        isBlack = !isBlack;
    }
    changeColorButton.addEventListener("click", toggleBackgroundColor);
    // setInterval(toggleBackgroundColor, 2000);
});


// JavaScript for Random Number Guessing Game
document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuessButton");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const attemptsMessage = document.getElementById("attemptsMessage");

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    function checkGuess() {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedbackMessage.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }
       

        if (userGuess === randomNumber) {
            feedbackMessage.textContent = `Congratulations! You guessed the correct number (${randomNumber})!`;
            attemptsMessage.textContent = `You took ${attempts} attempt(s) to guess the correct number.`;
            guessInput.disabled = true;
            submitGuessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            feedbackMessage.textContent = "Too low. Try again!";
            attemptsMessage.textContent = `Attempt: ${attempts}`;
        } else {
            feedbackMessage.textContent = "Too high. Try again!";
            attemptsMessage.textContent = `Attempt: ${attempts}`;
        }

        guessInput.value = "";
        guessInput.focus();
    }
    submitGuessButton.addEventListener("click", checkGuess);

    guessInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkGuess();
        }
    });
});

