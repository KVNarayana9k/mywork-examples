const showValue = document.querySelector('.value');
    const EvenOdd = document.querySelector('.even-odd');
//    console.log(showValue.textContent);
    let even = "Even";
    let odd = "Odd";
    let counter = 0;
   
    function add(){
        
        if(counter < 20){
            
            counter++
            if(counter%2==0){
                
                showValue.textContent = counter;
                EvenOdd.textContent = even;
            }else{
                showValue.textContent = counter;
                EvenOdd.textContent = odd;
            }
        }
        // counter++ ;
        // showValue.textContent = counter;
        // alert("hello")
    }

    function del(){
        if(counter > 0)
        {
           
            counter--
            if(counter%2==0){
                showValue.textContent = counter;
                EvenOdd.textContent = even;
            }else{
                showValue.textContent = counter;
                EvenOdd.textContent = odd;
            }
            
        }
    }
    function reset(){
        if(counter >= 0){
            counter= 0;
            showValue.textContent = counter;
            EvenOdd.textContent = "EVEN / ODD";
        }
    }
    console.log("hello")