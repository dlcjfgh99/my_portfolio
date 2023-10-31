// 스크롤된 높이가 헤더부분의 Y보다 커지면 다크모드로 변경 처음엔 다른색으로 구글 검사에서 #home 배경색을 보라색으로 바꿔놓ㅇ므
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
// element.getboundingClientRect 요소의 사각형 위아래좌우 크기에 대해서 알려주는
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
// 내릴 수록 home섹션의 컨텐츠 투명도를 점진적으로 불투명하게
const homeSection = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
// offsetHeight ==getboundingClientRect
document.addEventListener("scroll", () => {
  homeSection.style.opacity = 1 - window.scrollY / homeHeight;
});

// 홈이 절반정도 내려가면 화살표 아이콘 나오게 하고 그 위로 올라가면 안 보이게 하기
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    document.querySelector(".arrow-up").style.display = "block";
  } else {
    document.querySelector(".arrow-up").style.display = "none";
  }
});
