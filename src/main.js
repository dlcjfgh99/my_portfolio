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
