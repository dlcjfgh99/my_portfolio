"use strict";
// 프로젝트를 누를때마다 프로젝트 속성에 따른 사진들이 보이게끔
// 힌트는 카테고리마다 타입을 줘서 선별
// 클릭한 카테고리와 그의 속하는 밑에 항목들이 같아야함

const categories = document.querySelector(".categories");
// document.querySelectorAll.addEventListner는 불가 왜냐면 쿼리셀렉터올이 nodeList를 반환하기 때문에 for문으로 우회
// 카테고리의 데이터 값과 거기에 속하는 데이터값이 일치한것만 남기는거고 아닌건 숨겨
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
  //   Active메뉴 재설정
  //   const active = document.querySelector(".category__selected");
  //   active.classList.remove("category__selected");
  //   e.target.classList.add("category__selected");

  //   프로젝트 필터링
});

//    버튼이 달려있는 전체적인 컨테이너에 카테고리를 달아서 빈곳에 눌려도 이벤트가 됐다고 뜸 그래서 클릭됐는데 filter 를 가지지않은상태이면 바로 종료하게 return

// 백엔드를 선택했다면 그 선택한 거기다가 categor__selected라는 클래스 부여하고 원래 있던 곳은 없애는

function handleActiveSelection(target) {
  const active = document.querySelector(".category__selected");
  active.classList.remove("category__selected");
  target.classList.add("category__selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === "All" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}

// intersectioObserver API에 대한 설명
// const options = {
//   threshold: [0, 0.25, 0.5],
//   // threshold =몇 퍼센트 진입했을때 알고싶은(callback호출) 원하는지점을 명시하고싶을때 threshold 0.25는 25%
//   // 여러 퍼센트로 알고싶으면 배열상태로
//   rootMargin: "200px",
//   // 요소가 들어간 부모 컨테이너의 마진을 설정가능 마진을 주면 부모컨테이너진입하기 직전이지만
//   // 관찰하는 크기가 커지면서 아래 요소가 관찰된걸로 보임
//   // margin을 음수값을 주면 부모 안쪽으로 마진이 생김 그래서 실제로 보이지만 마진이 안쪽에 있으므로 관찰이 안된걸로 보임
// };
// const Observer = new IntersectionObserver(callback, options);
// observer라는 인스턴스를 만들어줘야함 new IntersectionObserver(callback,options)
// options은 필수가 아님
// let sectionClss = document.querySelectorAll(".section");
// 내가 원하는 요소를 관찰하도록 명령하기 sectionClss는 내가 관찰하고싶은것
// sectionClss.forEach((i) => {
//   Observer.observe(i);
// forEach는 배열을 순회하는 함수이고 옵저버인스턴스에 옵저버라는 함수를 이용해서 관찰시키기
// });
// 우리가 관찰하는 대상이 나타나거나 사라질때마다 우리가 전달한 callback함수를 전달
// function callback(entries) {
// entries는 진입하거나 빠져나가는 요소들을 가지고있는 배열임

// entries.forEach((entry) => {
// console.log(entry) 하면 entries가 가지고 있는 배열들 확인 가능
// boundingClientRect=>이 요소의 전체적인 크기를 알수있는
// intersectionRatio=>이 요소가 화면에 얼마만큼 들어와있는지 100%다보이면 1
//  intersecting true false 들어와있는지 아닌지
// rootBounds는 우리가 관찰하고 있는 요소의 부모의 크기
// target은 우리가 진입하고 있는 요소

//     if (entry.isIntersectiong === true) {
//       document.querySelector(".header__menu__item").classList.remove("active");
//     } else {
//       entry.target.classList.remove("active");
//     }
//   });
// }
