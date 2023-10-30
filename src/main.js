// 스크롤된 높이가 헤더부분의 Y보다 커지면 다크모드로 변경 처음엔 다른색으로 구글 검사에서 #home 배경색을 보라색으로 바꿔놓ㅇ므
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
console.log(headerHeight)
// offsetHeight는 getboundingClientRect().height 정수처리
// pageYoffset=scrollY
// element.getboundingClientRect 요소의 사각형 위아래좌우 크기에 대해서 알려주는
document.addEventListener("scroll", () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add("header--dark");
  } else{
    header.classList.remove('header--dark')
  }
});

// 내리면 내릴 수록 home의 opacity가 증가
const home = document.querySelector('.home__container');
const homeHeight= home.offsetHeight;
document.addEventListener("scroll",()=>{
  home.style.opacity = 1- (window.scrollY / homeHeight);
})

// home 절반정도 내려가면 arrow 버튼 생기게 
document.addEventListener('scroll',()=>{
  if(window.scrollY>homeHeight/2){
    document.querySelector('.arrow-up').style.display="block";
  }else if(window.scrollY=0|| window.scrollY<homeHeight/2){
    document.querySelector('.arrow-up').style.display="none";
  }
})