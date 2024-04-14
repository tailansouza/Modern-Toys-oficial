
let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
    procimaImagem();
},2000)

function procimaImagem(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}

