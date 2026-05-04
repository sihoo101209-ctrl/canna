const $ = (selector) => document.querySelector(selector);

const genres = {
  vn: {
    label: "비주얼 노벨",
    title: "비주얼 노벨 제작",
    tabs: ["대시보드", "장면", "캐릭터", "선택지", "변수", "스토리 도구"],
    groups: ["비주얼 노벨 기능", "스토리 구조", "대화 특화", "연출"],
    keywords: ["비주얼", "노벨", "대사", "선택지", "연애", "미스터리", "스토리"],
  },
  rogue: {
    label: "로그라이크",
    title: "로그라이크 제작",
    tabs: ["대시보드", "던전", "몬스터", "아이템", "전투", "규칙"],
    groups: ["로그라이크 기능", "전투/밸런스", "AI/적 행동", "아이템/경제"],
    keywords: ["로그", "던전", "랜덤", "몬스터", "아이템", "턴"],
  },
  rpg: {
    label: "탑다운 RPG",
    title: "탑다운 RPG 제작",
    tabs: ["대시보드", "맵", "NPC", "퀘스트", "데이터베이스", "이벤트"],
    groups: ["탑다운 RPG 기능", "2D 맵", "퀘스트", "월드빌딩"],
    keywords: ["rpg", "마을", "퀘스트", "npc", "지도", "상점"],
  },
  platformer: {
    label: "플랫포머",
    title: "플랫포머 제작",
    tabs: ["대시보드", "레벨", "이동", "위험 요소", "카메라", "보스"],
    groups: ["플랫포머", "레벨 디자인", "테스트/검증"],
    keywords: ["플랫", "점프", "발판", "대시", "벽점프"],
  },
  puzzle: {
    label: "퍼즐",
    title: "퍼즐 제작",
    tabs: ["대시보드", "보드", "조각", "목표", "검증", "튜토리얼"],
    groups: ["퍼즐 기능", "레벨 디자인", "접근성"],
    keywords: ["퍼즐", "블록", "매치", "보드", "규칙"],
  },
  card: {
    label: "카드/덱빌딩",
    title: "카드/덱빌딩 제작",
    tabs: ["대시보드", "카드", "덱", "유물", "전투 상황", "밸런스"],
    groups: ["카드/덱빌딩", "전투/밸런스", "아이템/경제"],
    keywords: ["카드", "덱", "유물", "코스트", "드로우"],
  },
  shooter: {
    label: "슈팅",
    title: "슈팅 게임 제작",
    tabs: ["대시보드", "웨이브", "무기", "적", "패턴", "점수"],
    groups: ["AI 제작 보조", "AI/적 행동", "레벨 디자인"],
    keywords: ["슈팅", "총알", "탄막", "웨이브", "보스"],
  },
  rhythm: {
    label: "리듬",
    title: "리듬 게임 제작",
    tabs: ["대시보드", "채보", "오디오", "노트", "판정", "접근성"],
    groups: ["리듬 게임", "접근성", "테스트/검증"],
    keywords: ["리듬", "bpm", "노트", "음악", "판정"],
  },
  farm: {
    label: "생활 시뮬레이션",
    title: "농장/생활 시뮬레이션 제작",
    tabs: ["대시보드", "작물", "달력", "NPC 일정", "제작", "경제"],
    groups: ["농장/생활 시뮬레이션", "월드빌딩", "아이템/경제"],
    keywords: ["농장", "작물", "생활", "계절", "호감도"],
  },
  idle: {
    label: "방치형 RPG",
    title: "방치형 RPG 제작",
    tabs: ["대시보드", "성장", "보상", "스킬", "반복 구조", "밸런스"],
    groups: ["전투/밸런스", "아이템/경제", "제작 워크플로우"],
    keywords: ["방치", "성장", "자동", "보상", "스킬"],
  },
  metroid: {
    label: "메트로배니아",
    title: "메트로배니아 제작",
    tabs: ["대시보드", "월드맵", "능력", "잠금", "보스", "동선"],
    groups: ["2D 맵", "플랫포머", "레벨 디자인"],
    keywords: ["메트로", "능력", "잠금", "탐험", "보스"],
  },
  adventure: {
    label: "포인트 앤 클릭",
    title: "포인트 앤 클릭 어드벤처 제작",
    tabs: ["대시보드", "방", "단서", "인벤토리", "대화", "미스터리"],
    groups: ["호러/미스터리", "퀘스트", "대화 특화"],
    keywords: ["추리", "단서", "클릭", "어드벤처", "증거"],
  },
};

