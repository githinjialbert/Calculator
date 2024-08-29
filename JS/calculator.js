const screen = document.querySelector("#screen");
const buttons = Array.from(document.querySelectorAll("input[type='button']"));

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.value;

        if (value === "√") {
            let currentValue = screen.value;

            if (currentValue.startsWith("0")) {
                currentValue = currentValue.substring(1);
            }

            if (currentValue) {
                screen.value = `Math.sqrt(${currentValue})`;
            }            
        }
        else if (value === "AC") {
            screen.value = "";

        } 
        else if (value === "DEL") {

            screen.value = screen.value.slice(0, -1) || "0";
        } 
        else if (value === "=") {
            try {
                screen.value = eval(screen.value.replace('Math.sqrt', 'Math.sqrt'));
            } catch (error) {
              screen.value = "Error";  
            }
        }
        else {
            if (screen.value === "0" && value !== "0") {

                screen.value = value;
            } else {
                screen.value += value;
            }
        }
    });
});


































