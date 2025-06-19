const testimonials = [
  `"Working with this team was a fantastic experience. The process was seamless, and the results were outstanding!"<br><strong>- Subasri</strong>`,
  `"They exceeded expectations. Highly recommended!"<br><strong>- Rohan</strong>`,
  `"Amazing design, great support, and quick delivery!"<br><strong>- Priya</strong>`
];

let i = 0;
const testimonialElement = document.getElementById("testimonial");

setInterval(() => {
  testimonialElement.innerHTML = testimonials[i];
  i = (i + 1) % testimonials.length;
}, 5000);
