
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    current = index;
}

nextBtn.addEventListener('click', () => {
    showSlide((current + 1) % slides.length);
});

prevBtn.addEventListener('click', () => {
    showSlide((current - 1 + slides.length) % slides.length);
});

dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        showSlide(index);
    });
});

setInterval(()=>{
    showSlide((current + 1) % slides.length);
},5000);