const featureAtlas = {
  "말로 만들기": ["자연어로 새 게임 만들기", "장르 자동 선택", "분위기/난이도/선택지 수정", "내용 요약", "부족한 설정 질문", "이름 자동 생성", "장면/던전/맵/퀘스트 생성", "기존 프로젝트 이어서 생성", "다른 장르로 변환"],
  "AI 제작 보조": ["아이디어를 기획서로 확장", "기획서를 데이터 구조로 변환", "다음 작업 추천", "장르별 주의점 경고", "핵심 루프 추출", "재미가 약한 부분 분석", "목표가 흐린 부분 찾기", "스타일 변환", "개발 난이도 예측", "범위 축소"],
  "장르 템플릿": ["비주얼 노벨", "로그라이크", "탑다운 RPG", "플랫포머", "퍼즐", "카드/덱빌딩", "슈팅", "리듬", "생활 시뮬레이션", "방치형 RPG", "메트로배니아", "포인트 앤 클릭"],
  "비주얼 노벨 기능": ["장면 편집", "대사 편집", "선택지 분기", "캐릭터 표정", "배경 전환", "호감도/플래그", "조건부 대사", "엔딩 분기", "대사 흐름 차트", "시나리오 초안", "말투 유지"],
  "로그라이크 기능": ["던전 자동 생성", "방/복도 규칙", "층별 테마", "몬스터 테이블", "아이템 드롭", "장비/소모품/유물", "턴 규칙", "시야/안개", "함정", "상점", "보스방", "랜덤 이벤트"],
  "탑다운 RPG 기능": ["타일맵 편집", "NPC 배치", "퀘스트 편집", "상점 편집", "대화/선택지", "포탈/문 이동", "전투 인카운터", "지역별 배경음", "아이템/스킬/스탯 DB", "컷신 이벤트"],
  "플랫포머": ["레벨 편집", "발판/벽/사다리", "점프 높이/중력", "적 이동 패턴", "체크포인트", "수집품", "카메라 영역", "낙사 구역", "움직이는 발판", "보스 패턴", "조작감 프리셋"],
  "퍼즐 기능": ["보드 크기", "블록/타일 규칙", "매치 조건", "승리/패배 조건", "제한 턴/시간", "힌트 시스템", "난이도 생성", "퍼즐 검증", "풀이 가능성 테스트", "튜토리얼"],
  "카드/덱빌딩": ["카드 DB", "비용/효과/희귀도", "덱 규칙", "적 행동 패턴", "유물/패시브", "전투 턴 흐름", "카드 효과 미리보기", "밸런스 비교", "키워드 시스템", "시너지 그래프"],
  "에셋 기능": ["이미지 업로드", "스프라이트 시트 자르기", "애니메이션 프레임", "에셋 분류", "사운드 등록", "음악 루프", "에셋 태그", "사용하지 않는 에셋 찾기", "플레이스홀더 생성"],
  "노코드/로우코드 로직": ["이벤트 블록", "조건/결과 편집", "변수 시스템", "인벤토리 조건", "스위치/플래그", "타이머", "확률 분기", "반복 이벤트", "컷신 순서", "아이템 효과"],
  "실제 코드 생성": ["HTML/JS 게임 생성", "Phaser 프로젝트 생성", "Godot JSON", "Unity 데이터", "게임 루프 코드", "장르별 조작 코드", "저장/불러오기 코드", "빌드 파일 묶기"],
  "미리보기/테스트": ["즉시 플레이", "장면 미리보기", "던전 시뮬레이션", "전투 시뮬레이션", "선택지 경로 테스트", "난이도 테스트", "자동 버그 체크", "누락 에셋 경고", "연결 안 된 장면 경고"],
  "프로젝트 관리": ["프로젝트 저장", "버전 기록", "스냅샷", "되돌리기/다시 실행", "템플릿 저장", "프로젝트 복제", "작업 체크리스트", "개발 로그", "릴리즈 노트"],
  "Canna다운 기능": ["재미 포인트 찾기", "초보자용으로 줄이기", "1시간 범위 추천", "스토리 감정 강화", "아이템 여러 개 생성", "빠진 시스템 찾기", "플레이 가능한 최소 버전", "내보낼 파일 정리"],
  "월드빌딩": ["세계관 백과", "지역/세력/역사", "캐릭터 관계도", "사건 타임라인", "장소 분위기 태그", "지역별 몬스터/아이템", "이름 규칙", "말투/용어 사전"],
  "스토리 구조": ["3막 구조", "에피소드 구조", "챕터 관리", "장면 목적", "갈등/해결 체크", "떡밥/회수", "감정 곡선", "엔딩 조건", "등장량 체크"],
  "대화 특화": ["말투 프로필", "대사 다듬기", "같은 의미 다른 말투", "선택지 성격 차이", "숨겨진 호감도", "조건부 대사", "랜덤 잡담", "퀘스트 상태별 대사"],
  "연출": ["카메라 흔들림", "화면 페이드", "컷인", "스탠딩 이동", "말풍선 위치", "배경 파티클", "날씨 효과", "시간대 전환", "화면 필터", "사운드 큐"],
  "2D 맵": ["타일 자동 배치", "오토타일", "충돌 레이어", "장식 레이어", "그림자 레이어", "지형 브러시", "포탈 연결", "맵 이동 그래프", "도달 불가 검사"],
  "레벨 디자인": ["난이도 곡선", "튜토리얼 구간", "위험/보상 구역", "체크포인트 거리", "플레이 시간 예측", "적 배치 밀도", "아이템 배치 밀도", "목표 명확성"],
  "전투/밸런스": ["체력/공격/방어 계산", "턴 수 예측", "DPS", "생존 시간", "적 조합 시뮬레이션", "아이템 기대값", "드롭 확률", "경험치 곡선", "상태이상", "보스 페이즈"],
  "AI/적 행동": ["순찰 경로", "추적 범위", "도망 조건", "공격 패턴", "상태 머신", "행동 트리", "확률 행동", "보스 타임라인", "시야 범위", "행동 로그"],
  "아이템/경제": ["제작법", "상점 가격", "판매/구매 비율", "희귀도 테이블", "랜덤 옵션", "접두사/접미사", "인벤토리 크기", "재화", "보상 상자", "파밍 시간"],
  "퀘스트": ["퀘스트 체인", "선행 조건", "완료 조건", "보상", "실패 조건", "반복 퀘스트", "숨겨진 퀘스트", "퀘스트 로그", "목표 추적 UI", "흐름 검사"],
  "리듬 게임": ["BPM", "노트 배치", "박자 스냅", "판정선", "롱노트", "패턴 난이도", "오디오 파형", "콤보/점수", "판정 범위", "구간 반복"],
  "농장/생활 시뮬레이션": ["작물 성장표", "계절", "날씨", "NPC 일정", "선물 취향", "호감도 이벤트", "제작/요리", "집 꾸미기", "낚시 테이블", "하루 시간표"],
  "호러/미스터리": ["단서 보드", "용의자 관계도", "증거-결론 연결", "공포 연출", "추격 이벤트", "안전 구역", "랜덤 소리", "논리 오류 검사"],
  "제작 워크플로우": ["할 일 자동 생성", "MVP 범위", "우선순위", "버그 목록", "플레이테스트 노트", "피드백 정리", "변경 기록", "릴리즈 체크리스트"],
  "협업": ["역할별 보기", "작가 모드", "레벨 디자이너 모드", "아티스트 모드", "밸런스 모드", "댓글", "변경 제안", "충돌 해결"],
  "현지화": ["다국어 문자열", "대사 길이 경고", "폰트 문자 체크", "문화권 메모", "변수 문장 검증", "번역 누락", "CSV/XLSX 내보내기"],
  "접근성": ["색약 팔레트 검사", "자막 설정", "글자 크기", "화면 흔들림 줄이기", "플래시 경고", "키 리매핑", "한 손 조작", "난이도 보조"],
  "테스트/검증": ["모든 선택지 경로", "데드엔드 체크", "누락 이미지/사운드", "변수명 검사", "무한 루프 이벤트", "클리어 가능성", "자동 플레이 테스트", "시드 비교"],
  "내보내기": ["웹 게임", "모바일 웹", "데스크톱 앱", "Godot 데이터", "Unity 데이터", "Phaser 프로젝트", "Ren'Py", "Twine", "Tiled JSON", "Ink/Yarn Spinner"],
};

