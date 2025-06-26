# 코딩 컨벤션 및 컴포넌트 가이드

이 문서는 프로젝트의 코딩 컨벤션과 컴포넌트 사용 가이드를 제공합니다. 모든 개발자는 이 가이드라인을 준수하여 일관된 코드 품질과 사용자 경험을 유지해야 합니다.

## 목차

1. [HTML 코딩 가이드](#html-코딩-가이드) - 중요도 ★★★★★
   - [기본 원칙](#기본-원칙)
   - [시맨틱 태그 사용 가이드](#시맨틱-태그-사용-가이드)
   - [코드 사용 규칙](#코드-사용-규칙)
   - [코멘트 사용 지침](#코멘트-사용-지침)
2. [CSS/SCSS 코딩 가이드](#cssscss-코딩-가이드) - 중요도 ★★★★★
   - [SCSS 기본 구조](#scss-기본-구조)
   - [Mixin 사용 가이드](#mixin-사용-가이드) - 중요도 ★★★★★
   - [색상 및 폰트 관리](#색상-및-폰트-관리) - 중요도 ★★★★★
3. [컴포넌트 사용 가이드](#컴포넌트-사용-가이드)
   - [탭 컴포넌트](#탭-컴포넌트)
   - [아코디언 컴포넌트](#아코디언-컴포넌트)
   - [입력 필드 컴포넌트](#입력-필드-컴포넌트)
   - [버튼 컴포넌트](#버튼-컴포넌트)
   - [체크박스 컴포넌트](#체크박스-컴포넌트)
   - [아이콘 컴포넌트](#아이콘-컴포넌트)
   - [폼 컴포넌트](#폼-컴포넌트)
   - [페이지네이션 컴포넌트](#페이지네이션-컴포넌트)
   - [라디오 컴포넌트](#라디오-컴포넌트)
   - [셀렉트 컴포넌트](#셀렉트-컴포넌트)
   - [스낵바 컴포넌트](#스낵바-컴포넌트)
   - [스와이퍼 컴포넌트](#스와이퍼-컴포넌트)
   - [테이블 컴포넌트](#테이블-컴포넌트)
   - [툴팁 컴포넌트](#툴팁-컴포넌트)
4. [해당 프로젝트 코드 작성 가이드](#해당-프로젝트-코드-작성-가이드)
   - 작성한 HTML코드는 HTML 파일 전체를 작성하지않고, 프롬프트에 명령한 디자인대로 코딩한 HTML 코드만 작성합니다. (즉, 아래 HTML 코딩 가이드에 <div id="content" role="main"></div> 안에 있는 부분만 작성합니다.)
   - 작성한 SCSS코드는 4중첩까지만 허용합니다.
   - mixin @include rem 함수만 사용 (예 : @include rem(속성, 값); )
   - 모든 색상 변수는 직접 값(예: #000000)을 지정으로 수정합니다.
   - 모든 폰트 스타일은 기본으로 지정하고 나중에 커스텀으로 따로 지정하겠습니다.
   - reset 공통 스타일은 이미 커스텀으로 따로 지정되어있음. (예 : html, body{padding: 0; margin: 0;})
   - 아이콘 공통 스타일은 이미 커스텀으로 따로 지정되어있음.
   - 접근성을 위한 숨김 텍스트도 이미 커스텀으로 지정되어있음.
   - css gap 속성 사용 금지 (margin으로 간격 조정)
   - 컴포넌트 사용 시, 컴포넌트 예시의 HTML 구조대로 구현하세요.
   - 컴포넌트 사용 시, 가져온 디자인과 일치하도록 구현하세요.
   - 변환전 코드의 스타일 구조는 깨지지 않게 수정하세요.

## HTML 코딩 가이드

### 기본 원칙

- **문서 구조**: 모든 HTML 문서는 `<!DOCTYPE html>`로 시작하여 HTML5 문서임을 명시하고, 문자 인코딩은 `<meta charset="UTF-8">`를 사용하여 UTF-8로 설정합니다.

- **head 태그 수정 제한**: head 태그는 커스텀으로 수정할 수 있도록 수정하지 않습니다.

- **body 태그 수정 제한01**: "<div id="content" role="main"><!-- ai가 코딩해줄 부분 --><div>" 안에서만 수정할 수 있습니다.

- **body 태그 수정 제한02**: "<div id="content" role="main"><!-- ai가 코딩해줄 부분 --><div>" 에서 "<!-- ai가 코딩해줄 부분 -->" 바로 아래에 코딩을 해야 합니다.

- **시맨틱 태그 사용**: 의미에 맞는 시맨틱 태그를 사용하여 HTML을 작성합니다.
  ```html
  <!-- 잘못된 예 -->
  <div class="header">...</div>

  <!-- 올바른 예 -->
  <header class="site-header">...</header>
  ```

- **클래스 네이밍**: 모든 마크업 클래스 네이밍은 케밥 케이스(Kebab Case)를 사용합니다. 모든 단어는 하이픈(-)으로 연결합니다.
  ```html
  <!-- 잘못된 예 -->
  <div class="mainContainer">...</div>
  <div class="main_container">...</div>
  <div class="main__container">...</div>

  <!-- 올바른 예 -->
  <div class="main-container">
    <div class="main-container-image">...</div>
    <div class="main-container-content">
      <h2 class="main-container-title">...</h2>
      <p class="main-container-description">...</p>
    </div>
  </div>
  ```

### 시맨틱 태그 사용 가이드

다음 시맨틱 태그를 적절히 활용하세요:

- `<header>`: 페이지 또는 섹션의 헤더. 로고, 제목, 네비게이션 메뉴, 검색 폼 등의 요소를 포함할 수 있습니다.
- `<nav>`: 네비게이션 메뉴. 주요 네비게이션 링크를 포함하는 영역입니다.
- `<main>`: 페이지의 주요 콘텐츠. 페이지당 하나만 사용해야 합니다.
- `<section>`: 콘텐츠의 독립적인 섹션. 주제별로 콘텐츠를 그룹화할 때 사용합니다.
- `<article>`: 독립적으로 배포 가능한 콘텐츠 (뉴스 기사, 블로그 포스트 등). 자체적으로 완결된 콘텐츠를 나타냅니다.
- `<aside>`: 주요 콘텐츠와 간접적으로 관련된 콘텐츠. 사이드바, 관련 링크, 광고 등에 사용합니다.
- `<footer>`: 페이지 또는 섹션의 푸터. 저작권 정보, 연락처, 관련 링크 등을 포함합니다.
- `<figure>` 및 `<figcaption>`: 이미지, 다이어그램 등과 그 설명. 독립적인 콘텐츠 단위로 사용됩니다.
- `<time>`: 날짜와 시간 정보. 기계가 읽을 수 있는 형식으로 시간 정보를 제공합니다.

### 코드 사용 규칙

#### 링크태그 (`<a href="">`)
- `<a href="">` 태그의 href 값은 빈 값으로 둡니다. URL값이 기획서에 있을 경우는 해당 URL을 넣어주고 없을 경우는 빈 값으로 두도록 합니다.
- 과거에는 `href="javascript:void(0)"` 등으로 처리했지만, 링크와 버튼의 구분이 명확한 현재는 이러한 방식을 지양합니다.

#### 헤딩태그 (`<h1>` ~ `<h6>`)
- **계층적 사용**: `<h1>`부터 `<h6>`까지의 헤딩은 계층적으로 사용해야 합니다. `<h1>`은 가장 높은 수준의 제목을 나타내고, `<h2>`은 `<h1>`의 하위 섹션, `<h3>`은 `<h2>`의 하위 섹션처럼 계속 이어지게 설계해야 합니다.
- **유일한 `<h1>`**: 각 페이지에는 하나의 `<h1>` 태그만 사용하는 것이 일반적인 권장사항입니다. 이는 페이지의 주제나 목적을 가장 잘 나타내는 제목입니다.
- **의미적 정확성**: 제목 태그는 오로지 제목을 위해 사용되어야 합니다. 스타일링 목적으로 제목 태그를 사용하지 않아야 하며, 대신 CSS를 사용하여 스타일을 적용해야 합니다.

#### 아이콘 사용 (`<i>`)
아이콘을 컨텐츠의 CSS 배경 이미지가 아닌, 별도의 HTML 마크업 요소로 포함하는 방식은 웹 접근성, 인터랙티브 디자인, 컨텐츠 관리 측면에서 장점을 제공합니다.

#### 리스트일 경우, 순서 태그 사용 (`<ul></ul>, <li></li>`)
- 만약 리스트일 경우, div 태그가 아닌, 별도의 HTML 마크업 <ul>, <li>를 사용한다.
- 예시 리스트 사용
- 반복되는 클래스명 마크업 구조에서 사용
```html
<!-- 리스트 -->
<ul>
  <li>아이템1</li>
  <li>아이템2</li>
  <li>아이템3</li>
</ul>

<!-- 반복되는 아이템 리스트 -->

```html
<ul class="benefits-card">
  <li class="benefit-item">
    <div class="benefit-icon">
      <div class="icon-circle">
        <i class="ico-point ico-normal" aria-hidden="true"></i>
      </div>
    </div>
    <div class="benefit-content">
      <h3 class="benefit-title">4% 포인트 적립</h3>
      <p class="benefit-description">얼리버드/ 1,3부형 적립</p>
    </div>
  </li>

  <li class="benefit-divider"></li>

  <li class="benefit-item">
    <div class="benefit-icon">
      <div class="icon-circle">
        <i class="ico-coupon ico-normal" aria-hidden="true"></i>
      </div>
    </div>
    <div class="benefit-content">
      <h3 class="benefit-title">10만원 쿠폰 증정</h3>
      <p class="benefit-description">가입즉시 발급, 당일사용 가능</p>
    </div>
  </li>

  <li class="benefit-divider"></li>

  <li class="benefit-item">
    <div class="benefit-icon">
      <div class="icon-circle">
        <i class="ico-discount ico-normal" aria-hidden="true"></i>
      </div>
    </div>
    <div class="benefit-content">
      <h3 class="benefit-title">5천원 예약 할인</h3>
      <p class="benefit-description">주중 그린피 상시 할인</p>
    </div>
  </li>
</ul>


```html
<!-- 스크린 리더에 읽히지 않아야 할 경우 -->
<i class="ico-close ico-normal" aria-hidden="true"></i>

<!-- 스크린 리더에 읽혀야 할 경우 -->
<i class="ico-close ico-normal" role="img" aria-label="닫기"></i>

<!-- 버튼 사용 예시 -->
<button type="button" class="btn">
  <i class="ico-search ico-normal" aria-hidden="true"></i>
  <span class="btn-txt">검색</span>
</button>
```

### 코멘트 사용 지침

- **구조 주석**: 큰 섹션의 시작과 끝을 표시하거나, 파일의 주요 부분을 구분하는 데 주석을 사용합니다.
- **일시적 주석**: 향후 수정이 필요하거나 잠시 비활성화된 코드에 대해 주석을 달아 해당 상황을 명확히 합니다.
- **HTML 주석**: HTML 주석은 `<!-- 주석 내용 -->` 형태로 사용합니다. 페이지 레이아웃의 주요 부분이나 복잡한 구조를 설명할 때 유용합니다.
- **HTML 수정 주석**: HTML 수정 주석은 `<!-- 20240228 수정 -->` `<!-- // 20240228 수정 -->` 형태로 시작과 끝을 표시해줍니다.
- **CSS 주석**: CSS 주석은 `/* 주석 내용 */` 형태로 사용합니다. 스타일 규칙의 목적이나 특정 속성의 사용 이유를 설명할 때 사용합니다.
- **CSS 수정 주석**: CSS 수정 주석은 개발자에게 전달할 필요가 없기 때문에 표시하지 않지만, 예외로 표시가 필요할 경우는 `/* 20240228 수정 */` `/* // 20240228 수정 */` HTML 주석과 동일하게 표시합니다.

> 💡 주석 사용은 코드의 의도와 구조를 명확히 하여 다른 개발자들이 코드를 이해하고 유지보수하는 데 큰 도움이 됩니다. 불필요하거나 오해를 불러일으킬 수 있는 주석은 피해야 합니다.

### 접근성을 위한 ARIA 라벨링

접근성 향상을 위해 ARIA 속성을 적절히 사용하세요:

```html
<!-- 버튼 예시 -->
<button type="button" class="menu-button" aria-label="메뉴 열기">
  <img src="menu-icon.svg" alt="">
</button>

<!-- 탭 예시 -->
<div class="component-tab" data-component="tab" data-active="tab2">
  <div class="tab-head">
    <button type="button" class="tab-label" data-tab-value="tab1" role="tab" aria-selected="true" aria-controls="tab-panel-1">TAB 1</button>
    <button type="button" class="tab-label" data-tab-value="tab2" role="tab" aria-selected="false" aria-controls="tab-panel-2">TAB 2</button>
    <button type="button" class="tab-label" data-tab-value="tab3" role="tab" aria-selected="false" aria-controls="tab-panel-3">TAB 3</button>
  </div>
  <div class="tab-body">
    <div class="tab-content" data-tab-value="tab1" role="tabpanel" aria-labelledby="tab-1">
      <div class="content-inner"> Tab content 1 </div>
    </div>
    <div class="tab-content" data-tab-value="tab2"role="tabpanel" aria-labelledby="tab-2" hidden>
      <div class="content-inner"> Tab content 2 </div>
    </div>
    <div class="tab-content" data-tab-value="tab3" role="tabpanel" aria-labelledby="tab-2" hidden>
      <div class="content-inner"> Tab content 3 </div>
    </div>
  </div>
</div>
```

## CSS/SCSS 코딩 가이드

### Mixin 사용 가이드 - 중요도 ★★★★★

- 직접 mixin 함수를 정의하지 말고, `_mixins.scss`에 정의된 함수를 사용합니다.
- 모든 적절한 속성에 @include rem() 믹스인을 적용합니다.

```scss
  // 잘못된 예
  .button {
    margin: 20px; // 수치있는 속성 @include rem() 사용안 한 잘못된 예
    font-size: 16px;
    padding: 10px 20px 15px; // 수치있는 속성 @include rem() 사용안 한 잘못된 예
    box-shadow: 0 4 8 0 rgba(0, 0, 0, 0.25); // 수치있는 속성 @include rem() 사용안 한 잘못된 예
    border: 1px solid #333333;
    @include rem(top, calc(50% - 9)); // calc 계산식 있는 부분은 제외
  }

  // 올바른 예
  .button {
    @include rem(margin, 20); // 이렇게 수치있는 속성 모두 @include rem() 사용
    @include rem(font-size, 16); // 또는 @include f16;
    @include rem(padding, 10 20 15); // 이렇게 수치있는 속성 모두 @include rem() 사용, 여러 값 지정 가능
    @include rem(box-shadow, 0 4 8 0 rgba(0, 0, 0, 0.25)); // 이렇게 수치있는 속성 모두 @include rem() 사용, 여러 값 지정 가능
    @include rem(border, 1px solid #333333); // 수치있는 속성 모두 @include rem() 사용
    top: calc(50%- 9); // calc 계산식 있는 부분은 mixin 사용 하지 않음.
  }

```

### 색상 변수 사용 가이드 - 중요도 ★★★★★

- _variables.scss 파일에서 변수로 정의되지 않은 부분들은 배경 컬러, 폰트 컬러, 모든 속성 컬러, 폰트 크기는 변수를 사용하지 않고 직접 값을 지정합니다.

- background-color는 $bg-XXXXXX, color는 $font-XXXXXX, border는 $line-XXXXXX를 사용합니다.

- 모든 변수는 _variables.scss에서 정의된 변수만 사용합니다. 정의된 변수가 없을 경우 직접 값을 지정합니다.

  ```scss

  // 잘못된 예
  .button {
    background-color: $color-primary-bg;
    color: $color-fff;
    @include rem(border, 1px solid $color-cccccc);
  }

  // variables.scss에서 정의된 변수가 있을 경우, 올바른 예
  .button {
    background-color: $bg-3b82f6;
    color: $font-ffffff;
    @include rem(border, 1px solid $line-cccccc);
  }

  // variables.scss에서 정의된 변수가 없을 경우, 올바른 예
  .button {
    background-color: #3b82f6;
    color: #ffffff;
    border: 1px solid #cccccc;
  }
  ```


### SCSS 기본 구조

- 상위 태그 클래스를 중점으로 SCSS를 작성합니다.
  ```scss
  .notice-page {
    background: #ffffff;

    .notice-header {
      // 헤더 스타일
    }

    .notice-content {
      // 콘텐츠 스타일
    }
  }
  ```

- **상위 태그 클래스 중심 작성(필수)**: 모든 SCSS 코드는 반드시 상위 태그 클래스를 중심으로 작성해야 합니다. 개별 요소의 스타일을 독립적으로 정의하지 말고, 항상 상위 클래스 내에 중첩하여 작성하세요. 이는 코드의 가독성과 유지보수성을 높이는 핵심 원칙입니다.

  ```scss
  /* 잘못된 예 - 개별 스타일 정의 */
  .notice-header {
    @include rem(padding, 20);
  }

  .notice-content {
    @include rem(margin-top ,10);
  }

  /* 올바른 예 - 상위 클래스 중심 구조 */
  .notice-page {
    background: #ffffff;

    .notice-header {
      @include rem(padding, 20);
    }

    .notice-content {
      @include rem(margin-top, 10);
    }

    .notice-footer {
      @include rem(margin-top, 20);
    }
  }
  ```

- **컴포넌트 내부 요소 스타일링**: 컴포넌트 클래스 내부의 요소들도 반드시 상위 컴포넌트 선택자 내에 중첩하여 정의해야 합니다.

  ```scss
  /* 잘못된 예 */
  .component-input {
    display: flex;
  }

  .input-label {
    color: #333333;
  }

  .input-field {
    @include rem(border, 1px solid #dddddd);
  }

  /* 올바른 예 */
  .component-input {
    display: flex;

    .input-label {
      color: #333333;
    }

    .input-field {
      @include rem(border, 1px solid #dddddd);

      .input-control {
        @include rem(padding, 10);
      }
    }
  }
  ```

- **페이지별 스타일 구조화**: 각 페이지의 스타일은 최상위 페이지 클래스 내에 모든 하위 요소를 중첩하여 정의합니다. 이는 스타일 충돌을 방지하고 페이지별 스타일 관리를 용이하게 합니다.

  ```scss
  /* 회원가입 페이지 예시 */
  .signup-page {
    background-color: #f6f6f6;

    .signup-header {
      @include rem(padding, 20);

      .header-title {
        @include f24(600);
        line-height: 150%;
      }
    }

    .signup-form {
      @include rem(margin-top, 20);

      .form-section {
        @include rem(margin-bottom, 30);

        .section-title {
          @include rem(margin-bottom, 10);
        }

        .component-input {
          @include rem(margin-bottom, 15);
        }
      }
    }

    .signup-footer {
      @include rem(padding, 20 0);
    }
  }
  ```

### 중첩 코드 작성 가이드

#### 중첩 자세히 보기

CSS를 작성할 때 중첩의 정도는 주로 특정 선택자에 스타일을 적용하는 데 필요한 명확성과 코드의 유지보수성 사이의 균형을 고려하여 결정됩니다. 일반적으로, CSS에서의 중첩은 가능한 한 최소화하는 것이 좋습니다. 깊은 중첩은 CSS 코드의 복잡성을 증가시키고, 성능 저하를 일으킬 수 있으며, 유지보수를 어렵게 만듭니다.

##### 적당한 중첩의 정도

2~3단계 중첩은 대부분의 경우에 적당하다고 볼 수 있습니다. 이 정도의 중첩은 코드의 가독성을 유지하면서도 필요한 선택자의 명확성을 제공할 수 있습니다.
제한은 4단계 중첩까지만 허용합니다.

##### 깊은 중첩을 피하는 방법

- **클래스 기반 선택자 사용**: 가능한 한 태그나 ID 선택자 대신 클래스 선택자를 사용하고, 구체적인 클래스 이름을 통해 스타일을 적용합니다.
- **Sass, Less와 같은 CSS 전처리기의 중첩 기능 적절히 활용**: CSS 전처리기를 사용할 때는 중첩 기능을 적절히 활용하되, 깊은 중첩이 발생하지 않도록 주의합니다. 전처리기의 중첩 기능을 사용할 때도 3단계를 넘지 않도록 하는 것이 좋습니다.
- **컴파일된 CSS 확인**: sass로 코드 작성시 css로 변환 됐을때 5중첩 이상 되지 않도록 `/dist/assets/styles/style.css`에서 확인해보는 것도 좋은 방법입니다.
- **클래스 활용**: 클래스의 중첩을 피하기 위하여 컨텐츠유형, 컴포넌트유형 클래스를 잘 활용 하길 바랍니다.

#### 중첩 코드 최소화 예제

##### 예제 코드 1

**HTML**
```html
<table class="component-table-col01">
  <thead>
    <tr>
      <th>번호</th>
      <th>이름</th>
      <th>직업</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>홍길동</td>
      <td>도적</td>
    </tr>
    <tr>
      <td><div class="num">2</div></td>
      <td><div class="name">이순신</div></td>
      <td><div class="work">장군</div></td>
    </tr>
  </tbody>
</table>
```

**CSS**
```css
/* 잘못된 예 */
.component-table-col01 thead tr th { X }
.component-table-col01 thead tr td .name { X }

/* 올바른 예 */
.component-table-col01 { O }
.component-table-col01 th, .component-table-col01 td { O }
.component-table-col01 td .name { O }
.component-table-col01 thead { O }
.component-table-col01 tbody tr:nth-child(even) { O }
```

**SCSS**
```scss
/* 잘못된 예 */
.component-table-col01 {
	thead {
		tr {
			th {}
			td {
				.name {}
			}
		}
	}
}

/* 올바른 예 */
.component-table-col01 {
  th {
  }
  td {
	  .name {}
  }
  thead {
  }
  tbody tr:nth-child(even) {
  }
}
```

##### 예제 코드 2

```scss
/* 중첩하지 않고 */
.table > thead > tr > th { … }
.table > thead > tr > td { … }

/* 중첩 포함 */
.table > thead {
  th { … }
  td { … }
}

/* 클래스를 활용하는 경우 */
.component-table {
	.table-thead {}
	.table-tr {}
	.table-td {}
}
```

##### 예제 코드 3

**HTML**
```html
<div class="component-accordion">
  <div class="accordion-item">
    <button class="accordion-button" type="button">Section 1</button>
    <div class="accordion-content">
      <p>This is the content of Section 1.</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-button" type="button">Section 2</button>
    <div class="accordion-content">
      <p>This is the content of Section 2.</p>
    </div>
  </div>
</div>
```

**CSS**
```css
.component-accordion .accordion-button {}
.component-accordion .accordion-button:after {}
.component-accordion .accordion-button.active:after {}
.component-accordion .accordion-content {}
```

**SCSS**
```scss
.component-accordion {
  .accordion-item {
    .accordion-button {
      &:after {}
      &.active:after {}
    }
    .accordion-content {}
  }
}
```

##### 예제 코드 4

**HTML**
```html
<div class="component-board">
  <div class="board-frame">
    <div class="board-container">
      <div class="board-header">
        <div class="board-info">
          <p>총 <span class="board-count">304</span>건, <span class="board-current">1</span>/<span class="board-total">31</span>페이지</p>
        </div>
        <div class="board-search">
          <div class="select-wrap">
            <select>
              <option value="title" selected>제목</option>
              <option value="content">내용</option>
              <option value="name">작성자</option>
            </select>
          </div>
          <div class="component-input">
            <div class="input-box">
              <input type="text" class="input" placeholder="검색어를 입력해주세요.">
              <button type="button" class="btn-reset">
                  <span class="hide-txt">리셋</span>
              </button>
              <button type="button" class="btn-search">
                <span class="hide-txt">검색</span>
              </button>
            </div>
            <p class="input-desc"></p>
          </div>
        </div>
      </div>
      <div class="board-content">
        <table class="component-table">
          <caption>공지사항 게시물: 번호, 제목, 등록일, 등록자, 조회수</caption>
          <colgroup>
            <col style="width: 8%">
            <col>
            <col style="width: 15%">
            <col style="width: 15%">
            <col style="width: 10%">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">등록일</th>
              <th scope="col">등록자</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>
                <a href="#">
                  공지사항 게시물 제목입니다.
                </a>
              </td>
              <td>2024-02-14</td>
              <td>등록자이름</td>
              <td>1555</td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
```

**SCSS**
```scss
/* 수정 전 코드 */
.component-board {
  .board-frame {
    .board-container {
      .board-header {
        .board-info {
        }
        .board-search {
          .select-wrap {
            select {
            }
          }
          .input-box {
            .input {
            }
            .btn-reset {
            }
            .btn-search {
            }
          }
        }
      }
      .board-content {
        .component-table {
          th {}
          th,
          td {
            > a {
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}

/* 수정 후 코드 */
.component-board {
	.board-frame {}
	.board-container {}
	.board-header {}
	.board-info {}
	.board-search {
		.select-wrap {
	      select {
	      }
    }
    .input-box {
      .input {
      }
      .btn-reset {
      }
      .btn-search {
      }
    }
	}
	.board-content {

		/* 수정 전 소스 */
		.component-table {
      td {
        > a {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    /* 수정 후 소스 */
    .component-table {
      .txt-link {
		    &:hover {
	        text-decoration: underline;
	      }
	    }
    }

	}
}
```

> 💡 CSS 셀렉터를 사용할 때는 가능한 한 간결하게 유지하고, 과도한 중첩을 피하는 것이 좋습니다. 이는 스타일 시트의 성능을 최적화하고, 코드의 유지보수와 확장성을 개선하는 데 도움이 됩니다.

### 상태에 따른 다중 클래스 사용
상태 클래스 약속어 (css스타일 + 스크립트 호출 + 개발 호출)
/* 버튼, 체크박스, 탭등 */
.on {}
.off {}

/* 모달, 툴팁, 드롭다운, 아코디언등 */
.show {}
.hide {}

/* 고정 영역 */
.fixed {} /* position: fixed */
.sticky {} /* position: sticky */

/* 스텝등 */
.current {} /* 현재위치 */
.complete {} /* 완료된 항목 */

/* 폼 그룹 */
.form-disabled {} /* 폼 요소가 비활성화된 상태일 때의 스타일을 적용합니다. */
.form-readonly {} /* 읽기 전용 필드에 스타일을 적용합니다. */
.form-valid {} /* 입력 값이 검증 조건을 만족했을 때의 스타일을 적용합니다. */
.form-invalid {} /* 입력 값이 검증 조건을 만족하지 않았을 때의 스타일을 적용합니다. */
.form-required {} /* 필수 입력 필드에 스타일을 적용합니다. */

/* input 그룹 */
.input-disabled {} /* 폼 요소가 비활성화된 상태일 때의 스타일을 적용합니다. */
.input-readonly {} /* 읽기 전용 필드에 스타일을 적용합니다. */
.input-valid {} /* 입력 값이 검증 조건을 만족했을 때의 스타일을 적용합니다. */
.input-invalid {} /* 입력 값이 검증 조건을 만족하지 않았을 때의 스타일을 적용합니다. */
.input-required {} /* 필수 입력 필드에 스타일을 적용합니다. */

/* 상태 클래스명 사용하지 않아야 할 단어 */
expand(확장하다), reduction(축소하다), fold(펼치다), unfold(접다) → 사용하지 않습니다.
상태 클래스명 사용하지 않아야 할 단어들은 on, off, show, hide로 대체 합니다.

```html 예시
<!-- 완료된 버튼 -->
<button type="button" class="btn-status completed">
  <span class="btn-txt">작성완료</span>
</button>

<!-- 완료된 스탬프 -->
<div class="stamp-item completed">
  <div class="stamp-circle">
    <p class="stamp-text">
      예약 완료
    </p>
  </div>
  <div class="stamp-date">01.22</div>
</div>

<!-- 비활성화된 버튼 -->
<button type="button" class="btn-status disabled">
  <span class="btn-txt">작성보류</span>
</button>

<!-- 비활성화된 스탬프 -->
<div class="stamp-item disabled">
  <div class="stamp-circle">
    <p class="stamp-text">
      예약 보류
    </p>
  </div>
  <div class="stamp-date">01.22</div>
</div>

<!-- 고정 영역 -->
<div class="sample-area fixed">
  고정해야할 영역이 필요할 경우 fixed 다중 클래스 추가
</div>

<!-- form 조건에 만족할 경우, 성공인 input-valid 다중 클래스 추가 -->
<div class="component-input input-valid">
  <div class="input-field">
    <label for="temp_input_0001" class="input-label">
      <span class="label-txt">
        비밀번호 재입력
        <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      </span>
    </label>
    <div class="input-txt">
      <input type="password" id="temp_input_valid_0001" placeholder="비밀번호 재입력" />
    </div>
  </div>
  <div class="input-info">비밀번호가 일치합니다.</div>
</div>

<!-- form 조건에 만족하지 않을 경우, 실패인 input-invalid 다중 클래스 추가 -->
<div class="component-input input-invalid">
  <div class="input-field">
    <label for="temp_input_0001" class="input-label">
      <span class="label-txt">
        비밀번호 재입력
        <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      </span>
    </label>
    <div class="input-txt">
      <input type="password" id="temp_input_valid_0001" placeholder="비밀번호 재입력" />
    </div>
  </div>
  <div class="input-info">비밀번호가 일치하지 않습니다.</div>
</div>
```

## 컴포넌트 사용 가이드

### 컴포넌트 사용 원칙

- **필수 사용**: 프로젝트 내 모든 UI 요소는 가능한 한 이 가이드에 정의된 컴포넌트를 사용하여 구현해야 합니다. 새로운 UI 요소를 만들기 전에 항상 기존 컴포넌트를 먼저 검토하세요.

- **일관성 유지**: 동일한 기능을 하는 UI 요소는 항상 같은 컴포넌트를 사용하여 일관된 사용자 경험을 제공해야 합니다.

- **디자인 상황에 맞는 컴포넌트 선택**: 각 디자인 요구사항에 가장 적합한 컴포넌트를 선택하세요. 예를 들어, 입력 필드가 필요한 경우 일반 `<input>` 태그 대신 반드시 입력 필드 컴포넌트를 사용해야 합니다.

- **컴포넌트 클래스 명명 규칙**: 모든 컴포넌트는 `component-` 접두사로 시작하는 클래스를 사용합니다. 예: `component-input`, `component-button`, `component-tab`.

- **컴포넌트 확장**: 기존 컴포넌트를 확장할 때는 기본 구조와 클래스를 유지하면서 필요한 부분만 수정하세요.

```html
<!-- 잘못된 예: 직접 만든 입력 필드 -->
<div class="input-field">
  <label for="name">이름</label>
  <input type="text" id="name">
</div>

<!-- 올바른 예: 컴포넌트 사용 -->
<div class="component-input">
  <label for="name" class="input-label">
    <span class="label-txt">
      <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      Label
    </span>
    <span class="label-util">텍스트,버튼등등 위치</span>
    <div class="input-sub-txt">서브 텍스트</div>
  </label>
  <div class="input-field">
    <input type="text" id="name" placeholder="input text">
  </div>
  <div class="input-info">유틸리티 Info 영역</div>
</div>
```

### 탭 컴포넌트

탭 컴포넌트는 `component-tab` 클래스와 구조를 따라야 합니다:

```html
<!-- Tab : default -->
<div class="component-tab" data-active="tab2">
  <div class="tab-head">
    <button type="button" class="tab-label" data-tab-value="tab1">TAB 1</button>
    <button type="button" class="tab-label" data-tab-value="tab2">TAB 2</button>
    <button type="button" class="tab-label" data-tab-value="tab3">TAB 3</button>
  </div>
  <div class="tab-body">
    <div class="tab-content" data-tab-value="tab1">
      <div class="content-inner"> Tab content 1 </div>
    </div>
    <div class="tab-content" data-tab-value="tab2">
      <div class="content-inner"> Tab content 2 </div>
    </div>
    <div class="tab-content" data-tab-value="tab3">
      <div class="content-inner"> Tab content 3 </div>
    </div>
  </div>
</div>
<!-- // Tab : default -->
```

#### 탭 컴포넌트 사용 가이드

- 각각의 탭과 콘텐츠별로 `data-tab-value` 속성을 부여합니다.
- 디폴트로 활성화할 탭이 있다면 `data-active` 속성을 사용합니다. 기본값은 첫 번째 탭입니다.
- 설계 단계의 특별한 UX 요청이나 개발 환경에 따른 제약으로 개발 요청 사항이 없다면 **테스트 완료된 코드**를 **복사 붙여 넣기**를 **기본**으로 합니다.

#### 탭 컴포넌트 구조

- **컴포넌트 클래스**: `.component-tab`
- **컴포넌트 자식 클래스**: `.tab-head`, `.tab-body`, `.tab-label`, `.tab-content`

#### 중첩 탭 (Tab in Tab)

탭 안에 탭을 중첩하여 사용할 수 있습니다:

```html
<!-- S: 상위탭 -->
<div class="component-tab" data-active="tab1">
  <div class="tab-head">
    <button type="button" class="tab-label" data-tab-value="tab1">Tab1</button>
    <button type="button" class="tab-label" data-tab-value="tab2">Tab2</button>
    <button type="button" class="tab-label" data-tab-value="tab3">Tab3</button>
  </div>
  <div class="tab-body">
    <!-- S: [tab1] 하위탭 -->
    <div class="component-tab tab-content" data-tab-value="tab1" data-active="tab1-1">
      <div class="tab-head">
        <button type="button" class="tab-label" data-tab-value="tab1-1">Tab1-1</button>
        <button type="button" class="tab-label" data-tab-value="tab1-2">Tab1-2</button>
        <button type="button" class="tab-label" data-tab-value="tab1-3">Tab1-3</button>
      </div>
      <div class="tab-body">
        <div class="tab-content" data-tab-value="tab1-1">
          <div class="content-inner"> Tab content 1 - 1</div>
        </div>
        <div class="tab-content" data-tab-value="tab1-2">
          <div class="content-inner"> Tab content 1 - 2</div>
        </div>
        <div class="tab-content" data-tab-value="tab1-3">
          <div class="content-inner"> Tab content 1 - 3</div>
        </div>
      </div>
    </div>
    <!-- E: [tab1] 하위탭 -->

    <!-- S: [tab2] 하위탭 -->
    <div class="component-tab tab-content" data-tab-value="tab2">
      <div class="tab-head">
        <button type="button" class="tab-label" data-tab-value="tab2-1">Tab2-1</button>
        <button type="button" class="tab-label" data-tab-value="tab2-2">Tab2-2</button>
        <button type="button" class="tab-label" data-tab-value="tab2-3">Tab2-3</button>
      </div>
      <div class="tab-body">
        <div class="tab-content" data-tab-value="tab2-1">
          <div class="content-inner"> Tab content 2 - 1</div>
        </div>
        <div class="tab-content" data-tab-value="tab2-2">
          <div class="content-inner"> Tab content 2 - 1</div>
        </div>
        <div class="tab-content" data-tab-value="tab2-3">
          <div class="content-inner"> Tab content 2 - 1</div>
        </div>
      </div>
    </div>
    <!-- E: [tab2] 하위탭 -->

    <!-- S: [tab3] 하위탭 -->
    <div class="component-tab tab-content" data-tab-value="tab3">
      <div class="tab-head">
        <button type="button" class="tab-label" data-tab-value="tab3-1">Tab3-1</button>
        <button type="button" class="tab-label" data-tab-value="tab3-2">Tab3-2</button>
        <button type="button" class="tab-label" data-tab-value="tab3-3">Tab3-3</button>
      </div>
      <div class="tab-body">
        <div class="tab-content" data-tab-value="tab3-1">
          <div class="content-inner"> Tab content 3 - 1</div>
        </div>
        <div class="tab-content" data-tab-value="tab3-2">
          <div class="content-inner"> Tab content 3 - 2</div>
        </div>
        <div class="tab-content" data-tab-value="tab3-3">
          <div class="content-inner"> Tab content 3 - 3</div>
        </div>
      </div>
    </div>
    <!-- E: [tab3] 하위탭 -->
  </div>
</div>
<!-- E: 상위탭 -->
```

SCSS 스타일링:

```scss
.component-tab {
  // 탭 컴포넌트 스타일

  .tab-head {
    // 탭 헤더 스타일
  }

  .tab-body {
    // 탭 바디 스타일
  }

  .tab-label {
    // 탭 라벨 스타일

    &.is-active {
      // 활성화된 탭 라벨 스타일
    }
  }

  .tab-content {
    // 탭 콘텐츠 스타일

    .content-inner {
      // 콘텐츠 내부 스타일
    }
  }
}
```

### 아코디언 컴포넌트

아코디언 컴포넌트는 `component-accordion` 클래스와 구조를 따라야 합니다:

```html
<!-- 여러 아이템 동시 활성화 가능한 아코디언 -->
<div class="component-accordion">
  <div
    class="accordion-item component-collapse"
    data-state="close"
    data-init="false"
  >
    <button type="button" class="collapse-tit">
      Q. What is HTML?
    </button>
    <div class="collapse-content">
      <div>
        HTML stands for Hyper Text Markup Language. It is used
        to create the structure of web pages.
      </div>
    </div>
  </div>
  <div
    class="accordion-item component-collapse"
    data-state="close"
    data-init="false"
  >
    <button type="button" class="collapse-tit">
      Q. What is CSS?
    </button>
    <div class="collapse-content">
      CSS stands for Cascading Style Sheets. It is used to style web pages.
    </div>
  </div>
</div>
```

#### 아코디언 컴포넌트 사용 가이드

- 설계 단계의 특별한 UX 요청이나 개발 환경에 따른 제약으로 개발 요청 사항이 없다면 **테스트 완료된 코드**를 **복사 붙여 넣기**를 **기본**으로 합니다.
- `data-state="close"` 속성은 아코디언 아이템의 초기 상태를 닫힌 상태로 지정합니다.
- `data-init="false"` 속성은 아코디언 아이템의 초기화 상태를 나타냅니다.

#### 아코디언 컴포넌트 구조

- **컴포넌트 클래스**: `.component-accordion`
- **컴포넌트 자식 클래스**: `.accordion-item`, `.collapse-tit`, `.collapse-content`

#### 단일 아이템 활성화 아코디언

한 번에 하나의 아이템만 활성화할 수 있는 아코디언:

```html
<!-- 한 번에 하나의 아이템만 활성화 가능한 아코디언 -->
<div
  class="component-accordion"
  data-props-type="single"
  data-props-index="0"
>
  <div
    class="accordion-item"
    data-init="true"
    data-state="open"
  >
    <button type="button" class="collapse-tit">
      Q. What is HTML?
    </button>
    <div class="collapse-content">
      HTML stands for Hyper Text Markup Language. It is used
      to create the structure of web pages.
    </div>
  </div>
  <div
    class="accordion-item"
    data-init="false"
  >
    <button type="button" class="collapse-tit">
      Q. What is CSS?
    </button>
    <div class="collapse-content">
      CSS stands for Cascading Style Sheets. It is used to style web pages.
    </div>
  </div>
</div>
```

- `data-props-type="single"` - 한 번에 하나의 아이템만 활성화 가능
- `data-props-index="0"` - 초기에 활성화할 아이템의 인덱스 (0부터 시작)
- `data-init="true"` - 초기화된 아이템
- `data-state="open"` - 열린 상태의 아이템

SCSS 스타일링:

```scss
.component-accordion {
  // 아코디언 컴포넌트 스타일

  .accordion-item {
    // 아코디언 아이템 스타일

    &[data-state="open"] {
      // 열린 상태 스타일
    }
  }

  .collapse-tit {
    // 아코디언 제목 버튼 스타일
  }

  .collapse-content {
    // 아코디언 콘텐츠 스타일
  }
}
```

### 입력 필드 컴포넌트

입력 필드 컴포넌트는 `component-input` 클래스와 구조를 따라야 합니다:

```html
<div class="component-input">
  <label for="temp_input_0001" class="input-label">
    <span class="label-txt">
      <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      Label
    </span>
    <span class="label-util">텍스트,버튼등등 위치</span>
    <div class="input-sub-txt">서브 텍스트</div>
  </label>
  <div class="input-field">
    <input type="text" id="temp_input_0001" placeholder="input text">
  </div>
  <div class="input-info">유틸리티 Info 영역</div>
</div>
```

#### 입력 필드 컴포넌트 사용 가이드

- 설계 단계의 특별한 UX 요청이나 개발 환경에 따른 제약으로 개발 요청 사항이 없다면 **테스트 완료된 코드**를 **복사 붙여 넣기**를 **기본**으로 합니다.
- 필수 입력 필드의 경우 `<i class="ico-required-mark" role="img" aria-label="필수">*</i>` 마크업을 사용합니다.
- 입력 필드의 `id` 속성은 고유해야 하며, `label`의 `for` 속성과 일치해야 합니다.

#### 입력 필드 컴포넌트 구조

- **컴포넌트 클래스**: `.component-input`
- **컴포넌트 공통 자식 클래스**:
  - `.input-label` - 라벨 영역
  - `.input-field` - 입력 필드 영역
  - `.input-info` - 정보 영역
  - `.input-sub-txt` - 서브 텍스트 영역

#### 버튼이 포함된 입력 필드

버튼이 포함된 입력 필드는 다음과 같은 구조를 가집니다:

```html
<div class="component-input">
  <label for="temp_input_btn_0001" class="input-label">
    <span class="label-txt">Label</span>
    <span class="label-util">텍스트,버튼등등 위치</span>
  </label>
  <div class="input-field">
    <input type="text" id="temp_input_btn_0001" placeholder="버튼">
    <button type="button" class="input-field-btn search">
      <span class="hide-txt">검색</span>
      <i class="ico-search ico-normal" aria-hidden="true"></i>
    </button>
    <button type="button" class="input-field-btn calendar">
      <span class="hide-txt">캘린더</span>
      <i class="ico-calendar ico-normal" aria-hidden="true"></i>
    </button>
    <button type="button" class="input-field-btn clear">
      <span class="hide-txt">내용 지우기</span>
      <i class="ico-clear ico-normal" aria-hidden="true"></i>
    </button>
    <button type="button" class="input-field-btn password-state">
      <span class="hide-txt hide">비밀번호 숨기기</span>
      <span class="hide-txt show">비밀번호 표시</span>
      <i class="ico-password-state ico-normal" aria-hidden="true"></i>
    </button>
  </div>
  <div class="input-info">유틸리티 Info 영역</div>
</div>
```

- **버튼 공통 클래스**: `.input-field-btn`
- **버튼 유형 클래스**:
  - `.search` - 검색 버튼
  - `.calendar` - 캘린더 버튼
  - `.clear` - 내용 지우기 버튼
  - `.password-state` - 비밀번호 상태 버튼

#### 아이콘이 포함된 입력 필드

아이콘이 포함된 입력 필드 예시:

```html
<div class="component-input">
  <label for="temp_input_ico_0001" class="input-label">
    <span class="label-txt">Label</span>
  </label>
  <div class="input-field">
    <i class="input-field-ico ico-search ico-normal" aria-hidden="true"></i>
    <input type="text" id="temp_input_ico_0001" placeholder="아이콘">
  </div>
</div>
```

- **아이콘 공통 클래스**: `.input-field-ico`

#### 상태별 입력 필드

입력 필드는 다양한 상태를 가질 수 있습니다:

```html
<!-- 비활성화 상태 -->
<div class="component-input input-disabled">
  <label for="temp_input_disabled_0001" class="input-label">
    <span class="label-txt">Label</span>
  </label>
  <div class="input-field">
    <input type="text" id="temp_input_disabled_0001" placeholder="비활성화" disabled>
  </div>
</div>

<!-- 유효성 검사 상태 -->
<div class="component-input input-valid">
  <label for="temp_input_valid_0001" class="input-label">
    <span class="label-txt">Label</span>
  </label>
  <div class="input-field">
    <input type="text" id="temp_input_valid_0001" placeholder="유효성 검사">
  </div>
  <div class="input-info">유효성 검사 메시지</div>
</div>
```

- **상태 클래스**:
  - `.input-disabled` - 비활성화 상태
  - `.input-valid` - 유효한 입력 상태
  - `.input-invalid` - 유효하지 않은 입력 상태

SCSS 스타일링:

```scss
.component-input {
  // 입력 필드 컴포넌트 스타일

  .input-label {
    // 라벨 스타일

    .label-txt {
      // 라벨 텍스트 스타일
    }

    .label-util {
      // 라벨 유틸리티 영역 스타일
    }

    .input-sub-txt {
      // 서브 텍스트 스타일
    }
  }

  .input-field {
    // 입력 필드 영역 스타일

    input {
      // 입력 요소 스타일
    }

    .input-field-btn {
      // 버튼 스타일

      &.search {
        // 검색 버튼 스타일
      }

      &.calendar {
        // 캘린더 버튼 스타일
      }

      &.clear {
        // 내용 지우기 버튼 스타일
      }

      &.password-state {
        // 비밀번호 상태 버튼 스타일
      }
    }

    .input-field-ico {
      // 아이콘 스타일
    }
  }

  .input-info {
    // 정보 영역 스타일
  }

  // 상태별 스타일
  &.input-disabled {
    // 비활성화 상태 스타일
  }

  &.input-valid {
    // 유효한 입력 상태 스타일
  }

  &.input-invalid {
    // 유효하지 않은 입력 상태 스타일
  }
}
```

### 버튼 컴포넌트

버튼 컴포넌트는 `btn` 클래스와 구조를 따라야 합니다:

```html
<!-- 텍스트 버튼 -->
<button type="button" class="btn">
  <span class="btn-txt">텍스트버튼</span>
</button>

<!-- 버튼 + 아이콘 -->
<button type="button" class="btn">
  <i class="ico-search ico-normal" aria-hidden="true"></i>
  <span class="btn-txt">버튼 + 아이콘</span>
  <i class="ico-spinner ico-normal" aria-hidden="true"></i>
</button>

<!-- 아이콘 버튼 -->
<button type="button" class="btn">
  <i class="ico-search ico-normal" aria-hidden="true"></i>
  <span class="hide-txt">아이콘버튼</span>
</button>
```

#### 버튼 컴포넌트 사용 가이드

- 설계 단계의 특별한 UX 요청이나 개발 환경에 따른 제약으로 개발 요청 사항이 없다면 **테스트 완료된 코드**를 **복사 붙여 넣기**를 **기본**으로 합니다.
- 버튼 요소는 기본적으로 `<button type="button">` 태그를 사용합니다.
- 아이콘만 있는 버튼의 경우 스크린 리더에 읽히지 않도록 `<span class="hide-txt">아이콘버튼</span>`을 추가합니다.
- 아이콘은 `aria-hidden="true"` 속성을 추가하여 스크린 리더가 읽지 않도록 합니다.

#### 버튼 컴포넌트 구조

- **기본 클래스**: `.btn`
- **텍스트 클래스**: `.btn-txt`
- **숨김 텍스트 클래스**: `.hide-txt`

#### 링크 버튼

링크 형태의 버튼은 `<a>` 태그를 사용하며 동일한 클래스 구조를 가집니다:

```html
<a href="" class="btn">
  <i class="ico-search ico-normal" aria-hidden="true"></i>
  <span class="btn-txt">링크버튼</span>
  <i class="ico-refresh ico-normal" aria-hidden="true"></i>
</a>
```

#### 커스텀 버튼

div 요소를 사용한 커스텀 버튼은 접근성을 위해 추가 속성과 이벤트 핸들러를 포함해야 합니다:

```html
<div class="btn" role="button" tabindex="0" onclick="handleClick()" onkeydown="handleKeyDown(event)" onkeyup="handleKeyUp(event)">
  <i class="ico-search ico-normal" aria-hidden="true"></i>
  <span class="btn-txt">커스텀버튼</span>
  <i class="ico-close ico-normal" aria-hidden="true"></i>
</div>

<script>
  function handleClick() {
    alert('버튼 클릭됨');
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Enter 키와 Space 키가 눌렸을 때 페이지가 스크롤되지 않도록 방지
      handleClick();
    }
  }

  function handleKeyUp(event) {
    if (event.key === ' ') {
      event.preventDefault(); // Space 키가 눌렸을 때 페이지가 스크롤되지 않도록 방지
    }
  }
</script>
```

- `role="button"` - 요소의 역할을 명시적으로 지정
- `tabindex="0"` - 키보드 포커스를 받을 수 있도록 설정
- 키보드 이벤트 핸들러 - Enter와 Space 키로 버튼 활성화 가능

#### 버튼 그룹

여러 버튼을 그룹화할 때는 `component-btns` 클래스와 구조를 사용합니다:

```html
<!-- 버튼 가운데 정렬 -->
<div class="component-btns">
  <div class="btns-row">
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
  </div>
</div>

<!-- 버튼 왼쪽 정렬 -->
<div class="component-btns">
  <div class="btns-row align-left">
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
  </div>
</div>

<!-- 버튼 오른쪽 정렬 -->
<div class="component-btns">
  <div class="btns-row align-right">
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
    <button type="button" class="btn">
      <span class="btn-txt">button</span>
    </button>
  </div>
</div>
```

- **버튼 그룹 클래스**: `.component-btns`
- **버튼 행 클래스**: `.btns-row`
- **정렬 클래스**:
  - `.align-left` - 왼쪽 정렬
  - `.align-right` - 오른쪽 정렬
  - 기본값은 가운데 정렬

#### 2단 레이아웃 버튼 그룹

좌우로 나누어진 버튼 그룹을 구성할 때는 다음과 같은 구조를 사용합니다:

```html
<!-- 2단 레이아웃 버튼 좌우 정렬 -->
<div class="component-btns">
  <div class="btns-row two-col">
    <div class="btns-col-1">
      <button type="button" class="btn">
        <span class="btn-txt">확인</span>
      </button>
      <button type="button" class="btn">
        <span class="btn-txt">취소</span>
      </button>
    </div>
    <div class="btns-col-2 align-right">
      <button type="button" class="btn">
        <span class="btn-txt">저장</span>
      </button>
    </div>
  </div>
</div>
```

- **2단 레이아웃 클래스**: `.two-col`
- **컬럼 클래스**: `.btns-col-1`, `.btns-col-2`

SCSS 스타일링:

```scss
.btn {
  // 버튼 기본 스타일

  .btn-txt {
    // 버튼 텍스트 스타일
  }

  .hide-txt {
    // 숨김 텍스트 스타일 (접근성을 위한 텍스트)
  }

  i {
    // 아이콘 스타일
  }
}

.component-btns {
  // 버튼 그룹 컨테이너 스타일

  .btns-row {
    // 버튼 행 스타일

    &.align-left {
      // 왼쪽 정렬 스타일
    }

    &.align-right {
      // 오른쪽 정렬 스타일
    }

    &.two-col {
      // 2단 레이아웃 스타일

      .btns-col-1 {
        // 첫 번째 컬럼 스타일
      }

      .btns-col-2 {
        // 두 번째 컬럼 스타일
      }
    }
  }
}
```

### 체크박스 컴포넌트

체크박스 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 입력 요소입니다. 각 체크박스는 그룹 내에서 고유한 값을 갖고 있으며, 사용자가 체크박스를 선택하면 해당 옵션이 활성화됩니다.

#### 기본 체크박스

기본 체크박스는 다음과 같은 구조를 가집니다:

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="checkbox_id" name="checkbox_group_name">
  </label>
</div>
```

#### 체크박스 유형

체크박스 컴포넌트는 다양한 상태와 유형을 지원합니다:

##### 기본 체크박스

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="temp_checkbox_0001" name="temp_checkbox_0001">
  </label>
</div>
```

##### 선택된 체크박스

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="temp_checkbox_0002" name="temp_checkbox_0001" checked>
  </label>
</div>
```

##### 비활성화된 체크박스

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="temp_checkbox_0003" name="temp_checkbox_0001" disabled>
  </label>
</div>
```

##### 선택되고 비활성화된 체크박스

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="temp_checkbox_0101" name="temp_checkbox_0100" checked disabled>
  </label>
</div>
```

##### 텍스트가 있는 체크박스

```html
<div class="component-checkbox">
  <label class="checkbox-inner">
    <input type="checkbox" id="temp_checkbox_0201" name="temp_checkbox_0200">
    <span class="checkbox-item">
      <span class="checkbox-txt">Checkbox default</span>
    </span>
  </label>
</div>
```

#### 클래스 구조

체크박스 컴포넌트에서 사용되는 주요 클래스는 다음과 같습니다:

1. **기본 클래스**
   - `component-checkbox`: 체크박스 컴포넌트의 기본 클래스

2. **내부 요소 클래스**
   - `checkbox-inner`: 체크박스와 라벨을 감싸는 컨테이너
   - `checkbox-item`: 체크박스와 텍스트를 함께 그룹화하는 컨테이너
   - `checkbox-txt`: 체크박스 텍스트

3. **상태 관련 속성**
   - `checked`: 선택된 상태
   - `disabled`: 비활성화된 상태

#### 접근성 가이드

체크박스 컴포넌트는 다음과 같은 접근성 고려사항을 포함합니다:

1. **시맨틱 마크업**
   - 각 체크박스에는 고유한 `id` 속성을 제공합니다.
   - 같은 그룹의 체크박스는 동일한 `name` 속성을 공유합니다.

2. **키보드 접근성**
   - 체크박스는 기본적으로 키보드로 접근 가능합니다.
   - 포커스 상태는 `:focus-visible{outline: -webkit-focus-ring-color auto 1px;}` 스타일로 시각적으로 표시됩니다.

3. **라벨 연결**
   - 각 체크박스는 `label` 요소로 감싸서 클릭 영역을 넓히고 접근성을 향상시킵니다.
   - 텍스트가 있는 경우 `checkbox-txt` 클래스를 사용하여 시각적으로 라벨을 제공합니다.

#### SCSS 스타일링

```scss
.component-checkbox {
  // 체크박스 컴포넌트 스타일

  .checkbox-inner {
    // 체크박스 내부 컨테이너 스타일
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    input[type="checkbox"] {
      // 체크박스 입력 요소 스타일

      &:checked {
        // 선택된 상태 스타일
      }

      &:disabled {
        // 비활성화 상태 스타일
        cursor: not-allowed;
      }

      &:checked:disabled {
        // 선택되고 비활성화된 상태 스타일
      }

      &:focus-visible {
        // 포커스 상태 스타일
        outline: -webkit-focus-ring-color auto 1px;
      }
    }

    .checkbox-item {
      // 체크박스 항목 스타일
      display: inline-flex;
      align-items: center;

      .checkbox-txt {
        // 체크박스 텍스트 스타일
        @include rem(margin-left, 8);
      }
    }
  }
}
```

### 아이콘 컴포넌트

아이콘 컴포넌트는 시각적인 요소로 사용자 인터페이스에서 기능이나 상태를 직관적으로 표현하는 데 사용됩니다. 아이콘은 SVG 형식으로 제공되며, 웹 접근성을 고려하여 구현되어야 합니다.

#### SVG 아이콘

SVG 아이콘은 다음과 같은 구조로 사용됩니다:

```html
<i class="ico-close ico-normal" aria-hidden="true"></i>
```

#### 아이콘 종류

프로젝트에서 사용되는 주요 아이콘 클래스는 다음과 같습니다:

- `.ico-close` - 닫기 아이콘
- `.ico-go-back` - 뒤로 가기 아이콘
- `.ico-arrow-up` - 위쪽 화살표 아이콘
- `.ico-arrow-down` - 아래쪽 화살표 아이콘
- `.ico-arrow-left` - 왼쪽 화살표 아이콘
- `.ico-arrow-right` - 오른쪽 화살표 아이콘
- `.ico-share` - 공유 아이콘
- `.ico-search` - 검색 아이콘
- `.ico-hamburger` - 햄버거 메뉴 아이콘
- `.ico-refresh` - 새로고침 아이콘
- `.ico-calendar` - 캘린더 아이콘
- `.ico-spinner` - 로딩 스피너 아이콘
- `.ico-required-mark` - 필수 입력 표시 아이콘

#### 아이콘 크기

아이콘 크기를 조절하기 위한 클래스는 다음과 같습니다:

- `.ico-normal` - 기본 크기 아이콘

#### 접근성 가이드

아이콘은 접근성을 고려하여 다음과 같은 방식으로 구현해야 합니다:

1. **순수 장식용 아이콘**
   - `aria-hidden="true"` 속성을 추가하여 스크린 리더가 읽지 않도록 합니다.

   ```html
   <i class="ico-search ico-normal" aria-hidden="true"></i>
   ```

2. **의미가 있는 아이콘**
   - 아이콘만 있는 경우, `aria-label` 속성을 추가하여 스크린 리더 사용자에게 기능을 설명합니다.

   ```html
   <button type="button">
     <i class="ico-search ico-normal" aria-label="검색"></i>
   </button>
   ```

   - 텍스트와 함께 사용하는 경우, 아이콘에는 `aria-hidden="true"`를 추가하고 텍스트로 의미를 전달합니다.

   ```html
   <button type="button">
     <i class="ico-search ico-normal" aria-hidden="true"></i>
     <span>검색</span>
   </button>
   ```

3. **상태를 나타내는 아이콘**
   - 상태를 나타내는 아이콘의 경우, `role="img"`와 함께 `aria-label`을 사용하여 상태를 설명합니다.

   ```html
   <i class="ico-required-mark" role="img" aria-label="필수">*</i>
   ```

#### SCSS 스타일링

```scss
// 아이콘 기본 스타일
[class^="ico-"] {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

// 아이콘 크기
.ico-normal {
  @include rem(width, 24);
  @include rem(height, 24);
}

// 개별 아이콘 스타일
.ico-close {
  background-image: url('../assets/images/icons/ico-close.svg');
}

.ico-go-back {
  background-image: url('../assets/images/icons/ico-go-back.svg');
}

.ico-arrow-up {
  background-image: url('../assets/images/icons/ico-arrow-up.svg');
}

.ico-arrow-down {
  background-image: url('../assets/images/icons/ico-arrow-down.svg');
}

.ico-arrow-left {
  background-image: url('../assets/images/icons/ico-arrow-left.svg');
}

.ico-arrow-right {
  background-image: url('../assets/images/icons/ico-arrow-right.svg');
}

.ico-share {
  background-image: url('../assets/images/icons/ico-share.svg');
}

.ico-search {
  background-image: url('../assets/images/icons/ico-search.svg');
}

.ico-hamburger {
  background-image: url('../assets/images/icons/ico-hamburger.svg');
}

.ico-refresh {
  background-image: url('../assets/images/icons/ico-refresh.svg');
}

.ico-calendar {
  background-image: url('../assets/images/icons/ico-calendar.svg');
}

.ico-spinner {
  background-image: url('../assets/images/icons/ico-spinner.svg');
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ico-required-mark {
  color: #ff0000;
  font-style: normal;
  font-weight: bold;
}
```

### 폼 컴포넌트

폼 컴포넌트는 사용자 입력을 수집하기 위한 구조화된 레이아웃을 제공합니다. 다양한 입력 요소들을 그룹화하고 일관된 방식으로 표시하는 데 사용됩니다.

#### 기본 구조

폼 컴포넌트의 기본 구조는 다음과 같습니다:

```html
<div class="component-form">
  <div class="form-element">
    <label for="input_id" class="input-label">
      <span class="label-txt">
        <i class="ico-required-mark" role="img" aria-label="필수">*</i>
        Label
      </span>
    </label>
    <div class="form-group">
      <div class="component-input">
        <div class="input-field">
          <input type="text" id="input_id" placeholder="입력 안내 텍스트">
        </div>
      </div>
    </div>
  </div>
</div>
```

#### 폼 요소 유형

폼 컴포넌트는 다양한 입력 요소 유형을 지원합니다:

##### 기본 텍스트 입력

```html
<div class="form-element">
  <label for="temp_input_0001" class="input-label">
    <span class="label-txt">
      <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      아이디
    </span>
  </label>
  <div class="form-group">
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0001" placeholder="아이디를 입력해주세요.">
      </div>
    </div>
  </div>
</div>
```

##### 셀렉트 박스와 텍스트 입력 조합

```html
<div class="form-element">
  <label for="temp_input_0001" class="input-label">
    <span class="label-txt">
      휴대폰 번호
    </span>
  </label>
  <div class="form-group">
    <div class="component-select">
      <select class="select-list" required>
        <option value="" selected hidden>통신사</option>
        <option value="value1">Option 1</option>
        <option value="value2">Option 2</option>
      </select>
    </div>
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0001" placeholder="'-' 제외하고 숫자만 입력해주세요">
      </div>
    </div>
  </div>
</div>
```

##### 입력 필드와 버튼 조합

```html
<div class="form-element">
  <label for="temp_input_0002" class="input-label">
    <span class="label-txt">
      <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      휴대폰번호
    </span>
  </label>
  <div class="form-group">
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0002" placeholder="휴대폰 번호를 입력해주세요.">
      </div>
    </div>
    <button class="btn-confirm">
      <span class="btn-txt">인증</span>
    </button>
  </div>
</div>
```

##### 여러 입력 필드 조합 (구분선 포함)

```html
<div class="form-element">
  <label for="temp_input_0002" class="input-label">
    <span class="label-txt">
      휴대폰번호
    </span>
  </label>
  <div class="form-group">
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0002" placeholder="휴대폰 번호를 입력해주세요.">
      </div>
    </div>
    <div class="bar"></div>
    <div class="component-input">
      <div class="input-field">
        <input type="text" placeholder="휴대폰 번호를 입력해주세요.">
      </div>
    </div>
    <div class="bar"></div>
    <div class="component-input">
      <div class="input-field">
        <input type="text" placeholder="휴대폰 번호를 입력해주세요.">
      </div>
    </div>
  </div>
</div>
```

##### 특수 입력 필드 (주민등록번호)

```html
<div class="form-element">
  <label for="temp_input_0002" class="input-label">
    <span class="label-txt">
      주민등록번호
    </span>
  </label>
  <div class="form-group">
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0002" placeholder="앞 6자리">
      </div>
    </div>
    <div class="bar"></div>
    <div class="resident-number">
      <div class="component-input resident-input">
        <div class="input-field">
          <input type="text" maxlength="1">
        </div>
      </div>
      <ul class="hidden-list">
        <li class="hiddeb-num">
          <span class="hide-txt">hidden-number</span>
        </li>
        <!-- 반복 항목 -->
      </ul>
    </div>
  </div>
</div>
```

##### 타이머가 있는 입력 필드

```html
<div class="form-element">
  <label for="temp_input_0002" class="input-label">
    <span class="label-txt">
      <i class="ico-required-mark" role="img" aria-label="필수">*</i>
      인증번호
    </span>
  </label>
  <div class="form-group">
    <div class="component-input">
      <div class="input-field">
        <input type="text" id="temp_input_0002">
        <span class="type-time">01:22</span>
      </div>
    </div>
    <button class="btn-confirm">
      <span class="btn-txt">재전송</span>
    </button>
  </div>
</div>
```

#### 폼 컴포넌트 클래스 구조

- **기본 클래스**
  - `.component-form` - 폼 컴포넌트의 기본 클래스

- **요소 관련 클래스**
  - `.form-element` - 폼 요소 컨테이너
  - `.input-label` - 입력 필드 레이블
  - `.label-txt` - 레이블 텍스트
  - `.form-group` - 입력 필드 그룹 컨테이너

- **입력 필드 관련 클래스**
  - `.component-input` - 입력 필드 컴포넌트
  - `.input-field` - 입력 필드 영역
  - `.component-select` - 셀렉트 박스 컴포넌트
  - `.select-list` - 셀렉트 박스 리스트

- **버튼 관련 클래스**
  - `.btn-confirm` - 확인 버튼
  - `.btn-txt` - 버튼 텍스트

- **구분 요소 클래스**
  - `.bar` - 입력 필드 사이의 구분선

- **특수 요소 클래스**
  - `.resident-number` - 주민등록번호 뒷자리 입력 영역
  - `.resident-input` - 주민등록번호 입력 필드
  - `.hidden-list` - 숨겨진 번호 리스트
  - `.hiddeb-num` - 숨겨진 번호 항목
  - `.hide-txt` - 숨겨진 텍스트
  - `.type-time` - 타이머 표시 영역

#### 접근성 가이드

- 필수 입력 필드에는 `<i class="ico-required-mark" role="img" aria-label="필수">*</i>` 요소를 사용하여 시각적으로 표시하고 스크린 리더 사용자에게도 알립니다.
- 모든 입력 필드에는 적절한 레이블을 제공합니다.
- 입력 필드에는 적절한 `placeholder` 속성을 사용하여 사용자에게 입력 지침을 제공합니다.
- 숨겨진 텍스트에는 `.hide-txt` 클래스를 사용하여 시각적으로는 숨기지만 스크린 리더에서는 읽을 수 있도록 합니다.

#### SCSS 스타일링

```scss
.component-form {
  // 폼 컴포넌트 스타일

  .form-element {
    // 폼 요소 스타일

    .input-label {
      // 입력 필드 레이블 스타일

      .label-txt {
        // 레이블 텍스트 스타일

        .ico-required-mark {
          // 필수 표시 아이콘 스타일
        }
      }
    }

    .form-group {
      // 입력 필드 그룹 스타일

      .component-select {
        // 셀렉트 박스 컴포넌트 스타일

        .select-list {
          // 셀렉트 박스 리스트 스타일
        }
      }

      .component-input {
        // 입력 필드 컴포넌트 스타일

        .input-field {
          // 입력 필드 영역 스타일

          input {
            // 입력 요소 스타일
          }

          .type-time {
            // 타이머 표시 영역 스타일
          }
        }

        &.resident-input {
          // 주민등록번호 입력 필드 스타일
        }
      }

      .bar {
        // 구분선 스타일
      }

      .btn-confirm {
        // 확인 버튼 스타일

        .btn-txt {
          // 버튼 텍스트 스타일
        }

        &:disabled {
          // 비활성화 버튼 스타일
        }
      }

      .resident-number {
        // 주민등록번호 뒷자리 입력 영역 스타일

        .hidden-list {
          // 숨겨진 번호 리스트 스타일

          .hiddeb-num {
            // 숨겨진 번호 항목 스타일

            .hide-txt {
              // 숨겨진 텍스트 스타일
            }
          }
        }
      }
    }
  }
}
```

### 페이지네이션 컴포넌트

페이지네이션 컴포넌트는 콘텐츠 또는 데이터를 여러 페이지로 분할하고 다음 또는 이전 페이지로 이동하는 컨트롤을 제공합니다. 사용자가 정보를 원활하게 이용할 수 있도록 현재 위치와 전체 페이지 정보를 시각적으로 표시합니다.

#### 기본 구조

페이지네이션 컴포넌트의 기본 구조는 다음과 같습니다:

```html
<nav class="component-pagination" aria-label="페이지네이션">
  <a href="#" class="pagination-item first"><span class="hide-txt">첫 페이지로 이동</span></a>
  <a href="#" class="pagination-item prev"><span class="hide-txt">이전 페이지로 이동</span></a>
  <span class="pagination-item" aria-current="page">1</span>
  <a href="#" class="pagination-item">2</a>
  <a href="#" class="pagination-item">3</a>
  <a href="#" class="pagination-item">4</a>
  <a href="#" class="pagination-item">5</a>
  <a href="#" class="pagination-item next"><span class="hide-txt">다음 페이지로 이동</span></a>
  <a href="#" class="pagination-item last"><span class="hide-txt">마지막 페이지로 이동</span></a>
</nav>
```

#### 페이지네이션 유형

##### 기본 페이지네이션

기본 페이지네이션은 첫 페이지, 이전 페이지, 페이지 번호들, 다음 페이지, 마지막 페이지로 구성됩니다.

```html
<!-- 기본 페이지네이션 -->
<nav class="component-pagination" aria-label="페이지네이션">
  <a href="#" class="pagination-item first"><span class="hide-txt">첫 페이지로 이동</span></a>
  <a href="#" class="pagination-item prev"><span class="hide-txt">이전 페이지로 이동</span></a>
  <span class="pagination-item" aria-current="page">1</span>
  <a href="#" class="pagination-item">2</a>
  <a href="#" class="pagination-item">3</a>
  <a href="#" class="pagination-item">4</a>
  <a href="#" class="pagination-item">5</a>
  <a href="#" class="pagination-item next"><span class="hide-txt">다음 페이지로 이동</span></a>
  <a href="#" class="pagination-item last"><span class="hide-txt">마지막 페이지로 이동</span></a>
</nav>
```

##### 미니 페이지네이션

미니 페이지네이션은 이전 페이지, 현재 페이지/전체 페이지, 다음 페이지로 구성된 간소화된 형태입니다.

```html
<!-- 미니 페이지네이션 -->
<nav class="component-pagination-mini" aria-label="페이지네이션">
  <a href="#" class="pagination-item prev"><span class="hide-txt">이전 페이지로 이동</span></a>
  <span class="pagination-item-group">
    <span class="pagination-item" aria-current="page">1</span>
    <span class="pagination-item" aria-hidden="true">/</span>
    <span class="pagination-item">100</span>
  </span>
  <a href="#" class="pagination-item next"><span class="hide-txt">다음 페이지로 이동</span></a>
</nav>
```

#### 클래스 구조

페이지네이션 컴포넌트에서 사용되는 주요 클래스는 다음과 같습니다:

1. **기본 클래스**
   - `component-pagination`: 기본 페이지네이션 컴포넌트
   - `component-pagination-mini`: 미니 페이지네이션 컴포넌트

2. **항목 관련 클래스**
   - `pagination-item`: 페이지네이션 항목
   - `pagination-item-group`: 페이지 정보를 그룹화하는 컨테이너
   - `first`: 첫 페이지로 이동 버튼
   - `prev`: 이전 페이지로 이동 버튼
   - `next`: 다음 페이지로 이동 버튼
   - `last`: 마지막 페이지로 이동 버튼

3. **접근성 관련 클래스**
   - `hide-txt`: 시각적으로 숨겨진 텍스트 (스크린 리더용)

#### 접근성 가이드

페이지네이션 컴포넌트는 다음과 같은 접근성 고려사항을 포함합니다:

1. **알림 역할**
   - 페이지네이션에 `role="navigation"` 속성을 추가하여 스크린 리더가 즉시 알림을 인식하도록 합니다.
   - 중요하지 않은 알림의 경우 `role="presentation"` 속성을 사용할 수 있습니다.

2. **현재 페이지 표시**
   - 현재 페이지는 `aria-current="page"` 속성을 추가하여 스크린 리더가 즉시 인식하도록 합니다.
   - 이를 통해 스크린 리더 사용자는 현재 위치를 인식할 수 있습니다.

3. **시각적 대비**
   - 페이지네이션 항목은 배경과 충분한 대비를 가져야 합니다.
   - 페이지네이션 항목의 위치는 화면 하단에 고정하여 사용자가 쉽게 발견할 수 있도록 합니다.

4. **키보드 접근성**
   - 페이지네이션 항목은 기본적으로 키보드로 접근 가능합니다.
   - 포커스 상태는 `:focus-visible{outline: -webkit-focus-ring-color auto 1px;}` 스타일로 시각적으로 표시됩니다.

#### SCSS 스타일링

```scss
.component-pagination {
  // 기본 페이지네이션 스타일
  display: flex;
  align-items: center;
  justify-content: center;

  .pagination-item {
    // 페이지네이션 항목 스타일
    display: flex;
    align-items: center;
    justify-content: center;

    &[aria-current="page"] {
      // 현재 페이지 스타일
    }

    &.first, &.last, &.prev, &.next {
      // 이동 버튼 스타일
    }

    .hide-txt {
      // 숨겨진 텍스트 스타일
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
    }
  }
}

.component-pagination-mini {
  // 미니 페이지네이션 스타일
  display: flex;
  align-items: center;

  .pagination-item-group {
    // 페이지 정보 그룹 스타일
    display: flex;
    align-items: center;
  }

  .pagination-item {
    // 페이지네이션 항목 스타일

    &[aria-current="page"] {
      // 현재 페이지 스타일
    }
  }
}
```

### 라디오 컴포넌트

라디오 컴포넌트는 여러 옵션 중에서 단 하나의 옵션을 선택할 수 있는 입력 요소입니다. 각 라디오 버튼은 그룹 내에서 고유한 값을 갖고 있으며, 사용자가 그룹 내에서 하나의 옵션을 선택하면 다른 옵션들은 자동으로 선택 해제됩니다.

#### 기본 구조

라디오 컴포넌트의 기본 구조는 다음과 같습니다:

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="radio_id" name="radio_group_name">
  </label>
</div>
```

#### 라디오 유형

라디오 컴포넌트는 다양한 상태와 유형을 지원합니다:

##### 기본 라디오 버튼

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="temp_radio_0001" name="temp_radio_0001">
  </label>
</div>
```

##### 선택된 라디오 버튼

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="temp_radio_0002" name="temp_radio_0001" checked>
  </label>
</div>
```

##### 비활성화된 라디오 버튼

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="temp_radio_0003" name="temp_radio_0001" disabled>
  </label>
</div>
```

##### 선택되고 비활성화된 라디오 버튼

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="temp_radio_0101" name="temp_radio_0100" checked disabled>
  </label>
</div>
```

##### 텍스트가 있는 라디오 버튼

```html
<div class="component-input">
  <label class="radio-inner">
    <input type="radio" id="temp_radio_0201" name="temp_radio_0200">
    <span class="radio-item">
      <span class="radio-txt">Radio default</span>
    </span>
  </label>
</div>
```

#### 클래스 구조

라디오 컴포넌트에서 사용되는 주요 클래스는 다음과 같습니다:

1. **기본 클래스**
   - `component-radio`: 라디오 컴포넌트의 기본 클래스

2. **내부 요소 클래스**
   - `radio-inner`: 라디오 버튼과 라벨을 감싸는 컨테이너
   - `radio-item`: 라디오 버튼과 텍스트를 함께 그룹화하는 컨테이너
   - `radio-txt`: 라디오 버튼 옆에 표시되는 텍스트

3. **상태 관련 속성**
   - `checked`: 선택된 상태
   - `disabled`: 비활성화된 상태

#### 접근성 가이드

라디오 컴포넌트는 다음과 같은 접근성 고려사항을 포함합니다:

1. **시맨틱 마크업**
   - 각 라디오 버튼에는 고유한 `id` 속성을 제공합니다.
   - 같은 그룹의 라디오 버튼은 동일한 `name` 속성을 공유합니다.

2. **키보드 접근성**
   - 라디오 버튼은 기본적으로 키보드로 접근 가능합니다.
   - 포커스 상태는 `:focus-visible{outline: -webkit-focus-ring-color auto 1px;}` 스타일로 시각적으로 표시됩니다.

3. **라벨 연결**
   - 각 라디오 버튼은 `label` 요소로 감싸서 클릭 영역을 넓히고 접근성을 향상시킵니다.
   - 텍스트가 있는 경우 `radio-txt` 클래스를 사용하여 시각적으로 라벨을 제공합니다.

#### SCSS 스타일링

```scss
.component-input {
  // 라디오 컴포넌트 스타일

  .radio-inner {
    // 라디오 내부 컨테이너 스타일
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    input[type="radio"] {
      // 라디오 입력 요소 스타일

      &:checked {
        // 선택된 상태 스타일
      }

      &:disabled {
        // 비활성화 상태 스타일
        cursor: not-allowed;
      }

      &:checked:disabled {
        // 선택되고 비활성화된 상태 스타일
      }

      &:focus-visible {
        // 포커스 상태 스타일
        outline: -webkit-focus-ring-color auto 1px;
      }
    }

    .radio-item {
      // 라디오 항목 스타일
      display: inline-flex;
      align-items: center;

      .radio-txt {
        // 라디오 텍스트 스타일
        @include rem(margin-left, 8);
      }
    }
  }
}
```

### 셀렉트 컴포넌트

셀렉트 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 형태의 입력 요소입니다. 기본 HTML `select` 요소를 사용하는 기본형과 커스텀 UI를 제공하는 커스텀형으로 나뉩니다.

#### 기본 구조

셀렉트 컴포넌트의 기본 구조는 다음과 같습니다:

```html
<div class="component-select">
  <select class="select-list" required>
    <option value="" selected disabled hidden>선택해주세요.</option>
    <option value="value1">Option 1</option>
    <option value="value2">Option 2</option>
    <option value="value3">Option 3</option>
  </select>
</div>
```

#### 셀렉트 유형

셀렉트 컴포넌트는 다양한 유형을 지원합니다:

##### 기본 셀렉트

기본 HTML `select` 요소를 사용하는 형태입니다.

```html
<div class="component-select">
  <select class="select-list" required>
    <option value="" selected disabled hidden>선택해주세요.</option>
    <option value="value1">Option 1</option>
    <option value="value2">Option 2</option>
    <option value="value3">Option 3</option>
    <option value="value4">Option 4</option>
    <option value="value5">Option 5</option>
  </select>
</div>
```

##### 커스텀 셀렉트

커스텀 UI를 제공하는 형태로, JavaScript를 통해 동작합니다.

```html
<div
  id="select-custom"
  data-component="select-box"
  class="component-select type-custom"
  data-props-default="선택해주세요"
>
  <button type="button" class="select-box">
    <span style="pointer-events: none"></span>
  </button>
  <ul class="select-options">
    <li class="option" data-value="option1">Option 1</li>
    <li class="option" data-value="option2">Option 2</li>
    <li class="option" data-value="option3">Option 3</li>
    <li class="option" data-value="option4">Option 4</li>
    <li class="option" data-value="option5">Option 5</li>
  </ul>
</div>
```

#### 클래스 구조

셀렉트 컴포넌트에서 사용되는 주요 클래스는 다음과 같습니다:

1. **기본 클래스**
   - `component-select`: 셀렉트 컴포넌트의 기본 클래스
   - `type-custom`: 커스텀 셀렉트 타입을 지정하는 클래스

2. **내부 요소 클래스**
   - `select-list`: 기본 셀렉트의 `select` 요소 클래스
   - `select-box`: 커스텀 셀렉트의 버튼 클래스
   - `select-options`: 커스텀 셀렉트의 옵션 목록 컨테이너 클래스
   - `option`: 커스텀 셀렉트의 개별 옵션 클래스

3. **상태 관련 속성**
   - `disabled`: 비활성화 상태를 나타내는 클래스

4. **데이터 속성**
   - `data-component="select-box"`: 컴포넌트 타입을 지정하는 속성
   - `data-props-default`: 기본 텍스트를 지정하는 속성
   - `data-value`: 옵션의 값을 지정하는 속성

#### 접근성 가이드

셀렉트 컴포넌트는 다음과 같은 접근성 고려사항을 포함합니다:

1. **기본 셀렉트**
   - 네이티브 `select` 요소는 기본적으로 키보드 접근성과 스크린 리더 지원을 제공합니다.
   - `required` 속성을 사용하여 필수 입력 필드임을 명시할 수 있습니다.

2. **커스텀 셀렉트**
   - 키보드 접근성을 위해 `button` 요소를 사용하고, 화살표 키로 옵션을 탐색할 수 있도록 JavaScript 구현이 필요합니다.
   - 포커스 상태를 시각적으로 명확하게 표시해야 합니다.
   - 선택된 옵션을 스크린 리더에 알리기 위해 적절한 ARIA 속성(`aria-expanded`, `aria-activedescendant` 등)을 사용해야 합니다.

#### SCSS 스타일링

```scss
.component-select {
  // 셀렉트 컴포넌트 스타일
  position: relative;
  width: 100%;
  overflow: hidden;

  // 기본 셀렉트 스타일
  .select-list {
    width: 100%;
    appearance: none;
    background-image: url('../assets/images/icons/ico-arrow-down.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;

    &:focus {
      // 포커스 상태 스타일
    }

    &:disabled {
      // 비활성화 상태 스타일
      cursor: not-allowed;
    }
  }

  // 커스텀 셀렉트 스타일
  &.type-custom {
    .select-box {
      // 셀렉트 박스 버튼 스타일
      width: 100%;
      text-align: left;

      &:focus {
        // 포커스 상태 스타일
      }
    }

    .select-options {
      // 옵션 목록 스타일
      display: none;
      position: absolute;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;

      &.is-open {
        // 열린 상태 스타일
        display: block;
      }

      .option {
        // 옵션 항목 스타일

        &:hover, &:focus {
          // 호버/포커스 상태 스타일
        }

        &.is-selected {
          // 선택된 상태 스타일
        }
      }
    }

    &.disabled {
      // 비활성화 상태 스타일
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

```

### 테이블 컴포넌트

테이블 컴포넌트는 `component-table` 클래스와 구조를 따라야 합니다:

#### 기본 테이블

```html
<div class="component-table">
  <table>
    <caption>표제목 : 제목1, 제목2, 제목3, 제목4</caption>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col>
    <thead>
      <tr>
        <th scope="col">날짜</th>
        <th scope="col">이벤트</th>
        <th scope="col">장소</th>
        <th scope="col">가격</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025.04.01</td>
        <td>골프대회</td>
        <td>서울CC</td>
        <td>100,000원</td>
      </tr>
      <tr>
        <td>2025.04.15</td>
        <td>골프레슨</td>
        <td>제주CC</td>
        <td>50,000원</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### 복합형 테이블

행과 열을 병합하거나 그룹화가 필요한 경우 다음과 같은 구조를 사용합니다:

```html
<div class="component-table">
  <table>
    <caption>
      2024 주간 요율 요약
      <span>2024년 4월 15일부터 4월 20일까지의 주간 다양한 금융 도구에 대한 주간 요율</span>
    </caption>
    <col>
    <col style="width: 17%;">
    <col style="width: 17%;">
    <col style="width: 17%;">
    <col style="width: 17%;">
    <col style="width: 17%;">
    <thead>
        <tr>
            <th rowspan="2" scope="col">구분</th>
            <th colspan="3" scope="colgroup">2024</th>
            <th colspan="2" scope="colgroup">일주일 마무리</th>
        </tr>
        <tr>
            <th scope="col">4월 15일</th>
            <th scope="col">4월 16일</th>
            <th scope="col">4월 17일</th>
            <th scope="col">4월 19일</th>
            <th scope="col">4월 20일</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">연방 자금</th>
            <td>1.84</td>
            <td>1.85</td>
            <td>1.85</td>
            <td>1.85</td>
            <td>1.85</td>
        </tr>
        <tr>
            <th scope="row">비금융</th>
            <td>1.84</td>
            <td>1.85</td>
            <td>1.85</td>
            <td>1.85</td>
            <td>1.85</td>
        </tr>
    </tbody>
  </table>
</div>
```

#### 테이블 컴포넌트 사용 시 주의사항

- `caption` 태그를 사용하여 테이블의 제목과 내용을 요약해야 합니다.
- 행과 열을 병합할 때는 `rowspan`, `colspan` 속성을 사용합니다.
- 열 너비 지정이 필요한 경우 `col` 태그와 `style="width: %"` 속성을 사용합니다.
- 테이블 헤더(`th`)에는 적절한 `scope` 속성(`col`, `row`, `colgroup`, `rowgroup`)을 지정해야 합니다.
- 테이블 내 링크 텍스트에는 `.txt-link` 클래스를 사용하여 일관된 스타일을 적용합니다.
- 스코어 테이블과 같은 특수한 경우, 스코어 값에 따라 적절한 클래스(예: `.par`, `.birdie`, `.bogey`, `.eagle`)를 지정하여 색상 코딩을 적용할 수 있습니다.


## 해당 프로젝트 코드 작성 가이드
  - mixin @include rem 함수만 사용 (예 : @include rem(속성, 값); )
  - 모든 색상 변수는 직접 값(예: #000000)을 지정으로 수정합니다.
  - 모든 폰트 스타일은 기본으로 지정하고 나중에 커스텀으로 따로 지정하겠습니다.
  - css gap 속성 사용 금지 (margin으로 간격 조정)
  - 컴포넌트 사용 시, 컴포넌트 예시의 HTML 구조대로 구현하세요.
  - 컴포넌트 사용 시, 가져온 디자인과 일치하도록 구현하세요.
  - 변환전 코드의 스타일 구조는 깨지지 않게 수정하세요.