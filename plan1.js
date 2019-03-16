memory = "0";
current = "0";
operasi = 0;

function tambah(angka){
    if((eval(current) == 0) && (current.indexOf(".") == -1)){
        current = angka;
    }
    else{
        current += angka;
    }
    document.getElementById("Display").value = current;
}

function operate(op){
    if(op.indexOf("+") > -1) (operasi = 1)
    if(op.indexOf("-") > -1) (operasi = 2)
    if(op.indexOf("*") > -1) (operasi = 3)
    if(op.indexOf("/") > -1) (operasi = 4)

    memory = current;
    current = "";
    document.getElementById("Display").value = current;
}

function hasil(){
    if(operasi == 1) (current = eval(memory) + eval(current))
    if(operasi == 2) (current = eval(memory) - eval(current))
    if(operasi == 3) (current = eval(memory) * eval(current))
    if(operasi == 4) (current = eval(memory) / eval(current))

    memory = "0";
    operasi = 0;
    document.getElementById("Display").value = current;
}

function tambahtitik(){
    if(current.length == 0){
        current = "0";
    }else{
        if(current.indexOf(".") == -1){
            current += ".";
        }
    }

    document.getElementById("Display").value = current;}

function plusminus(){
    if(current.indexOf("-") == 0){
        current = current.substring(1);
    }else{
        current = "-"+current;
    }
    document.getElementById("Display").value = current;
}
function bersih(){
    current = "0";

    document.getElementById("Display").value = current;
}
function hilang(){
    current = "";

    document.getElementById("Display").value = current;
}