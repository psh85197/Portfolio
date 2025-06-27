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
})