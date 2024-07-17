var num = 0;
var p_;
function CheckData(){
    var data = document.getElementById('CheckData').value;
    data = data * data;
    if (!isNaN(data)){
        alert(data);
        document.getElementById('sms').textContent = "Обращение:";
        document.getElementById('sms').style = "padding-left: 20px; padding-top:20px; font-size:larger;";

    }
    else { 
        if (num == 3){
            var p = document.getElementById('sms');
            p.textContent = "PLS INPUT A NUUUUMBER!!!!";
            p.style = "color: red; padding-left: 20px; padding-top:20px; font-size:largeк; font-weight:bold;"
            
            num = 0;
        }
        else{
            alert("Please input a number)");
            num = num + 1;
        }
    }
}