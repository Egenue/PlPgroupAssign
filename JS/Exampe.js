        // Add any additional JavaScript functionality here
        // Example: Fetching project data from an API or local JSON file
        // fetch('projects.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         const projectsSection = document.querySelector('#projects');
        //         data.projects.forEach(project => {
        //             const projectElement = document.createElement('div');
        //             projectElement.classList.add('project');
        //             projectElement.innerHTML = `
        //                 <h2>${project.title}</h2>
        //                 <p>${project.description}</p>
        //                 <a href="${project.link}" target="_blank">View Project</a>
        //             `;
        //             projectsSection.appendChild(projectElement);
        //         });
        //     })
        //     .catch(error => console.error('Error fetching project data:', error));
        // Example: Adding a smooth scroll effect to the CTA button
        // document.querySelector('.cta-btn').addEventListener('click', function (e) {
        //     e.preventDefault();
        //     const targetId = this.getAttribute('href');
        //     const targetElement = document.querySelector(targetId);
        //     targetElement.scrollIntoView({ behavior: 'smooth' });
        // });
        // Example: Adding a simple form submission handler
        // document.querySelector('form').addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     const formData = new FormData(this);
        //     fetch('submit_form.php', {
        //         method: 'POST',
        //         body: formData
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             if (data.success) {
        //                 alert('Form submitted successfully!');
        //             } else {
        //                 alert('Error submitting form. Please try again.');
        //             }
        //         })
        //         .catch(error => console.error('Error submitting form:', error));
        // });
        // Example: Adding a simple form validation
        // function validateForm() {
        //     const name = document.querySelector('#name').value;
        //     const email = document.querySelector('#email').value;
        //     const message = document.querySelector('#message').value;
        //     if (name === '' || email === '' || message === '') {
        //         alert('Please fill in all fields.');
        //         return false;
        //     }
        //     if (!validateEmail(email)) {
        //         alert('Please enter a valid email address.');
        //         return false;
        //     }
        //     return true;
        // }
        // function validateEmail(email) {
        //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     return re.test(String(email).toLowerCase());
        // }
        // Example: Adding a simple image slider
        // const images = document.querySelectorAll('.slider img');
        // let currentIndex = 0;
        // function showImage(index) {
        //     images.forEach((img, i) => {
        //         img.style.display = i === index ? 'block' : 'none';
        //     });
        // }
        // function nextImage() {
        //     currentIndex = (currentIndex + 1) % images.length;
        //     showImage(currentIndex);
        // }
        // function prevImage() {
        //     currentIndex = (currentIndex - 1 + images.length) % images.length;
        //     showImage(currentIndex);
        // }
        // document.querySelector('.next-btn').addEventListener('click', nextImage);
        // document.querySelector('.prev-btn').addEventListener('click', prevImage);
        // showImage(currentIndex);
        // Example: Adding a simple lightbox effect for images
        // const lightbox = document.querySelector('.lightbox');
        // const lightboxImg = document.querySelector('.lightbox img');
        // const images = document.querySelectorAll('.gallery img');
        // images.forEach(img => {
        //     img.addEventListener('click', function () {
        //         lightbox.style.display = 'block';
        //         lightboxImg.src = this.src;
        //     });
        // });
        // lightbox.addEventListener('click', function () {
        //     this.style.display = 'none';
        // });