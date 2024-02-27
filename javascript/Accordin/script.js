// Add your javascript here
let accordin = document.getElementsByClassName('accordion');
let accLen = accordin.length;
for(let i=0;i<accLen;i++){
    accordin[i].addEventListener('click',function(){
        if(!this.classList.contains('activeElem')){
            let allAccordin = document.querySelectorAll('.accordion');
            for(let i=0;i<allAccordin.length;i++){
                if(allAccordin[i].classList.contains('activeElem')){
                    allAccordin[i].classList.remove('activeElem');
                }
            }
            this.classList.add('activeElem');
        }else{
           this.classList.remove('activeElem');    
        }        
    });
    if(i==0){
        accordin[0].classList.add('activeElem');
    }
}
