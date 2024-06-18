let strs = document.getElementById('strs');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let asd = document.querySelector('.asd');
onscroll=function(){
    let value = scrollY;
    strs.style.left = value + 'px' ;
    moon.style.top = value *4 + 'px' ;
    mountains3.style.top = value *2 + 'px' ;
    mountains4.style.top = value *1.5 + 'px' ;
    river.style.top = value + 'px' ;
    boat6.style.top = value + 'px' ;
    boat6.style.left = value *3 + 'px' ;
    asd.style.fontsize = value  + 'px' ;
    if(scrollY >= 11){
        asd.style. fontsize = 67  + 'px' ;
        asd.style. position = 'fixed' ;
        if(scrollY >= 347){
            asd.style. display = 'none' ;} 
            else{
                asd.style. display = 'block' ;
            }
            if(scrollY >=90){
                document.querySelector('.main').style.background=' linear-gradient(#376281,#10001f)'
            }else{
                document.querySelector('.main').style.background=' linear-gradient(#200016,#10001f)'

            }
    }
    
}

