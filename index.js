function getInputValue(){
           
    var inputVal1 =+document.getElementById("myInput1").value;
    var inputVal2 =+document.getElementById("myInput2").value;
    var inputVal3 =+document.getElementById("myInput3").value;
   
   
    for (var i = inputVal1; i <= inputVal2; i++) {

    var result = i * inputVal3;
    document.write(i + ' x ' + inputVal3 +" = "+ result +"<br>" )


    }
    
    
}