const themes = [
  theme("crystal", "푸른 수정", "구조 설계 담당", "구조와 기록을 정리합니다.", "MAP", "#070b1f", "#8be9fd", "#fff1a8", "#b69cff", "crystal-stage"),
  theme("lavender", "별빛 라벤더", "스토리 담당", "장면, 대사, 선택지를 다듬습니다.", "VN", "#10091f", "#d6a6ff", "#fff0a6", "#8aa8ff", "lavender-script"),
  theme("snow", "순백 눈꽃", "검증 담당", "테스트와 접근성을 점검합니다.", "QA", "#07121b", "#b9f2ff", "#ffffff", "#75bfff", "snow-test"),
  theme("catmoon", "달고양이", "캐릭터 담당", "NPC와 관계를 살립니다.", "NPC", "#0d0a16", "#ffd1e8", "#ffe9a8", "#adbbff", "moon-dialogue"),
  theme("ember", "진홍 잔불", "전투 담당", "전투와 밸런스를 조정합니다.", "ATK", "#16070b", "#ff9aa8", "#ffe08a", "#ca7cff", "ember-combat"),
  theme("traveler", "여행자 파도", "맵 담당", "탐험 동선과 포탈을 정리합니다.", "MAP", "#06141b", "#6df3ff", "#fff6b7", "#4aa3ff", "traveler-map"),
  theme("foxrain", "여우비 보라", "미스터리 담당", "단서와 이벤트를 연결합니다.", "MYS", "#120b22", "#c69bff", "#ffe891", "#8ed0ff", "fox-mystery"),
  theme("cloud", "푸른 구름", "배포 담당", "웹 공개와 내보내기를 챙깁니다.", "WEB", "#061225", "#7ddcff", "#fff2a2", "#548bff", "cloud-export"),
  theme("flower", "꽃빛 정원", "세계관 담당", "장소와 분위기를 풍성하게 합니다.", "WRD", "#160b17", "#ffb7d5", "#fff0ad", "#e7a1ff", "flower-world"),
  theme("yuzu", "유자 잎새", "MVP 담당", "작게 줄이고 끝까지 완성합니다.", "MVP", "#0d1608", "#d9ff72", "#fff59d", "#8ee7b0", "yuzu-mvp"),
  theme("feather", "새벽 깃털", "기록 담당", "로그와 릴리즈를 정돈합니다.", "LOG", "#0b0f19", "#c6d7ff", "#fff5c7", "#8ab6ff", "feather-archive"),
  theme("neonmint", "네온 민트", "AI/API 담당", "명령과 코드 생성을 연결합니다.", "API", "#061311", "#6bffd7", "#f7ff8a", "#70a7ff", "mint-code"),
];

const palette = [
  { id: "floor", label: "바닥", color: "#394346" },
  { id: "wall", label: "벽", color: "#767f85" },
  { id: "water", label: "물", color: "#4d9fd6" },
  { id: "grass", label: "풀", color: "#6caf69" },
  { id: "danger", label: "위험", color: "#d85f5f" },
  { id: "event", label: "이벤트", color: "#f1c46b" },
];

function theme(id, name, role, focus, symbol, bg, accent, accent2, accent3, style) {
  return {
    id,
    name,
    role,
    focus,
    symbol,
    bg,
    accent,
    accent2,
    accent3,
    style,
    panel: "rgba(255,255,255,.085)",
    strong: "rgba(255,255,255,.145)",
    text: "#f7fbff",
    muted: "#bcc9ea",
    line: "rgba(191,229,255,.22)",
    ink: "#061125",
  };
}

let state = createProject("이름 없는 Canna 게임", "vn", "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.");

const projectName = $("#projectName");
const genreTabs = $("#genreTabs");
const themeGrid = $("#themeGrid");
const toolTabs = $("#toolTabs");
const editorPanel = $("#editorPanel");
const inspector = $("#inspector");
const genreLabel = $("#genreLabel");
const workspaceTitle = $("#workspaceTitle");
const statusText = $("#statusText");
const previewStage = $("#previewStage");
const jsonOutput = $("#jsonOutput");
const assetList = $("#assetList");
const makePrompt = $("#makePrompt");
const assistantOutput = $("#assistantOutput");
const commandInput = $("#commandInput");

