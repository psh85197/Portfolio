# 디자인 관리 도구

이 도구는 프로젝트의 디자인 요소(컬러, 폰트)를 쉽게 관리하고 자동으로 SCSS 변수와 HTML 코드를 생성하는 기능을 제공합니다.

## 주요 기능

### 1. 컬러 관리

- 컬러 코드 입력 및 타입(font, bg, line) 선택
- 자동으로 SCSS 변수 생성 및 `_variables.scss` 파일에 추가
- 자동으로 HTML 코드 생성 및 `color.html` 파일에 추가
- 브라우저에서 직접 컬러 관리 가능
- 컬러 추가 후 자동 새로고침 기능

### 2. 폰트 관리

- 폰트 사이즈, 라인 하이트, 폰트 가중치 설정
- 폰트 테이블에 샘플 텍스트와 함께 추가
- 폰트 크기에 따라 자동 정렬 (내림차순)
- 페이지 새로고침 후에도 데이터 유지 (localStorage 활용)
- 다양한 폰트 가중치 지원 (Regular, Medium, Semi Bold, Bold)

## 사용 방법

### 1. 서버 실행

관리 도구를 사용하기 위해서는 먼저 서버를 실행해야 합니다:

실행 방법은 기존 gulp를 실행하면 관리 도구도 같이 실행이 됩니다.
명렁어: npm run dev

### 2. 컬러 관리 도구 사용하기

1. 브라우저에서 `color.html` 페이지를 엽니다.
2. 페이지 우측 하단에 있는 '도구' 버튼을 클릭합니다.
3. 관리 도구 창에서 '컬러' 탭을 선택합니다.
4. 컬러 코드를 입력합니다 (예: #000000 또는 000000).
5. 변수 타입을 선택합니다 (font, bg, line).
6. 'color 가이드 추가' 체크박스를 선택하면 HTML 파일에도 자동으로 추가됩니다.
7. "컬러 추가하기" 버튼을 클릭합니다.
8. 'color 가이드 추가'를 선택한 경우 자동으로 페이지가 새로고침됩니다.
9. 선택하지 않은 경우 "페이지 새로고침" 버튼을 클릭하여 변경 사항을 확인할 수 있습니다.

### 3. 폰트 관리 도구 사용하기

1. 브라우저에서 `font.html` 페이지를 엽니다.
2. 페이지 우측 하단에 있는 '도구' 버튼을 클릭합니다.
3. 관리 도구 창에서 '폰트' 탭을 선택합니다.
4. 폰트 사이즈를 입력합니다 (예: 16).
5. 라인 하이트를 입력합니다 (예: 1.5 또는 150%).
6. 원하는 폰트 가중치를 선택합니다 (Regular, Medium, Semi Bold, Bold 중 하나 이상).
7. "폰트 추가하기" 버튼을 클릭합니다.
8. 폰트 테이블에 새 항목이 추가되고, 페이지를 새로고침해도 데이터가 유지됩니다.
9. 추가 된 폰트를 삭제하고 싶은 경우 (콘솔창 입력)

- 전체 폰트 삭제 : window.clearFontsFromTable()
- 특정 폰트 크기만 삭제 : window.clearFontsFromTable('25')

## 파일 구조

- `color_manager.js`: 브라우저에서 실행되는 관리 도구 UI (컬러 및 폰트 관리 기능 포함)
- `color_server.js`: 파일 업데이트를 처리하는 Express 서버
- `color_variables_generator.js`: 명령줄에서 사용할 수 있는 파일 업데이트 스크립트
- `font_manager.js`: 폰트 관리 기능 구현 (color_manager.js에 통합됨)

## 의존성

- Node.js
- Express
- CORS
- Body-parser

## 주의사항

- 서버가 실행 중이어야 브라우저에서 자동 업데이트 기능을 사용할 수 있습니다.
- 이미 존재하는 컬러 변수를 다시 추가하면 중복 추가되지 않습니다.
- 컬러 코드는 6자리 16진수 형식이어야 합니다 (예: 000000).
- 폰트 사이즈는 8~100px 범위 내에서 설정할 수 있습니다.
- 폰트 데이터는 브라우저의 localStorage에 저장되므로 브라우저 캐시를 지우면 데이터가 삭제될 수 있습니다.
