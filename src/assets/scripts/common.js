etUI.utils.ready(function () {
  console.log('document ready');

  etUI.initUI();

  const header = document.querySelector('header');
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();

  // 햄버거 버튼 클릭 이벤트
  const gnbBtn = document.querySelector('.gnb-btn');
  const gnb = document.querySelector('.gnb');

  if (gnbBtn && gnb) {
    gnbBtn.addEventListener('click', function () {
      gnbBtn.classList.toggle('active');

      gnb.classList.toggle('active');
      header.classList.toggle('active');
    });
  }

  // About 섹션 GSAP 애니메이션
  function initAboutAnimation() {
    const aboutItems = document.querySelectorAll('.about-item');

    if (aboutItems.length === 0) return;

    gsap.set(aboutItems, {
      y: 80,
      opacity: 0,
      scale: 0.8,
      rotationX: 15
    });

    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateAboutItems();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(aboutSection);

    function animateAboutItems() {
      const timeline = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power3.out"
        }
      });

      aboutItems.forEach((item, index) => {
        timeline.to(item, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, index * 0.15);
      });
    }
  }

  // 섹션별 스크롤 인터랙션
  const sections = document.querySelectorAll('section');

  function handleSectionScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionMiddle = sectionTop + (sectionHeight / 2);

      if (scrollTop + (windowHeight / 2) >= sectionMiddle) {
        section.classList.add('active');

        if (section.classList.contains('home')) {
          const homeText = section.querySelector('.home-text');
          if (homeText && !homeText.classList.contains('text-animated')) {
            homeText.classList.add('text-animated');
          }
        }
      } else {
        section.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', handleSectionScroll);

  handleSectionScroll();

  initAboutAnimation();

  function initNavigationScroll() {
    const navLinks = document.querySelectorAll('.nav-list .one-depth a');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const linkText = this.querySelector('span').textContent.toLowerCase();
        let targetSection;

        switch (linkText) {
          case 'home':
            targetSection = document.querySelector('.home');
            break;
          case 'about':
            targetSection = document.querySelector('.about');
            break;
          case 'projects':
            targetSection = document.querySelector('.project');
            break;
          default:
            return;
        }

        if (targetSection) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: targetSection,
              offsetY: 80
            },
            ease: "power2.inOut"
          });
        }
      });
    });
  }

  initNavigationScroll();
})