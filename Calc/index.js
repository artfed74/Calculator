var but1=document.getElementById('but1');
var but2=document.getElementById('but2');
var but3=document.getElementById('but3');
var but4=document.getElementById('but4');
var val1=document.getElementById('val1');
var val2=document.getElementById('val2');
var sum=0;
var def=0;
var umn=0;
var del=0;



but1.addEventListener('click',function(){
    value1=parseInt(val1.value);
    value2=parseInt(val2.value);
    sum=value1 + value2;
    alert("Сумма равна: " + sum);
})
but2.addEventListener('click',function(){
    def=val1.value - val2.value;
    alert("Вычитание равно: " + def);
})
but3.addEventListener('click',function(){
    umn=val1.value * val2.value;
    alert("Умножение равно: " + umn);
})
but4.addEventListener('click',function(){
    del=val1.value / val2.value;
    alert("Деление равно: " + del);
})