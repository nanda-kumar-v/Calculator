
// display content of button

function display(content){
    outputScreen.value+=content
}
 
// clear input box

function allClear(){
    outputScreen.value=("")
}

// evaluate expression

function expEval(){
    try {
    outputScreen.value=eval(outputScreen.value)} 
 catch{
    outputScreen.value="Invalid Operation !!!"
      setTimeout(()=>{
        outputScreen.value=""
      },2000)
 }
}

// clear value expression

function removeclearValue (){
    outputScreen.value=outputScreen.value.slice(0,-1)
}

