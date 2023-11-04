'use strict';
// strict모드로 해놓기
// 스크롤된 높이가 헤더부분의 Y보다 커지면 다크모드로 변경 처음엔 다른색으로 구글 검사에서 #home 배경색을 보라색으로 바꿔놓ㅇ므
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
console.log(headerHeight);
// offsetHeight는 getboundingClientRect().height 정수처리
// pageYoffset=scrollY
// element.getboundingClientRect 요소의 사각형 위아래좌우 크기에 대해서 알려주는
document.addEventListener("scroll", () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
// 내릴 수록 home섹션의 컨텐츠 투명도를 점진적으로 불투명하게
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
// offsetHeight ==getboundingClientRect
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 홈이 절반정도 내려가면 화살표 아이콘 나오게 하고 그 위로 올라가면 안 보이게 하기
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    document.querySelector(".arrow-up").style.display = "block";
  } else {
    document.querySelector(".arrow-up").style.display = "none";
  }
});

// 모바일화면일때 Header의 부분을 navbar로 바꾸고 누르면 펴지고 다시 누르면 없어지는
// let navBar = `(<i class="fa-solid fa-bars"></i>)`;
const headerMenu = document.querySelector(".header__menu");
const navBar = document.querySelector(".header__toggle")
   navBar.addEventListener("click", function () {
      headerMenu.classList.toggle('open');
    })

// navbar 메뉴 클릭시 자동으로 닫아줌
headerMenu.addEventListener("click", function () {
  headerMenu.classList.remove('open');
})

// 프로젝트를 누를때마다 프로젝트 속성에 따른 사진들이 보이게끔
// 힌트는 카테고리마다 타입을 줘서 선별
// 클릭한 카테고리와 그의 속하는 밑에 항목들이 같아야함

const categories=document.querySelector(".categories");
const projects=document.querySelector(".projects")
// document.querySelectorAll.addEventListner는 불가 왜냐면 쿼리셀렉터올이 nodeList를 반환하기 때문에 for문으로 우회

// 카테고리의 데이터 값과 거기에 속하는 데이터값이 일치한것만 남기는거고 아닌건 숨겨

categories.addEventListener("click",function(e){
 const filter = e.target.dataset.id;
 const filterproject=projects.dataset.id
if(filter == filterproject){
  console.log("gg")
}
})