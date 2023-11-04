"use strict";
// 프로젝트를 누를때마다 프로젝트 속성에 따른 사진들이 보이게끔
// 힌트는 카테고리마다 타입을 줘서 선별
// 클릭한 카테고리와 그의 속하는 밑에 항목들이 같아야함

const categories = document.querySelector(".categories");
// document.querySelectorAll.addEventListner는 불가 왜냐면 쿼리셀렉터올이 nodeList를 반환하기 때문에 for문으로 우회
// 카테고리의 데이터 값과 거기에 속하는 데이터값이 일치한것만 남기는거고 아닌건 숨겨
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");
categories.addEventListener("click", function (event) {
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
  projectsContainer.classList.add("anim-out");
  projects.forEach((project) => {
    if (filter === "All" || filter === project.dataset.id) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
    handleActiveSelection(event.target);
  });
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}