function createProject(name, genre, seed) {
  return {
    name,
    genre,
    tab: "대시보드",
    theme: localStorage.getItem("canna-theme") || "crystal",
    seed,
    scope: "1주 프로토타입",
    selectedTile: "floor",
    assets: ["hero_stand.png", "city_rain.png", "soft_piano_loop.ogg"],
    notes: [],
    issues: [
      { title: "GitHub Pages 배포 안정화", type: "배포", priority: "높음" },
      { title: "모바일 한 손 조작 개선", type: "UI", priority: "중간" },
      { title: "샘플 게임 내보내기 강화", type: "내보내기", priority: "중간" },
    ],
    roadmap: [
      { title: "v0.1 프로토타입", done: true },
      { title: "v0.2 프로젝트 빌더", done: false },
      { title: "v0.3 실제 AI 계층", done: false },
      { title: "v0.4 게임 내보내기", done: false },
    ],
    canna: {
      summary: `${genres[genre].label} 템플릿으로 시작한 2D 게임 초안입니다.`,
      coreLoop: ["아이디어 입력", "장르 선택", "데이터 생성", "미리보기", "내보내기"],
      todo: ["플레이 가능한 최소 버전 만들기", "누락 에셋 확인", "첫 5분 플레이 흐름 점검"],
      warnings: ["현재 생성은 로컬 규칙 기반입니다."],
    },
    data: buildData(genre, seed),
  };
}

function buildData(genre, seed) {
  const base = {
    vn: {
      scenes: [
        { name: "시작 장면", speaker: "Canna", text: `${seed} 이야기가 시작됩니다.`, choices: ["따라간다", "멈춰 선다"], flags: ["intro_seen"] },
        { name: "첫 선택", speaker: "안내자", text: "선택은 작지만 결말을 바꿀 수 있어요.", choices: ["진실을 묻는다", "비밀로 둔다"], flags: ["met_guide"] },
      ],
      characters: [
        { name: "Canna", role: "주인공", tone: "조용하지만 단단함", moods: ["보통", "미소", "걱정"] },
        { name: "안내자", role: "조력자", tone: "부드럽고 수상함", moods: ["차분함", "경계"] },
      ],
      variables: [{ key: "호감도", value: 0 }, { key: "열쇠_보유", value: false }],
      endings: ["진 엔딩", "조용한 엔딩", "잃어버린 엔딩"],
    },
    rogue: {
      dungeon: { width: 12, height: 12, tiles: Array.from({ length: 144 }, (_, i) => (i % 11 === 0 || i % 19 === 0 ? "wall" : i % 17 === 0 ? "event" : "floor")) },
      monsters: [{ name: "슬라임", hp: 8, attack: 2, behavior: "배회" }, { name: "박쥐", hp: 6, attack: 3, behavior: "기습" }],
      items: [{ name: "작은 물약", type: "회복", value: 10 }, { name: "독버섯", type: "위험 보상", value: "공격 +3, 체력 -4" }],
      rules: [{ name: "턴 진행", value: "플레이어 후 적" }, { name: "시야", value: "반경 6" }],
    },
    rpg: {
      maps: [{ name: "비 오는 마을", size: "32x24", portals: 3 }, { name: "오래된 역", size: "24x18", portals: 1 }],
      npcs: [{ name: "상인", quest: "잃어버린 소포" }, { name: "시계지기", quest: "멈춘 종" }],
      quests: [{ name: "주인을 찾기", condition: "시계지기와 대화", reward: "낡은 열쇠" }],
    },
    platformer: {
      movement: [{ name: "점프", value: "높이 4.2" }, { name: "대시", value: "재사용 1초" }],
      hazards: [{ name: "비침 가시", timing: "2초" }],
      levels: [{ name: "옥상 시작", goal: "네온 다리까지 도착" }],
    },
    puzzle: {
      board: { width: 8, height: 8 },
      pieces: [{ name: "기억 타일", rule: "짝 맞추기" }, { name: "비의 자물쇠", rule: "열쇠 필요" }],
      goals: [{ name: "문 열기", condition: "잠긴 타일 제거" }],
    },
    card: {
      cards: [{ name: "회상", cost: 1, effect: "카드 2장 뽑기" }, { name: "비의 보호", cost: 2, effect: "방어 8" }],
      relics: [{ name: "작은 단추", effect: "전투마다 첫 카드 비용 0" }],
    },
    shooter: { waves: [{ name: "이슬비", enemies: 12 }], weapons: [{ name: "바늘 광선", cooldown: 0.18 }] },
    rhythm: { chart: { bpm: 128, judgement: "넉넉함" }, notes: [{ type: "탭", beat: 1 }, { type: "홀드", beat: 4 }] },
    farm: { crops: [{ name: "달빛 당근", season: "가을", days: 5 }], npcs: [{ name: "민아", schedule: "아침 시장, 밤 도서관" }] },
    idle: { loops: [{ name: "탐험", reward: "경험치" }], rewards: [{ name: "오프라인 골드", rate: "분당 12" }] },
    metroid: { abilities: [{ name: "벽점프", unlocks: "시계탑" }], locks: [{ name: "파란 문", requires: "벽점프" }] },
    adventure: { clues: [{ name: "젖은 발자국", pointsTo: "오래된 역" }], rooms: [{ name: "아파트", exits: 2 }] },
  };
  return base[genre] || base.vn;
}

function render() {
  applyTheme(state.theme);
  projectName.value = state.name;
  makePrompt.value = state.seed;
  genreLabel.textContent = genres[state.genre].label;
  workspaceTitle.textContent = genres[state.genre].title;
  renderThemes();
  renderGenres();
  renderTabs();
  renderAssets();
  renderEditor();
  renderInspector();
  renderPreview();
  jsonOutput.textContent = JSON.stringify(state, null, 2);
}

