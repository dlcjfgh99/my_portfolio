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
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
// console.log(sectionIds);
// console.log(sections);
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];
const options = {
  // 섹션이 조금만 보여도 true라고 지정되는것은 부모 컨테이너를 조금 작게 만들면 됨
  // 높이를 실제크기가 아니라 조금 줄여서 인식하게끔 만들면됨 top부분만 margin을 -러
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
  // threshold: [0, 0.98] 진입할때(0)와 마지막순간,거의다보일때(0.98)일때 콜백함수를 받고싶음
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  //  flag변수란 true인지 아닌지 간직할 수 있는 selectLastOne이 플래그 변수임
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  selectNavItem(navIndex);
}
function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
  // 왜 ? index : 0  왜 0으로 했냐면 true인 index를 찾는건데 만약 없다면 -1이 나옴 -1이 나오면 다른 코드에서 undefined가 나오기대문에 안전하게 0으로
}
function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  // 코드상으로는 함수를 호출하는 사람이 배열의 크기보다 index를 크게 넣을 수 있으므로 안전하게 navitems를 찾지 못했다면 빨리 종료하게 만든것
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
// selectLastOne의 세가지조건이 모두 true여야 selectLastOne이 true이고 아니면 false인데
// 우리가 활성화시킬 메뉴 인덱스는 selectLastOne이 트루라면 젤 마지막 메뉴를 활성화 false면 현재 보여지고 있는 젤 처음에 보여진다고 나온 메뉴를 활성화

// 문제점
// 다수의 section이 보이면 첫번째 섹션 무조건으로 해놔서 about이 skill보다 완전 조금 보여도 about이 호출됨
// 마지막contact섹션도 조금만 보이면 true라고 나옴 selectLastOne에 나오듯 entry.intersectionRatio>= 0.95이상 다 들어올때 마지막 부분 하이라이트하라고 설정
// 하지만 처음 마지막 섹션 진입했을때만 callback함수가 호출되고 다 들어올땐 콜백함수가 호출안됨
// 그이유는 intersection 함수 자체가 진입이랑 빠져나갔을때만 콜백함수가 호출

// 이부분은 options을 통해 해결 가능
