
const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const visibleSections = sectionIds.map(() => false); // 각 섹션의 가시 상태를 추적하기 위한 배열
let activeNavItem = navItems[0]; // 현재 활성화된 내비게이션 항목을 저장

// IntersectionObserver 설정
const options = {
    rootMargin: '-20% 0px 0px 0px', // 뷰포트와 타겟 요소 간의 마진
    threshold: [0, 0.98], // 요소가 뷰포트에 얼마나 보이는지를 나타내는 값
};

const observer = new IntersectionObserver(observerCallback, options); // IntersectionObserver 인스턴스를 생성
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) { // Observer 콜백 함수. 각 엔트리를 순회하며 가시 상태를 업데이트
  let selectLastOne; // 마지막 섹션

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });

  // 뷰포트에 가장 먼저 보이는 섹션의 인덱스 또는 마지막 섹션의 인덱스
  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);

  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('acitve');
}
