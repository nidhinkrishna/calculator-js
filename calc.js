let display =document.getElementById('display')
let buttons=document.querySelectorAll('button')

buttons.forEach((btn)=>{
    btn.addEventListener('click',function(){
        if (btn.id==='AC'){
            display.value=""
        }else if (btn.id==="="){
            display.value=eval(display.value)
        }else if (btn.id ==="C"){
            display.value=display.value.slice(0,-1)
        }else{
            display.value+=btn.id
        }
    })

})