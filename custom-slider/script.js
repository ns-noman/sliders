async function loadSlider() {
    try {
        const response = await fetch('slides.json');
        const data = await response.json();

        const slider = document.getElementById('slider');


        console.log(slider);
        

        let slidesHTML = '';

        data.slides.forEach((slide, index) => {
            slidesHTML += `
                <div class="slide ${index === 0 ? 'active' : ''}">
                    <img src="${slide.image}" alt="${slide.title}">
                    <div class="overlay"></div>

                    <div class="content">
                        <div class="subtitle">${slide.subtitle}</div>

                        <h1 class="title">
                            ${slide.title}
                        </h1>

                        <p class="desc">
                            ${slide.description}
                        </p>

                        <a href="${slide.button_link}" class="btn">
                            ${slide.button_text}
                        </a>
                    </div>
                </div>
            `;
        });

        let dotsHTML = '';

        data.slides.forEach((_, index) => {
            dotsHTML += `
                <span class="dot ${index === 0 ? 'active' : ''}"></span>
            `;
        });

        slider.innerHTML = `
            ${slidesHTML}

            <button class="nav prev">&#10094;</button>
            <button class="nav next">&#10095;</button>

            <div class="dots">
                ${dotsHTML}
            </div>
        `;

        initSlider();
    } catch (error) {
        console.error('Failed to load slides:', error);
    }
}

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    next.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            current = index;
            showSlide(current);
        });
    });

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 5000);
}

loadSlider();