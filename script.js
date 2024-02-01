const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger .addEventListener('click',function(){
    const hamIcon = this.querySelector('.humburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.computedStyleMap.display==="none"){
        hamIcon.computedStyleMap.display="inline-block"
        menu.computedStyleMap.display="none"
        crossIcon.style.display="none"
    }
    else{
        crossIcon.style.display = "inline-block"
        hamIcon.style.display ="none"
        menu.style.display="block"
    }
});