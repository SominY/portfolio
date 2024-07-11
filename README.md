# portfolio 제작
 <br>

### &nbsp;👾 &nbsp; 제작 기간 : 24.05.30 - 24.06.20
### &nbsp;👾 &nbsp; 사용 기술 : HTML/CSS + JavaScript
<br><br>

## 🚀 &nbsp; 구현화면
<br>
<div align="center">
<img width="50%" alt="Home" src="https://github.com/SominY/portfolio/assets/154952345/31b1853c-2934-439a-b78e-786bd8ab4f8b">
</div>

<br><br>
## 🚀 &nbsp; HTML5

- 시맨틱 HTML 태그를 사용하여 콘텐츠를 의미론적으로 구조화
- 구글 폰트를 통해 Ubuntu와 Do Hyeon 폰트를 적용
- Font Awesome 아이콘 라이브러리를 활용하여 다양한 아이콘을 쉽게 삽입
- SEO를 고려해 페이지 제목과 설명을 정확하게 설정
- Open Graph 태그를 이용하여 소셜 미디어에서 페이지를 공유할 때의 정보를 최적화

<br><br>
## 🚀 &nbsp; CSS

1. **_BEM (Block Element Modifier)_**
   - BEM 방법론을 사용하여 클래스 네이밍을 구조화하고 요소 간의 관계를 명확히 함.
   - 예시: `.header__menu__item`, `.introduce__img`, `.project__metadata`.
<br>

2. **_글로벌 변수 (Global Variables)_**
   - `:root`에 정의된 CSS 변수를 사용하여 색상 및 기타 스타일 값을 전역으로 관리.
   - 예시: `--color-primary`, `--color-primary-variant`, `--divider-bottom-wave`.
<br>

3. **_Divider (분할선)_**
   - `--divider-bottom-wave`에서 사용된 SVG 데이터 URL을 통해 정의된 분할선 배경 이미지. `mask` 및 `-webkit-mask` 속성을 통해 요소의 배경을 특정 모양으로 클리핑하는 데 사용.
<br>

4. **_반응형 디자인 (Responsive Design))_**
   - `@media` 쿼리를 사용하여 다양한 화면 크기에 대응하는 반응형 디자인을 구현.
   - 예시: `.section`, `.home__title`, `.projects`.
<br>

5. **_애니메이션 (Animation)_**
   - `@keyframes`를 사용하여 CSS 애니메이션을 정의하고, 요소에 적용하여 동적인 효과를 부여.
   - 예시: `tiltAndReturn`, `rotate360`, `animate__fadeInDownBig`.
<br>

6. **_Transition (전환 효과)_**
   - `transition` 속성을 사용하여 요소의 상태 변화에 부드러운 전환 효과를 부여.
   - 예시: `.header`, `.home__avatar`, `.header__toggle`.
<br>

7. **_Transform (변형 효과)_**
   - `transform` 속성을 사용하여 요소의 크기, 회전, 이동 등을 변형.
   - 예시: `.home__avatar`, `.project__metadata`.

<br><br>
## 🚀 &nbsp; JavaScript

1. **_Header 스크롤 시 투명 스타일링_**
   - `scroll` 이벤트를 사용하여 사용자가 페이지를 스크롤할 때마다 실행.
   - 스크롤 위치가 `headerHeight`보다 크면 헤더와 관련 요소에 `header--transparent`, `header__logo__img--transparent`, `header__menu--transparent` 클래스를 추가.
<br>

2. **_Home 섹션 투명화 처리_**
   - 스크롤 시 `scroll` 이벤트를 통해 `window.scrollY`와 `home.offsetHeight`를 사용하여 Home 섹션의 투명도를 조절.
<br>

3. **_arrow-up 버튼 숨기기_**
   - 사용자가 페이지를 스크롤하면서 `scroll` 이벤트를 감지하여 `window.scrollY`와 `homeHeight / 2`를 비교하여 화면 상단으로 스크롤될 때 화살표 버튼을 숨기거나 나타나게 함.
<br>

4. **_Navbar 토글 버튼_**
   - `.header__toggle` 요소를 클릭하면 `click` 이벤트가 발생하며, `navbarMenu.classList.toggle('open')`을 통해 Navbar 메뉴(`.header__menu`)의 `open` 클래스를 추가/제거하여 메뉴의 펼침/닫힘을 처리.
<br>

5. **_Navbar 메뉴 자동 닫힘_**
   - Navbar 메뉴(`.header__menu`)에서 항목을 클릭하면 `click` 이벤트가 발생하며, `navbarMenu.classList.remove('open')`을 통해 메뉴를 자동으로 닫음.
<br>

6. **_TypeIt 라이브러리 추가_**
   - 텍스트를 동적으로 추가하고 제어할 수 있는 기능을 제공.
   - 설정 예시: `new TypeIt('.home__title2--strong', { loop: true, speed: 100 }).pause(1000).go();`.
<br>

7. **_특정 섹션에 대해 스크롤 이벤트 처리_**
   - 페이지 섹션들이 뷰포트에 들어오고 나가는 것을 감지하여, 해당 섹션과 일치하는 내비게이션 메뉴 항목을 활성화하는 기능을 수행. IntersectionObserver API를 사용하여 섹션의 가시성을 감시하고, 내비게이션 항목의 상태를 동적으로 업데이트.
