/*-----------------------code for slider to automatically swipe------------------------*/
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1
    }
},5000);