function renderThemes() {
  themeGrid.innerHTML = themes.map((t) => `
    <button class="theme-card ${state.theme === t.id ? "active" : ""}" data-theme="${t.id}">
      <span class="theme-head"><span class="theme-symbol">${t.symbol}</span><span><span class="theme-name">${t.name}</span><span class="theme-mood">${t.role}</span></span></span>
      <span class="theme-swatch"><span style="background:${t.accent}"></span><span style="background:${t.accent3}"></span><span style="background:${t.accent2}"></span></span>
    </button>
  `).join("");
  themeGrid.querySelectorAll(".theme-card").forEach((button) => button.addEventListener("click", () => {
    state.theme = button.dataset.theme;
    setStatus(`${currentTheme().name} 테마 적용`);
    render();
  }));
}

function renderGenres() {
  genreTabs.innerHTML = Object.entries(genres).map(([id, g]) => `<button class="genre-button ${state.genre === id ? "active" : ""}" data-genre="${id}">${g.label}</button>`).join("");
  genreTabs.querySelectorAll(".genre-button").forEach((button) => button.addEventListener("click", () => switchGenre(button.dataset.genre)));
}

function renderTabs() {
  toolTabs.innerHTML = genres[state.genre].tabs.map((tab) => `<button class="tab-button ${state.tab === tab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("");
  toolTabs.querySelectorAll(".tab-button").forEach((button) => button.addEventListener("click", () => {
    state.tab = button.dataset.tab;
    render();
  }));
}

function renderAssets() {
  assetList.innerHTML = state.assets.map((asset) => `<div class="asset-item">${escapeHtml(asset)}</div>`).join("");
}

function renderEditor() {
  if (state.tab === "대시보드") return renderDashboard();
  if (state.genre === "rogue" && state.tab === "던전") return renderDungeon();
  renderDataEditor();
}

function renderDashboard() {
  const health = projectHealth();
  const groups = ["말로 만들기", "AI 제작 보조", "장르 템플릿", ...genres[state.genre].groups, "미리보기/테스트", "프로젝트 관리", "Canna다운 기능"];
  editorPanel.innerHTML = `
    <div class="hero-workbench">
      <div>
        <span class="eyebrow">게임 씨앗</span>
        <h3>${escapeHtml(state.seed)}</h3>
        <p>${escapeHtml(state.canna.summary)}</p>
      </div>
      <div class="theme-visual" data-symbol="${currentTheme().symbol}">
        <span class="eyebrow">현재 테마 담당</span>
        <strong>${currentTheme().role}</strong>
        <p>${currentTheme().focus}</p>
      </div>
      <button id="makeMvp" class="command-button">MVP로 줄이기</button>
    </div>

    <div class="studio-grid">
      <article class="studio-card">
        <header><strong>프로젝트 건강도</strong><span>${health.score}%</span></header>
        <div class="progress-shell"><div class="progress-fill" style="width:${health.score}%"></div></div>
        <p>${health.message}</p>
      </article>
      <article class="studio-card">
        <header><strong>다음 추천</strong><span>${state.canna.todo.length}</span></header>
        <div class="list-stack">${state.canna.todo.slice(0, 4).map((item) => `<div class="mini-row">${item}</div>`).join("")}</div>
      </article>
      <article class="studio-card">
        <header><strong>제작 패키지</strong><span>자동 생성</span></header>
        <div class="button-row wrap-row">
          <button id="buildIssues" class="small-button">이슈 후보</button>
          <button id="buildRelease" class="small-button">릴리즈 노트</button>
          <button id="buildSample" class="small-button">샘플 HTML</button>
        </div>
      </article>
    </div>

    <div class="feature-grid">
      ${groups.map(groupCard).join("")}
    </div>
  `;
  $("#makeMvp").addEventListener("click", makeMvp);
  $("#buildIssues").addEventListener("click", buildIssuePlan);
  $("#buildRelease").addEventListener("click", buildReleaseNotes);
  $("#buildSample").addEventListener("click", buildSampleHtml);
}

function groupCard(group) {
  const items = featureAtlas[group] || [];
  return `
    <article class="feature-card">
      <header><strong>${group}</strong><span>${items.length}</span></header>
      <div class="chip-row">${items.slice(0, 7).map((item) => `<button class="chip feature-chip">${item}</button>`).join("")}</div>
    </article>
  `;
}

function renderDataEditor() {
  const rows = rowsForTab();
  editorPanel.innerHTML = `
    <div class="section-title">
      <h3>${state.tab}</h3>
      <button id="addGeneratedItem" class="small-button">자동 항목 추가</button>
    </div>
    <div class="editor-grid">${rows.map(dataCard).join("")}</div>
    <div class="feature-card wide">
      <header><strong>관련 기능</strong><span>${genres[state.genre].groups.length}</span></header>
      <div class="chip-row">${genres[state.genre].groups.flatMap((group) => featureAtlas[group] || []).slice(0, 24).map((item) => `<span class="chip">${item}</span>`).join("")}</div>
    </div>
  `;
  $("#addGeneratedItem").addEventListener("click", addGeneratedItem);
}

function rowsForTab() {
  const map = { 장면: "scenes", 캐릭터: "characters", 변수: "variables", 몬스터: "monsters", 아이템: "items", 규칙: "rules", 퀘스트: "quests", NPC: "npcs", 맵: "maps", 카드: "cards", 유물: "relics", 레벨: "levels", 이동: "movement", "위험 요소": "hazards", 보드: "board", 조각: "pieces", 목표: "goals", 웨이브: "waves", 무기: "weapons", 채보: "chart", 노트: "notes", 작물: "crops", "NPC 일정": "npcs", 성장: "loops", 보상: "rewards", 월드맵: "abilities", 능력: "abilities", 잠금: "locks", 방: "rooms", 단서: "clues" };
  if (state.tab === "선택지" && state.data.scenes) return state.data.scenes.map((scene) => ({ name: scene.name, choices: scene.choices.join(" / ") }));
  const key = map[state.tab];
  const value = key ? state.data[key] : null;
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return Object.entries(value).map(([name, v]) => ({ name, value: v }));
  return Object.entries(state.data).map(([name, value]) => ({ name, value: Array.isArray(value) ? `${value.length}개 항목` : JSON.stringify(value) }));
}

function dataCard(row) {
  return `<article class="list-row"><header><strong>${escapeHtml(row.name || row.key || "항목")}</strong><span class="muted">${Object.keys(row).length}개 필드</span></header><div class="chip-row">${Object.entries(row).map(([key, value]) => `<span class="chip">${escapeHtml(key)}: ${escapeHtml(formatValue(value))}</span>`).join("")}</div></article>`;
}

function renderDungeon() {
  editorPanel.innerHTML = `
    <div class="section-title"><h3>던전 맵</h3><button id="randomDungeon" class="small-button">자동 생성</button></div>
    <div class="map-editor">
      <div id="tileMap" class="tile-map"></div>
      <div><div class="panel-title">팔레트</div><div class="palette">${palette.map((tile) => `<button class="swatch ${state.selectedTile === tile.id ? "active" : ""}" data-tile="${tile.id}" title="${tile.label}" style="background:${tile.color}"></button>`).join("")}</div></div>
    </div>
  `;
  const map = $("#tileMap");
  state.data.dungeon.tiles.forEach((tileId, index) => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.style.background = palette.find((entry) => entry.id === tileId)?.color || "#232b2e";
    tile.addEventListener("click", () => {
      state.data.dungeon.tiles[index] = state.selectedTile;
      render();
    });
    map.append(tile);
  });
  document.querySelectorAll(".swatch").forEach((button) => button.addEventListener("click", () => {
    state.selectedTile = button.dataset.tile;
    render();
  }));
  $("#randomDungeon").addEventListener("click", () => {
    state.data.dungeon.tiles = state.data.dungeon.tiles.map((_, i) => (i % 12 === 0 || i % 12 === 11 || i < 12 || i > 131 ? "wall" : Math.random() > 0.84 ? "wall" : Math.random() > 0.92 ? "event" : "floor"));
    setStatus("던전 자동 생성됨");
    render();
  });
}

function renderInspector() {
  const health = projectHealth();
  inspector.innerHTML = `
    <div class="panel-title">Canna 제안</div>
    <div class="property-row"><label>현재 장르</label><strong>${genres[state.genre].label}</strong></div>
    <div class="property-row"><label>범위</label><strong>${state.scope}</strong></div>
    <div class="property-row theme-duty"><label>테마 담당</label><strong>${currentTheme().role}</strong><span>${currentTheme().focus}</span></div>
    <div class="property-row"><label>건강도</label><strong>${health.score}%</strong><span>${health.message}</span></div>
    <div class="property-row"><label>핵심 루프</label><div class="chip-row">${state.canna.coreLoop.map((item) => `<span class="chip">${item}</span>`).join("")}</div></div>
    <div class="property-row"><label>로드맵</label><div class="list-stack">${state.roadmap.map((item) => `<div class="mini-row">${item.done ? "완료" : "예정"} · ${item.title}</div>`).join("")}</div></div>
    <div class="property-row"><label>이슈 후보</label><div class="list-stack">${state.issues.slice(0, 4).map((issue) => `<div class="mini-row">${issue.priority} · ${issue.title}</div>`).join("")}</div></div>
  `;
}

function renderPreview() {
  if (state.genre === "vn") {
    const scene = state.data.scenes[0];
    previewStage.innerHTML = `<div class="vn-stage"><div class="vn-cast"><div class="standee">${scene.speaker.slice(0, 1)}</div></div><div class="dialogue-box"><strong>${escapeHtml(scene.speaker)}</strong><p>${escapeHtml(scene.text)}</p><div class="chip-row">${scene.choices.map((choice) => `<span class="chip">${escapeHtml(choice)}</span>`).join("")}</div></div></div>`;
    return;
  }
  if (state.genre === "rogue") {
    previewStage.innerHTML = `<div class="rogue-stage">${state.data.dungeon.tiles.slice(0, 64).map((tileId, index) => {
      const icon = index === 9 ? "@" : index === 27 ? "!" : "";
      const color = palette.find((entry) => entry.id === tileId)?.color || "#222a2d";
      return `<div class="rogue-cell" style="background:${color}">${icon}</div>`;
    }).join("")}</div>`;
    return;
  }
  previewStage.innerHTML = `<div class="preview-board"><h3>${genres[state.genre].label}</h3><p>${escapeHtml(state.seed)}</p><div class="chip-row">${genres[state.genre].groups.flatMap((group) => featureAtlas[group] || []).slice(0, 10).map((item) => `<span class="chip">${item}</span>`).join("")}</div></div>`;
}

function switchGenre(id) {
  state.genre = id;
  state.tab = "대시보드";
  state.data = buildData(id, state.seed);
  state.canna.summary = `${genres[id].label} 템플릿으로 다시 구성했습니다.`;
  setStatus(`${genres[id].label} 모드`);
  render();
}

function generateFromPrompt(remix = false) {
  const prompt = makePrompt.value.trim() || "작은 2D 게임";
  const genre = remix ? nextGenre() : inferGenre(prompt);
  state = createProject(projectName.value || "이름 없는 Canna 게임", genre, prompt);
  state.canna.summary = `"${prompt}"에서 생성한 ${genres[genre].label} 초안입니다.`;
  setAssistant(`생성 완료\n장르: ${genres[genre].label}\n다음 작업: ${state.canna.todo.join(", ")}`);
  render();
}

function runCommand() {
  const command = commandInput.value.trim();
  if (!command) return;
  const text = command.toLowerCase();
  if (/어둡|호러|무섭/.test(text)) {
    state.theme = "foxrain";
    state.canna.summary = "더 어둡고 미스터리한 분위기로 조정했습니다.";
    state.canna.todo.unshift("첫 장면에 단서와 불안한 소리 이벤트 추가");
  } else if (/쉽|초보|mvp|줄/.test(text)) {
    makeMvp(false);
  } else if (/선택지|분기/.test(text) && state.data.scenes) {
    state.data.scenes.forEach((scene) => {
      scene.choices = Array.from(new Set([...(scene.choices || []), "조심스럽게 살핀다", "바로 행동한다"]));
    });
    state.canna.todo.unshift("추가된 선택지의 결과 장면 연결");
  } else if (/아이템/.test(text)) {
    ensureArray("items").push({ name: "자동 생성 아이템", type: "특수", value: "상황을 바꾸는 효과" });
  } else if (/샘플|html|내보내/.test(text)) {
    buildSampleHtml();
  } else if (/이슈|할 일/.test(text)) {
    buildIssuePlan();
  } else if (/릴리즈|노트/.test(text)) {
    buildReleaseNotes();
  } else {
    state.notes.unshift({ text: command, at: new Date().toLocaleString() });
    setAssistant(`명령을 기록했습니다.\n"${command}"\n아직 전용 처리 규칙은 없지만 프로젝트 노트에 남겼습니다.`);
  }
  commandInput.value = "";
  render();
}

function makeMvp(shouldRender = true) {
  state.scope = "1시간 안에 플레이 가능한 MVP";
  state.canna.todo = ["첫 화면 만들기", "핵심 상호작용 1개", "성공/실패 조건", "웹 게임 내보내기"];
  state.issues.unshift({ title: "MVP 완료 조건 잠그기", type: "범위", priority: "높음" });
  setAssistant("MVP 범위로 줄였습니다.\n기능을 늘리기보다 플레이 가능한 최소 루프를 먼저 완성하는 상태입니다.");
  setStatus("MVP 범위로 정리됨");
  if (shouldRender) render();
}

function buildIssuePlan() {
  const generated = [
    { title: `${genres[state.genre].label} 첫 플레이 루프 만들기`, type: "기능", priority: "높음" },
    { title: "모바일에서 버튼 간격 점검", type: "UI", priority: "중간" },
    { title: "JSON 내보내기 결과 문서화", type: "문서", priority: "낮음" },
    { title: "샘플 게임과 Canna 데이터 연결", type: "내보내기", priority: "중간" },
  ];
  state.issues = [...generated, ...state.issues].slice(0, 12);
  setAssistant(`이슈 후보 ${generated.length}개를 만들었습니다.\n${generated.map((item) => `- [${item.priority}] ${item.title}`).join("\n")}`);
  render();
}

function buildReleaseNotes() {
  const note = `# ${state.name} 릴리즈 초안\n\n## 핵심\n- 장르: ${genres[state.genre].label}\n- 범위: ${state.scope}\n- 테마: ${currentTheme().name}\n\n## 포함 기능\n${genres[state.genre].groups.map((group) => `- ${group}`).join("\n")}\n\n## 다음 작업\n${state.canna.todo.map((item) => `- ${item}`).join("\n")}`;
  setAssistant(note);
}

function buildSampleHtml() {
  const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(state.name)}</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#070b1f;color:#f7fbff;font-family:system-ui}.box{width:min(720px,calc(100% - 24px));border:1px solid rgba(191,229,255,.25);border-radius:18px;padding:24px;background:rgba(255,255,255,.08)}button{margin:8px 8px 0 0;padding:10px 12px;border:0;border-radius:10px;background:#8be9fd;color:#061125;font-weight:800}</style></head><body><main class="box"><h1>${escapeHtml(state.name)}</h1><p>${escapeHtml(state.seed)}</p><p>장르: ${genres[state.genre].label}</p><button onclick="alert('Canna 샘플 플레이 시작')">시작</button><button onclick="alert('JSON 데이터와 연결 예정')">데이터 보기</button></main></body></html>`;
  setAssistant(`샘플 HTML 초안\n\n${html}`);
}

