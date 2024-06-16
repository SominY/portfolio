// Header에 페이지 아래로 스크롤시 투명 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    // 스크롤 되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header--transparent');
    } else {
        header.classList.remove('header--transparent');
    }

});

// Home 섹션을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('#home');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow-up 버튼을 홈 화면에 위치할 때는 숨기기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});