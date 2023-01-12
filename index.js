
var flag = false;
var last_button;
var rate;
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
var buttons = [btn1,btn2,btn3,btn4,btn5]
const unclick_button = btn1.style.backgroundColor;

function myfunct(btn){
  btn.addEventListener('click', function onClick() {
    
    rate = btn.innerText;
    buttons.forEach(b=>{
      if (b !== btn){
        b.style.backgroundColor = 'hsl(214, 12%, 23%)'
      }
      else{
        b.style.backgroundColor = 'orange'
      }
    })
  
});
}

myfunct(btn1);
myfunct(btn2);
myfunct(btn3);
myfunct(btn4);
myfunct(btn5);

function result(){
  if(rate!==undefined){
    document.getElementById("result").style.zIndex="1";
   document.getElementById("change").innerHTML=`you selected ${rate} out of 5`;
  }else{
    alert("Please Select a Rating!");
  }
  
}










