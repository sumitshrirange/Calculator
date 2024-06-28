let showScreen = document.getElementById("screen");

function display(num){
    let store = showScreen.value += num;
}

function Calculate(){
    try {
        showScreen.value = eval(showScreen.value);
    } catch (error) {
        alert("Invalid")
    }
}

function Clear(){
    showScreen.value = "";
}

function del(){
    showScreen.value = showScreen.value.slice(0, -1)
}