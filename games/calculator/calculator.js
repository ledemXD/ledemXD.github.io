window.addEventListener('keydown', function (e) {
    if(this.document.activeElement == document.getElementById("result")) {
        return
    }
    else {
        if(e.altKey || e.ctrlKey) {
            return
        }
        else if(e.key == "Backspace") {
            clear();
        }
        else if(e.key == "x"){
            document.getElementById("result").value += "*";
        }
        else if(e.key == "Enter"){
            math();
        }
        else if(e.key == 187){
            document.getElementById("result").value += "+";  
        }
        else if(e.key == "="){
            math();
        }
        else if(e.key == "Shift"){
            return
        }
        else {
            display(e.key);
        }
    }
}, false);
  

function display(calculate) {
    document.getElementById("result").value += calculate;
}

function math() {
    var enteredValue = document.getElementById('result').value;
    var evaledValue = eval(enteredValue);
    document.getElementById('result').value = evaledValue;
}

function clear() {
    document.getElementById('result').value = "";
}