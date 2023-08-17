const result = document.getElementById('result');

function add(num) {
    if (result.value == "0" || result.value == "00"){
        result.value = num;
    } else if(result.value == "0."){
        result.value += num;     
    }else {
        result.value += num;        
    }
}

function calc(four) {
    if(result.value.slice(-1) == "+" ||
        result.value.slice(-1) == "-" ||
        result.value.slice(-1) == "*" ||
        result.value.slice(-1) == "/" ){
    result.value = result.value.replace(/.$/, four);
    }
    else if (result.value == 0){
        result.value = 0;
    } else {
    result.value += four;        
    }
}

function period(point) {
    if(result.value.slice(-1) == "+" ||
        result.value.slice(-1) == "-" ||
        result.value.slice(-1) == "*" ||
        result.value.slice(-1) == "/" ){
        result.value = result.value;
    }else if(result.value.includes('.')){
        result.value = result.value;
    }else if(result.value == "00"){
        result.value = "0.";
    }else{
        result.value += point;
    }
}


function equal() {
    result.value = eval(result.value);
}

function zero() {
    result.value = 0;
}

$(function(){
    var btn = $('button');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    })
})
