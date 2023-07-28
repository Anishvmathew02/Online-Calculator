function buttonClick(val){
    document.getElementById("screen").value+=val
}
function backspace(){
    document.getElementById("screen").value=document.getElementById("screen").value.substring(0,document.getElementById("screen").value.length-1)
}
function calcEqual(){
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res
}
function calcClear(){
    document.getElementById("screen").value=""
}