function addGeneratedItem() {
  const row = { name: `자동 생성 ${state.tab}`, idea: state.seed, status: "초안" };
  const target = ensureArray(tabToKey(state.tab));
  target.push(row);
  setStatus("항목 추가됨");
  render();
}

function projectHealth() {
  let score = 35;
  if (state.seed.length > 12) score += 10;
  if (state.assets.length >= 3) score += 10;
  if (state.canna.todo.length > 0) score += 10;
  if (state.issues.length > 0) score += 10;
  if (state.scope.includes("MVP")) score += 10;
  if (JSON.stringify(state.data).length > 500) score += 15;
  score = Math.min(score, 100);
  const message = score >= 80 ? "보여줄 수 있는 프로토타입에 가깝습니다." : score >= 60 ? "핵심 구조는 좋고, 플레이 루프가 더 필요합니다." : "아이디어는 있으니 MVP 조건을 먼저 잠그면 좋습니다.";
  return { score, message };
}

function inferGenre(prompt) {
  const text = prompt.toLowerCase();
  const found = Object.entries(genres).find(([, g]) => g.keywords.some((keyword) => text.includes(keyword)));
  return found ? found[0] : "vn";
}

function nextGenre() {
  const ids = Object.keys(genres);
  return ids[(ids.indexOf(state.genre) + 1) % ids.length];
}

