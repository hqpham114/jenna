const pixelTag = document.querySelector("div.pixels");
const progressBar =  document.querySelector('.progress');
const bodyTag = document.querySelector('body');
const sections = document.querySelectorAll('section')
const clientTag = document.querySelector('div.client')
const pageTag = document.querySelector('.page')
const headerTag = document.querySelector('header')
document.addEventListener('scroll', function(){
    
    const pixels = window.pageYOffset;
  
    pixelTag.innerHTML = pixels;
  
})

// when we scroll the page, make the progress bar
document.addEventListener('scroll', function(){
    
    const pixels = window.pageYOffset;

    // get the height of the body
    const pageHeight = bodyTag.getBoundingClientRect().height;

    const totalScrollableDistance = pageHeight - window.innerHeight;

    const percentage = (pixels / totalScrollableDistance)*100;

    progressBar.style.width = `${percentage}% `;
  
})

// when we scroll, we want to see how far down the page we scroll
// then for each section, check whether we pass it and if we have...
// update the text in the header

document.addEventListener('scroll', function(){
    const pixels = window.pageYOffset;
  
    sections.forEach((section, index) => {
        const currentSection = index +1;  
       if (section.offsetTop -100 <= pixels) {
        clientTag.innerHTML = section.getAttribute('data-client'); 
       pageTag.innerHTML = `${currentSection} / ${sections.length}`;
      
       if(section.hasAttribute('data-is-dark')){
          headerTag.classList.add('white')
          progressBar.classList.add ('white')
      } else {
        headerTag.classList.remove('white')  
        progressBar.classList.remove('white')
      }
    
    } 

    });

})