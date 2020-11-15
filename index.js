function getInputValue(){
           
    var inputVal1 = document.getElementById("myInput1").value;
    var inputVal2 = document.getElementById("myInput2").value;
    var inputVal3 = document.getElementById("myInput3").value;
   
   
    for ( inputVal1; inputVal1 <=inputVal2; inputVal1++) {

    var result = inputVal1*inputVal3;
    document.write(inputVal1+ ' x ' + inputVal3 +" = "+ result +"<br>" )


    }
    
    
}