function tabToKey(tab) {
  return { 장면: "scenes", 캐릭터: "characters", 변수: "variables", 몬스터: "monsters", 아이템: "items", 규칙: "rules", 퀘스트: "quests", NPC: "npcs", 맵: "maps", 카드: "cards", 유물: "relics" }[tab] || Object.keys(state.data).find((key) => Array.isArray(state.data[key])) || "items";
}

function ensureArray(key) {
  if (!state.data[key]) state.data[key] = [];
  if (!Array.isArray(state.data[key])) state.data[key] = [];
  return state.data[key];
}

function currentTheme() {
  return themes.find((themeItem) => themeItem.id === state.theme) || themes[0];
}

function applyTheme(id) {
  const t = themes.find((themeItem) => themeItem.id === id) || themes[0];
  state.theme = t.id;
  localStorage.setItem("canna-theme", t.id);
  const vars = { bg: t.bg, panel: t.panel, "panel-strong": t.strong, "panel-2": t.strong, line: t.line, "line-soft": t.line, text: t.text, muted: t.muted, accent: t.accent, "accent-2": t.accent2, "accent-3": t.accent3, "accent-ink": t.ink, blue: t.accent3, rose: t.accent2, green: t.accent };
  Object.entries(vars).forEach(([key, value]) => document.documentElement.style.setProperty(`--${key}`, value));
  document.body.dataset.themeStyle = t.style;
  document.body.dataset.themeSymbol = t.symbol;
}

function downloadJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.name.replace(/\s+/g, "-").toLowerCase()}.canna.json`;
  link.click();
  URL.revokeObjectURL(url);
  setStatus("JSON 내보내기 완료");
}

function saveProject() {
  localStorage.setItem("canna-project", JSON.stringify(state));
  setStatus("브라우저에 저장됨");
}

function setStatus(text) {
  statusText.textContent = text;
}

function setAssistant(text) {
  assistantOutput.textContent = text;
}

function formatValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value && typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function normalizeState() {
  const fallback = createProject("이름 없는 Canna 게임", "vn", "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.");
  if (!state || typeof state !== "object") state = fallback;
  if (!genres[state.genre]) state.genre = "vn";
  if (!state.name) state.name = fallback.name;
  if (!state.seed) state.seed = fallback.seed;
  if (!state.scope) state.scope = fallback.scope;
  if (!state.theme || !themes.some((item) => item.id === state.theme)) state.theme = localStorage.getItem("canna-theme") || "crystal";
  if (!state.tab || !genres[state.genre].tabs.includes(state.tab)) state.tab = "대시보드";
  if (!state.data || typeof state.data !== "object") state.data = buildData(state.genre, state.seed);
  if (!Array.isArray(state.assets)) state.assets = fallback.assets;
  if (!Array.isArray(state.notes)) state.notes = [];
  if (!Array.isArray(state.issues)) state.issues = fallback.issues;
  if (!Array.isArray(state.roadmap)) state.roadmap = fallback.roadmap;
  if (!state.canna || typeof state.canna !== "object") state.canna = fallback.canna;
  if (!state.canna.summary) state.canna.summary = fallback.canna.summary;
  if (!Array.isArray(state.canna.coreLoop)) state.canna.coreLoop = fallback.canna.coreLoop;
  if (!Array.isArray(state.canna.todo)) state.canna.todo = fallback.canna.todo;
  if (!Array.isArray(state.canna.warnings)) state.canna.warnings = fallback.canna.warnings;
  if (state.genre === "rogue" && (!state.data.dungeon || !Array.isArray(state.data.dungeon.tiles))) {
    state.data = buildData("rogue", state.seed);
  }
}

function handleFeatureClick(label) {
  const text = label.trim();
  if (!text) return;
  state.notes.unshift({ text: `기능 선택: ${text}`, at: new Date().toLocaleString() });
  if (!state.canna.todo.includes(text)) state.canna.todo.unshift(text);
  setAssistant(`기능을 선택했습니다: ${text}\n오른쪽 할 일과 프로젝트 노트에 추가했습니다.`);
  setStatus("기능 선택됨");
  render();
}

document.addEventListener("click", (event) => {
  const featureButton = event.target.closest(".feature-chip");
  if (featureButton) {
    handleFeatureClick(featureButton.textContent);
  }
});

projectName.addEventListener("input", () => {
  state.name = projectName.value;
  jsonOutput.textContent = JSON.stringify(state, null, 2);
});

$("#newProject").addEventListener("click", () => {
  state = createProject("이름 없는 Canna 게임", "vn", "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.");
  setAssistant("새 프로젝트를 만들었습니다.");
  render();
});

$("#saveProject").addEventListener("click", saveProject);
$("#exportProject").addEventListener("click", downloadJson);
$("#generateFromPrompt").addEventListener("click", () => generateFromPrompt(false));
$("#remixSeed").addEventListener("click", () => generateFromPrompt(true));
$("#playPreview").addEventListener("click", () => {
  setStatus("미리보기 갱신");
  renderPreview();
});
$("#runCommand").addEventListener("click", runCommand);
commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runCommand();
});
$("#addAsset").addEventListener("click", () => {
  const input = $("#assetName");
  const value = input.value.trim();
  if (!value) return;
  state.assets.push(value);
  input.value = "";
  render();
});
$("#importProject").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    state = JSON.parse(await file.text());
    normalizeState();
    setAssistant("JSON 프로젝트를 불러왔습니다.");
    render();
  } catch {
    setAssistant("JSON을 읽을 수 없습니다.");
  }
});

const saved = localStorage.getItem("canna-project");
if (saved) {
  try {
    state = JSON.parse(saved);
    normalizeState();
  } catch {
    localStorage.removeItem("canna-project");
  }
}

normalizeState();
setAssistant("Canna가 준비됐습니다. 상단 명령창에 '쉬운 MVP', '선택지 늘려줘', '샘플 내보내기'처럼 입력해 보세요.");
render();
