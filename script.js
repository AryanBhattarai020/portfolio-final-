
        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 100);
            
            // Back to top button
            const backToTop = document.querySelector('.back-to-top');
            backToTop.classList.toggle('active', window.scrollY > 500);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 3D Image Effect
        const image3d = document.querySelector('.image-3d');
        
        if (image3d) {
            image3d.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                image3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });

            // Reset when mouse leaves
            image3d.addEventListener('mouseleave', () => {
                image3d.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });
        }

        // GSAP Animations
        gsap.from('.fade-in', {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }

        // Newsletter Form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to my newsletter!');
                this.reset();
            });
        }