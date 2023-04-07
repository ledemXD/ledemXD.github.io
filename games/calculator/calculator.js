window.addEventListener('keydown', function (e) {
    if(this.document.activeElement == document.getElementById("result")) {
        return
    }
    else {
        if(e.altKey || e.ctrlKey || e.shiftKey) {
            return
        }
        else if(e.key == "Backspace") {
            document.getElementById("result").value = "";
        }
        else if(e.key == "x"){
            document.getElementById("result").value += "*";
        }
        else if(e.key == "Enter"){
            math();
        }
        else if(e.key == "="){
            math();
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