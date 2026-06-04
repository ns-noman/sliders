# HTML CSS JavaScript Sliders Collection

A collection of modern, responsive, and lightweight sliders built with pure HTML, CSS, and JavaScript.

## Sliders Included

### 1. Luxury Apartment Slider

A fullscreen real estate/apartment slider featuring elegant animations, overlay effects, navigation controls, autoplay, and JSON-driven content.

#### Features

* Fullscreen responsive design
* Dynamic slide loading from `slides.json`
* Previous & Next navigation
* Dot indicators
* Autoplay support
* Smooth fade transitions
* Dark overlay for better readability
* Mobile-friendly layout
* Easy content management through JSON

#### Files

```text
luxury-apartment-slider/
│
├── index.html
├── style.css
├── script.js
└── slides.json
```

#### JSON Structure

```json
{
  "slides": [
    {
      "subtitle": "Luxury Living",
      "title": "Modern Apartment Spaces",
      "description": "Discover premium apartments designed for comfort.",
      "button_text": "Explore Now",
      "button_link": "#",
      "image": "image-url.jpg"
    }
  ]
}
```

#### Screenshot

Add screenshot here

---

### 2. Animated Slider With Zoom Out Effect

A modern fullscreen image slider featuring a cinematic zoom-out background animation combined with smooth text transitions.

#### Features

* Fullscreen hero slider
* Zoom-out image effect
* Smooth text animations
* Navigation arrows
* Dot indicators
* Auto slide transition
* Responsive design
* Lightweight and fast
* Pure HTML, CSS & JavaScript

#### Files

```text
animated-slider-with-zoom-out-effect/
│
├── index.html
├── style.css
└── script.js
```

#### Effects

* Image zoom-out animation
* Fade-in content
* Smooth slide switching
* Modern UI design

#### Screenshot

Add screenshot here

---

## Installation

Clone the repository:

```bash
git clone https://github.com/ns-noman/sliders.git
```

Navigate to any slider folder:

```bash
cd sliders/luxury-apartment-slider
```

Or

```bash
cd sliders/animated-slider-with-zoom-out-effect
```

Run using:

* VS Code Live Server
* XAMPP
* Laragon
* Apache
* Nginx

or any local web server.

---

## Browser Support

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari
* Opera

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* JSON

---

## Customization

### Change Images

Update the image URLs inside:

```text
slides.json
```

### Change Text

Edit:

```json
{
  "title": "Your Title",
  "subtitle": "Your Subtitle",
  "description": "Your Description"
}
```

### Change Auto Slide Speed

Inside `script.js`:

```javascript
setInterval(() => {
    nextSlide();
}, 5000);
```

Change `5000` to your preferred duration.

---

## Author

**Nowab Shorif Noman**

* Web Application Developer
* Laravel Developer
* React Developer

GitHub:
https://github.com/ns-noman

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute.
