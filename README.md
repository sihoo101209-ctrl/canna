# Canna Studio

**Canna Studio**는 2D 게임을 장르별로 만들 수 있게 도와주는 브라우저 기반 프로토타입입니다.

짧은 게임 아이디어를 입력하면 비주얼 노벨, 로그라이크, RPG, 플랫포머, 퍼즐, 카드 게임, 리듬 게임, 생활 시뮬레이션 같은 편집 가능한 게임 구조로 바꿔 줍니다.

![Canna Studio 미리보기](./assets/canna-preview.svg)

## 실행하기

브라우저에서 `index.html`을 열면 바로 사용할 수 있습니다.

GitHub Pages가 켜져 있으면 아래 주소에서도 실행할 수 있습니다.

https://sihoo101209-ctrl.github.io/canna/

## 주요 기능

- 자연어 **Make** 입력창으로 2D 게임 초안 만들기
- 하나의 게임 씨앗을 여러 장르로 변환하기
- 12개 장르 템플릿
- 스토리, 전투, 맵, 퀘스트, 접근성, 내보내기, 제작 흐름, 커뮤니티 아이디어를 모은 기능 아틀라스
- 유리 느낌의 어두운 UI에서 쓸 수 있는 12개 추상 테마
- JSON 내보내기와 불러오기
- 브라우저 저장 기능
- 로그라이크 타일 편집 프로토타입
- 실시간 미리보기 패널
- `examples/rainy-doll-vn.html`에 포함된 작은 샘플 게임

## 장르 템플릿

- 비주얼 노벨
- 로그라이크
- 탑다운 RPG
- 플랫포머
- 퍼즐
- 카드 / 덱빌딩
- 슈팅
- 리듬
- 생활 시뮬레이션
- 방치형 RPG
- 메트로배니아
- 포인트 앤 클릭 어드벤처

## 프로젝트 상태

아직 초기 프로토타입입니다. 현재의 AI처럼 보이는 생성 기능은 실제 AI API가 아니라 로컬 규칙 기반입니다. 이후 버전에서는 작은 AI 제공자 계층을 통해 실제 AI API와 연결할 수 있습니다.

계획된 작업은 [docs/ROADMAP.md](./docs/ROADMAP.md)에서 볼 수 있습니다.

## 파일 설명

- `index.html` - 앱의 기본 화면 구조
- `styles.css` - 반응형 유리 느낌 UI와 12개 테마 시스템
- `script.js` - 장르 데이터, Make 입력, 테마 전환, 미리보기, JSON 내보내기/불러오기
- `examples/rainy-doll-vn.html` - 작은 플레이 가능 비주얼 노벨 샘플
- `.github/workflows/pages.yml` - GitHub Pages 배포 워크플로우

## 라이선스

MIT License입니다. 자세한 내용은 [LICENSE](./LICENSE)를 확인하세요.
