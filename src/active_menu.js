// 구현계획
// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고온다
// 2.intersectionObserver를 사용해서 모든섹션 관찰
// 3. 보여지는 섹션에 해당하는 메뉴아이템을 활성화시킨다.
// 보여지는 섹션:
// -다수의 섹션이 동시에 보여진다면 ,가장 첫번째 섹션을 선택
// -마지막 contact섹션이 보여진다면 가장 마지막 섹션 선택

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
// console.log(sectionIds);
// console.log(sections);
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const options = {};
const observer = new IntersectionObserver(observercallback, options);
sections.forEach((section) => observer.observe(section));

function observercallback(entries) {
  entries.forEach((entry) => {
    console.log(entry.target);
  });
}
