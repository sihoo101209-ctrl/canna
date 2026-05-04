const genreConfigs = {
  vn: {
    label: "비주얼 노벨",
    title: "비주얼 노벨 제작",
    tabs: ["대시보드", "장면", "캐릭터", "선택지", "변수", "스토리 도구"],
    featureGroups: ["비주얼 노벨 기능", "스토리 구조", "대화 특화", "연출"],
  },
  rogue: {
    label: "로그라이크",
    title: "로그라이크 제작",
    tabs: ["대시보드", "던전", "몬스터", "아이템", "전투", "규칙"],
    featureGroups: ["로그라이크 기능", "전투/밸런스", "AI/적 행동", "아이템/경제"],
  },
  rpg: {
    label: "탑다운 RPG",
    title: "탑다운 RPG 제작",
    tabs: ["대시보드", "맵", "NPC", "퀘스트", "데이터베이스", "이벤트"],
    featureGroups: ["탑다운 RPG 기능", "2D 맵", "퀘스트", "월드빌딩"],
  },
  platformer: {
    label: "플랫포머",
    title: "플랫포머 제작",
    tabs: ["대시보드", "레벨", "이동", "위험 요소", "카메라", "보스"],
    featureGroups: ["플랫포머", "레벨 디자인", "테스트/검증"],
  },
  puzzle: {
    label: "퍼즐",
    title: "퍼즐 제작",
    tabs: ["대시보드", "보드", "조각", "목표", "검증", "튜토리얼"],
    featureGroups: ["퍼즐 기능", "레벨 디자인", "접근성"],
  },
  card: {
    label: "카드/덱빌딩",
    title: "카드/덱빌딩 제작",
    tabs: ["대시보드", "카드", "덱", "유물", "전투 상황", "밸런스"],
    featureGroups: ["카드/덱빌딩", "전투/밸런스", "아이템/경제"],
  },
  shooter: {
    label: "슈팅",
    title: "슈팅 게임 제작",
    tabs: ["대시보드", "웨이브", "무기", "적", "패턴", "점수"],
    featureGroups: ["AI 제작 보조", "AI/적 행동", "레벨 디자인"],
  },
  rhythm: {
    label: "리듬",
    title: "리듬 게임 제작",
    tabs: ["대시보드", "채보", "오디오", "노트", "판정", "접근성"],
    featureGroups: ["리듬 게임", "접근성", "테스트/검증"],
  },
  farm: {
    label: "생활 시뮬레이션",
    title: "농장/생활 시뮬레이션 제작",
    tabs: ["대시보드", "작물", "달력", "NPC 일정", "제작", "경제"],
    featureGroups: ["농장/생활 시뮬레이션", "월드빌딩", "아이템/경제"],
  },
  idle: {
    label: "방치형 RPG",
    title: "방치형 RPG 제작",
    tabs: ["대시보드", "성장", "보상", "스킬", "반복 구조", "밸런스"],
    featureGroups: ["전투/밸런스", "아이템/경제", "제작 워크플로우"],
  },
  metroid: {
    label: "메트로배니아",
    title: "메트로배니아 제작",
    tabs: ["대시보드", "월드맵", "능력", "잠금", "보스", "동선"],
    featureGroups: ["2D 맵", "플랫포머", "레벨 디자인"],
  },
  adventure: {
    label: "포인트 앤 클릭",
    title: "포인트 앤 클릭 어드벤처 제작",
    tabs: ["대시보드", "방", "단서", "인벤토리", "대화", "미스터리"],
    featureGroups: ["호러/미스터리", "퀘스트", "대화 특화"],
  },
};

const featureAtlas = {
  "말로 만들기": ["자연어로 새 게임 만들기", "장르 자동 선택", "분위기/난이도/선택지 수정", "만든 내용 요약", "부족한 설정 질문", "이름 자동 생성", "장면/던전/맵/퀘스트 생성", "기존 프로젝트 이어서 생성", "다른 장르로 변환"],
  "AI 제작 보조": ["한 문장 아이디어를 기획서로 확장", "기획서를 데이터 구조로 변환", "다음 작업 추천", "장르별 주의점 경고", "핵심 루프 추출", "재미가 약한 부분 분석", "목표가 흐린 부분 찾기", "스타일 변환", "개발 난이도 예측", "범위 축소", "초보자 설명", "고급 편집"],
  "장르 템플릿": ["비주얼 노벨", "로그라이크", "탑다운 RPG", "플랫포머", "퍼즐", "카드/덱빌딩", "슈팅", "리듬", "생활 시뮬레이션", "방치형 RPG", "메트로배니아", "포인트 앤 클릭"],
  "비주얼 노벨 기능": ["장면 편집", "대사 편집", "선택지 분기", "캐릭터 표정", "배경 전환", "호감도/플래그 변수", "조건부 대사", "엔딩 분기", "대사 흐름 차트", "시나리오 초안", "말투 유지", "음악/효과음", "텍스트 박스 스타일"],
  "로그라이크 기능": ["던전 자동 생성", "방/복도 규칙", "층별 테마", "몬스터 테이블", "아이템 드롭 테이블", "장비/소모품/유물", "턴 기반 규칙", "시야/안개", "함정", "상점", "보스방", "랜덤 이벤트", "난이도 곡선", "전투 로그", "시드 고정"],
  "탑다운 RPG 기능": ["타일맵 편집", "NPC 배치", "퀘스트 편집", "상점 편집", "대화/선택지", "포탈/문 이동", "전투 인카운터", "지역별 배경음", "아이템/스킬/스탯 DB", "파티원 설정", "컷신 이벤트"],
  "플랫포머": ["레벨 편집", "발판/벽/사다리", "점프 높이/중력", "적 이동 패턴", "체크포인트", "수집품", "카메라 영역", "낙사 구역", "움직이는 발판", "보스 패턴", "조작감 프리셋", "점프 버퍼", "코요테 타임", "대시", "벽점프"],
  "퍼즐 기능": ["보드 크기", "블록/타일 규칙", "매치 조건", "승리/패배 조건", "제한 턴/시간", "힌트 시스템", "레벨 난이도 생성", "퍼즐 검증", "풀이 가능성 테스트", "단계별 튜토리얼"],
  "카드/덱빌딩": ["카드 DB", "비용/효과/희귀도", "덱 규칙", "적 행동 패턴", "유물/패시브", "전투 턴 흐름", "카드 효과 미리보기", "밸런스 비교", "카드 설명 생성", "키워드 시스템", "시너지 그래프", "덱 아키타입", "콤보 감지"],
  "에셋 기능": ["이미지 업로드", "스프라이트 시트 자르기", "애니메이션 프레임", "에셋 분류", "사운드 등록", "음악 루프", "에셋 태그", "사용하지 않는 에셋 찾기", "플레이스홀더 생성", "색상 팔레트 추출"],
  "노코드/로우코드 로직": ["이벤트 블록", "조건/결과 편집", "변수 시스템", "인벤토리 조건", "스위치/플래그", "타이머", "확률 분기", "반복 이벤트", "컷신 순서", "대화 조건", "아이템 사용 효과", "적 AI 규칙"],
  "실제 코드 생성": ["HTML/JS 게임 생성", "Phaser 프로젝트 생성", "Godot JSON", "Unity 데이터", "게임 루프 코드", "장르별 조작 코드", "저장/불러오기 코드", "입력 설정", "빌드 파일 묶기"],
  "미리보기/테스트": ["즉시 플레이", "장면 미리보기", "던전 시뮬레이션", "전투 시뮬레이션", "선택지 경로 테스트", "난이도 테스트", "자동 버그 체크", "누락 에셋 경고", "연결 안 된 장면 경고", "도달 불가능한 엔딩 체크"],
  "프로젝트 관리": ["프로젝트 저장", "버전 기록", "스냅샷", "되돌리기/다시 실행", "템플릿 저장", "프리셋", "프로젝트 복제", "작업 체크리스트", "개발 로그", "릴리즈 노트"],
  "UI 아이디어": ["말로 만들기 입력창", "장르별 대시보드", "경고/할 일 패널", "검색 명령 팔레트", "단축키", "다크/라이트 테마", "JSON/콘솔", "AI 제안"],
  "Canna다운 기능": ["재미 포인트 찾기", "초보자용으로 줄이기", "1시간 범위 추천", "스토리 감정 강화", "아이템 여러 개 생성", "빠진 시스템 찾기", "플레이 가능한 최소 버전 만들기", "내보낼 파일 정리", "게임 씨앗 변환"],
  "월드빌딩": ["세계관 백과", "지역/세력/역사", "캐릭터 관계도", "사건 타임라인", "장소 분위기 태그", "지역별 몬스터/아이템 추천", "세계관 충돌 체크", "이름 규칙", "말투/용어 사전", "마을 생성기"],
  "스토리 구조": ["3막 구조", "에피소드 구조", "챕터 관리", "장면 목적", "갈등/해결 체크", "떡밥/회수", "감정 곡선", "선택지 결과 추적", "엔딩 조건", "등장량 체크", "대사 길이 균형"],
  "대화 특화": ["말투 프로필", "대사 다듬기", "같은 의미 다른 말투", "선택지 성격 차이", "숨겨진 호감도", "조건부 대사 추천", "랜덤 잡담", "퀘스트 상태별 대사", "전투 전후 대사", "음성 대본"],
  "연출": ["카메라 흔들림", "화면 페이드", "컷인", "스탠딩 이동", "말풍선 위치", "배경 파티클", "날씨 효과", "시간대 전환", "화면 필터", "장면 전환", "연출 타임라인", "사운드 큐"],
  "2D 맵": ["타일 자동 배치", "오토타일", "충돌 레이어", "장식 레이어", "그림자 레이어", "지형 브러시", "랜덤 장식 브러시", "도로/강/벽 연결", "미니맵", "포탈 연결", "맵 이동 그래프", "도달 불가 검사"],
  "레벨 디자인": ["난이도 곡선", "튜토리얼 구간", "위험/보상 구역", "체크포인트 거리", "플레이 시간 예측", "적 배치 밀도", "아이템 배치 밀도", "휴식 지점", "반복 플레이성", "목표 명확성"],
  "전투/밸런스": ["체력/공격/방어 계산", "턴 수 예측", "DPS", "생존 시간", "적 조합 시뮬레이션", "아이템 기대값", "드롭 확률", "경험치 곡선", "스킬 쿨타임", "상태이상", "보스 페이즈", "난이도 분석"],
  "AI/적 행동": ["순찰 경로", "추적 범위", "도망 조건", "공격 패턴", "상태 머신", "행동 트리", "확률 행동", "무리 행동", "보스 타임라인", "시야 범위", "소리 감지", "행동 로그"],
  "아이템/경제": ["제작법", "상점 가격", "판매/구매 비율", "희귀도 테이블", "랜덤 옵션", "접두사/접미사", "인벤토리 크기", "무게", "재화", "보상 상자", "확률 표시", "파밍 시간"],
  "퀘스트": ["퀘스트 체인", "선행 조건", "완료 조건", "보상", "실패 조건", "반복 퀘스트", "숨겨진 퀘스트", "퀘스트 로그", "목표 추적 UI", "흐름 검사", "NPC별 퀘스트"],
  "리듬 게임": ["BPM", "노트 배치", "박자 스냅", "판정선", "롱노트", "패턴 난이도", "오디오 파형", "콤보/점수", "판정 범위", "자동 노트 초안", "구간 반복", "피로도 분석"],
  "농장/생활 시뮬레이션": ["작물 성장표", "계절", "날씨", "NPC 일정", "선물 취향", "호감도 이벤트", "제작/요리", "집 꾸미기", "낚시 테이블", "광산 층", "하루 시간표", "수익 밸런스"],
  "호러/미스터리": ["단서 보드", "용의자 관계도", "증거-결론 연결", "공포 연출", "추격 이벤트", "안전 구역", "랜덤 소리", "강도 조절", "논리 오류 검사", "놓친 단서 추적"],
  "제작 워크플로우": ["할 일 자동 생성", "MVP 범위", "우선순위", "버그 목록", "플레이테스트 노트", "피드백 정리", "변경 기록", "릴리즈 체크리스트", "소개 문구", "개발 블로그"],
  "협업": ["역할별 보기", "작가 모드", "레벨 디자이너 모드", "아티스트 모드", "밸런스 모드", "댓글", "변경 제안", "승인 흐름", "작업자별 할 일", "충돌 해결"],
  "현지화": ["다국어 문자열", "대사 길이 경고", "폰트 문자 체크", "문화권 메모", "변수 문장 검증", "번역 누락", "언어별 UI", "음성 파일 연결", "CSV/XLSX 내보내기"],
  "접근성": ["색약 팔레트 검사", "자막 설정", "글자 크기", "화면 흔들림 줄이기", "플래시 경고", "키 리매핑", "한 손 조작", "난이도 보조", "텍스트 자동 진행 끄기", "리듬 판정 보조"],
  "테스트/검증": ["모든 선택지 경로", "데드엔드 체크", "누락 이미지/사운드", "변수명 검사", "무한 루프 이벤트", "클리어 가능성", "자동 플레이 테스트", "밸런스 시뮬레이션", "시드 비교", "저장 호환성"],
  "내보내기": ["웹 게임", "모바일 웹", "데스크톱 앱", "Godot 데이터", "Unity 데이터", "Phaser 프로젝트", "LÖVE2D", "Ren'Py", "Twine", "Tiled JSON", "Aseprite 태그", "Ink/Yarn Spinner"],
  "마켓/커뮤니티": ["템플릿 공유", "장르 프리셋", "아이템 팩", "몬스터 팩", "대화 템플릿", "퍼즐 레벨", "샘플 프로젝트", "주간 챌린지", "프로젝트 리믹스", "플러그인 시스템"],
};

const palette = [
  { id: "floor", label: "바닥", color: "#394346" },
  { id: "wall", label: "벽", color: "#767f85" },
  { id: "water", label: "물", color: "#4d9fd6" },
  { id: "grass", label: "풀", color: "#6caf69" },
  { id: "danger", label: "위험", color: "#d85f5f" },
  { id: "event", label: "이벤트", color: "#f1c46b" },
];

const themes = [
  { id: "crystal", name: "푸른 수정", mood: "고요한 무대, 기억 조각, 잔광", bg: "#070b1f", panel: "rgba(255,255,255,.085)", strong: "rgba(255,255,255,.145)", text: "#f7fbff", muted: "#bcc9ea", line: "rgba(191,229,255,.22)", accent: "#8be9fd", accent2: "#fff1a8", accent3: "#b69cff", ink: "#061125", rose: "#ffb3d9" },
  { id: "lavender", name: "별빛 라벤더", mood: "작은 별, 보랏빛, 장난스러운 박자", bg: "#10091f", panel: "rgba(255,255,255,.088)", strong: "rgba(255,255,255,.15)", text: "#fff8ff", muted: "#d9c7f1", line: "rgba(224,190,255,.25)", accent: "#d6a6ff", accent2: "#fff0a6", accent3: "#8aa8ff", ink: "#16071f", rose: "#ff9fd9" },
  { id: "snow", name: "순백 눈꽃", mood: "깨끗한 설원, 차분함, 투명한 집중", bg: "#07121b", panel: "rgba(255,255,255,.095)", strong: "rgba(255,255,255,.16)", text: "#f7fcff", muted: "#bed8e8", line: "rgba(205,241,255,.25)", accent: "#b9f2ff", accent2: "#ffffff", accent3: "#75bfff", ink: "#06131a", rose: "#c6f1ff" },
  { id: "catmoon", name: "달고양이", mood: "포근한 밤, 호기심, 부드러운 리듬", bg: "#0d0a16", panel: "rgba(255,255,255,.09)", strong: "rgba(255,255,255,.155)", text: "#fffaf7", muted: "#e0cfc9", line: "rgba(255,221,238,.24)", accent: "#ffd1e8", accent2: "#ffe9a8", accent3: "#adbbff", ink: "#201116", rose: "#ff9ecb" },
  { id: "ember", name: "진홍 잔불", mood: "집중력, 강한 돌파, 무대의 열", bg: "#16070b", panel: "rgba(255,255,255,.087)", strong: "rgba(255,255,255,.15)", text: "#fff8f8", muted: "#e4c3c6", line: "rgba(255,175,175,.25)", accent: "#ff9aa8", accent2: "#ffe08a", accent3: "#ca7cff", ink: "#26080c", rose: "#ff6f91" },
  { id: "traveler", name: "여행자 파도", mood: "바다, 이동, 낯선 지도, 탐험", bg: "#06141b", panel: "rgba(255,255,255,.085)", strong: "rgba(255,255,255,.145)", text: "#f4feff", muted: "#b6dce5", line: "rgba(150,238,255,.25)", accent: "#6df3ff", accent2: "#fff6b7", accent3: "#4aa3ff", ink: "#04161d", rose: "#99ffd9" },
  { id: "foxrain", name: "여우비 보라", mood: "비, 번개, 숨은 장난, 신비함", bg: "#120b22", panel: "rgba(255,255,255,.088)", strong: "rgba(255,255,255,.15)", text: "#fff9ff", muted: "#d9c5ee", line: "rgba(211,170,255,.25)", accent: "#c69bff", accent2: "#ffe891", accent3: "#8ed0ff", ink: "#160923", rose: "#ffb1e1" },
  { id: "cloud", name: "푸른 구름", mood: "하늘, 속도, 청량한 집중", bg: "#061225", panel: "rgba(255,255,255,.085)", strong: "rgba(255,255,255,.145)", text: "#f5fbff", muted: "#b8d0eb", line: "rgba(173,208,255,.25)", accent: "#7ddcff", accent2: "#fff2a2", accent3: "#548bff", ink: "#061225", rose: "#b7d9ff" },
  { id: "flower", name: "꽃빛 정원", mood: "꽃, 따뜻한 장면, 밝은 회복", bg: "#160b17", panel: "rgba(255,255,255,.09)", strong: "rgba(255,255,255,.155)", text: "#fff9fb", muted: "#eccbd6", line: "rgba(255,190,220,.25)", accent: "#ffb7d5", accent2: "#fff0ad", accent3: "#e7a1ff", ink: "#221017", rose: "#ff7fb5" },
  { id: "yuzu", name: "유자 잎새", mood: "상큼함, 새싹, 가벼운 시작", bg: "#0d1608", panel: "rgba(255,255,255,.088)", strong: "rgba(255,255,255,.15)", text: "#fbfff6", muted: "#d4e6c0", line: "rgba(223,255,150,.25)", accent: "#d9ff72", accent2: "#fff59d", accent3: "#8ee7b0", ink: "#142006", rose: "#ffd18a" },
  { id: "feather", name: "새벽 깃털", mood: "조용한 시작, 바람, 미세한 떨림", bg: "#0b0f19", panel: "rgba(255,255,255,.085)", strong: "rgba(255,255,255,.145)", text: "#f8fbff", muted: "#c9d2e5", line: "rgba(204,220,255,.25)", accent: "#c6d7ff", accent2: "#fff5c7", accent3: "#8ab6ff", ink: "#0b1020", rose: "#e7c2ff" },
  { id: "neonmint", name: "네온 민트", mood: "작업실, 전자음, 빠른 프로토타입", bg: "#061311", panel: "rgba(255,255,255,.082)", strong: "rgba(255,255,255,.14)", text: "#f2fffb", muted: "#b2d8cf", line: "rgba(117,255,218,.23)", accent: "#6bffd7", accent2: "#f7ff8a", accent3: "#70a7ff", ink: "#031815", rose: "#ff9bd2" },
];

const themeMeta = {
  crystal: {
    style: "crystal-stage",
    symbol: "MAP",
    role: "구조 설계 담당",
    focus: "장르 템플릿, 기능 아틀라스, 프로젝트 구조 정리에 강합니다.",
    traits: ["구조", "기록", "정리"],
    features: ["장르 템플릿", "기능 아틀라스", "JSON 내보내기", "프로젝트 관리"],
    visual: "푸른 수정판 위에 게임 구조가 층층이 정리되는 느낌",
  },
  lavender: {
    style: "lavender-script",
    symbol: "VN",
    role: "스토리와 대화 담당",
    focus: "비주얼 노벨, 캐릭터 말투, 선택지 분기, 감정 곡선에 잘 어울립니다.",
    traits: ["서사", "선택지", "감정"],
    features: ["비주얼 노벨 기능", "스토리 구조", "대화 특화", "연출"],
    visual: "보랏빛 대본 조각과 별빛 선택지가 떠 있는 배경",
  },
  snow: {
    style: "snow-test",
    symbol: "QA",
    role: "검증과 접근성 담당",
    focus: "누락된 에셋, 도달 불가능한 엔딩, 접근성 체크를 차분히 살핍니다.",
    traits: ["검증", "접근성", "명확함"],
    features: ["미리보기/테스트", "테스트/검증", "접근성", "현지화"],
    visual: "흰 격자와 투명한 체크 포인트가 놓인 설원형 작업대",
  },
  catmoon: {
    style: "moon-dialogue",
    symbol: "NPC",
    role: "캐릭터와 NPC 담당",
    focus: "캐릭터 관계, NPC 대사, 호감도 이벤트, 생활 시뮬레이션에 어울립니다.",
    traits: ["캐릭터", "관계", "일정"],
    features: ["대화 특화", "월드빌딩", "농장/생활 시뮬레이션", "퀘스트"],
    visual: "달빛 말풍선과 부드러운 관계선이 이어지는 밤 배경",
  },
  ember: {
    style: "ember-combat",
    symbol: "ATK",
    role: "전투와 밸런스 담당",
    focus: "전투 수치, 보스 페이즈, 위험 보상, 난이도 곡선을 조정합니다.",
    traits: ["전투", "수치", "긴장"],
    features: ["전투/밸런스", "AI/적 행동", "로그라이크 기능", "카드/덱빌딩"],
    visual: "붉은 전투 로그와 보스 체력선이 겹친 열기 있는 배경",
  },
  traveler: {
    style: "traveler-map",
    symbol: "MAP",
    role: "맵과 탐험 담당",
    focus: "탑다운 RPG, 이동 그래프, 포탈 연결, 탐험 동선에 강합니다.",
    traits: ["탐험", "지도", "동선"],
    features: ["2D 맵", "탑다운 RPG 기능", "레벨 디자인", "퀘스트"],
    visual: "파도색 지도와 연결 노드가 펼쳐지는 탐험 배경",
  },
  foxrain: {
    style: "fox-mystery",
    symbol: "MYS",
    role: "미스터리와 이벤트 담당",
    focus: "단서, 조건부 이벤트, 숨겨진 플래그, 포인트 앤 클릭 흐름에 어울립니다.",
    traits: ["단서", "비밀", "이벤트"],
    features: ["호러/미스터리", "노코드/로우코드 로직", "퀘스트", "포인트 앤 클릭"],
    visual: "비 오는 보랏빛 화면에 단서 카드가 겹쳐지는 배경",
  },
  cloud: {
    style: "cloud-export",
    symbol: "WEB",
    role: "내보내기와 웹 배포 담당",
    focus: "웹 게임, GitHub Pages, 샘플 HTML, 프로젝트 공개 흐름을 맡습니다.",
    traits: ["웹", "공유", "배포"],
    features: ["내보내기", "실제 코드 생성", "프로젝트 관리", "마켓/커뮤니티"],
    visual: "푸른 구름형 서버 패널과 업로드 경로가 보이는 배경",
  },
  flower: {
    style: "flower-world",
    symbol: "WRD",
    role: "세계관과 분위기 담당",
    focus: "지역, 세력, 장소 분위기, 감정적인 장면 만들기에 좋습니다.",
    traits: ["세계관", "분위기", "회복"],
    features: ["월드빌딩", "스토리 구조", "연출", "농장/생활 시뮬레이션"],
    visual: "꽃빛 정원 위로 장소 카드와 감정선이 피어나는 배경",
  },
  yuzu: {
    style: "yuzu-mvp",
    symbol: "MVP",
    role: "작은 완성 담당",
    focus: "1시간 MVP, 초보자용 범위 축소, 체크리스트 정리에 어울립니다.",
    traits: ["시작", "축소", "완성"],
    features: ["Canna다운 기능", "제작 워크플로우", "프로젝트 관리", "미리보기/테스트"],
    visual: "유자빛 체크리스트와 새싹형 진행 막대가 있는 배경",
  },
  feather: {
    style: "feather-archive",
    symbol: "LOG",
    role: "기록과 포트폴리오 담당",
    focus: "릴리즈 노트, 개발 로그, 변경 기록, 포트폴리오 정리에 좋습니다.",
    traits: ["기록", "회고", "정돈"],
    features: ["제작 워크플로우", "프로젝트 관리", "협업", "현지화"],
    visual: "새벽빛 문서 조각과 로그 줄이 조용히 쌓이는 배경",
  },
  neonmint: {
    style: "mint-code",
    symbol: "API",
    role: "AI와 코드 연결 담당",
    focus: "OpenAI API 연결 준비, 생성 규칙, HTML/JS 내보내기 구조에 강합니다.",
    traits: ["AI", "코드", "자동화"],
    features: ["AI 제작 보조", "실제 코드 생성", "노코드/로우코드 로직", "내보내기"],
    visual: "민트색 터미널 라인과 API 노드가 흐르는 작업실 배경",
  },
};

let state = createProject("이름 없는 Canna 게임", "vn", "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.");

const $ = (selector) => document.querySelector(selector);
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

function createProject(name, genre, seed) {
  const config = genreConfigs[genre] || genreConfigs.vn;
  return {
    name,
    genre,
    tab: "대시보드",
    theme: localStorage.getItem("canna-theme") || "crystal",
    selectedTile: "floor",
    seed,
    scope: "1주 프로토타입",
    assets: ["hero_stand.png", "city_rain.png", "soft_piano_loop.ogg"],
    canna: {
      summary: `${config.label} 템플릿으로 시작한 2D 게임 초안입니다.`,
      coreLoop: ["아이디어 입력", "장르 템플릿 선택", "데이터 생성", "미리보기", "JSON/코드 내보내기"],
      todo: ["플레이 가능한 최소 버전 만들기", "누락 에셋 확인", "첫 5분 플레이 흐름 점검"],
      warnings: ["아직 실제 AI API는 연결되지 않은 로컬 규칙 기반 생성입니다."],
      seedVariants: buildSeedVariants(seed),
    },
    data: buildGenreData(genre, seed),
  };
}

function buildGenreData(genre, seed) {
  return {
    vn: {
      scenes: [
        { name: "시작 장면", speaker: "Canna", text: `${seed} 이야기가 시작됩니다.`, choices: ["따라간다", "멈춰 선다"], flags: ["intro_seen"] },
        { name: "첫 선택", speaker: "안내자", text: "선택은 작지만, 결말을 바꿀 수 있어요.", choices: ["진실을 묻는다", "비밀로 둔다"], flags: ["met_guide"] },
      ],
      characters: [
        { name: "Canna", role: "주인공", tone: "조용하지만 단단함", moods: ["보통", "미소", "걱정"] },
        { name: "안내자", role: "안내자", tone: "부드럽고 수상함", moods: ["차분함", "경계"] },
      ],
      variables: [{ key: "호감도", value: 0 }, { key: "열쇠_보유", value: false }],
      endings: ["진 엔딩", "조용한 엔딩", "잃어버린 엔딩"],
    },
    rogue: {
      dungeon: { width: 12, height: 12, tiles: Array.from({ length: 144 }, (_, i) => (i % 11 === 0 || i % 19 === 0 ? "wall" : i % 17 === 0 ? "event" : "floor")) },
      monsters: [{ name: "슬라임", hp: 8, attack: 2, behavior: "배회" }, { name: "박쥐", hp: 6, attack: 3, behavior: "기습" }, { name: "비의 망령", hp: 18, attack: 5, behavior: "위상 이동" }],
      items: [{ name: "작은 물약", type: "회복", value: 10 }, { name: "독버섯", type: "위험 보상", value: "공격 +3, 체력 -4" }, { name: "청동 단검", type: "무기", value: 3 }],
      rules: [{ name: "턴 진행", value: "플레이어 후 적" }, { name: "시야", value: "반경 6" }, { name: "시드", value: "CANNA-RAIN-01" }],
    },
    rpg: {
      maps: [{ name: "비 오는 마을", size: "32x24", portals: 3 }, { name: "오래된 역", size: "24x18", portals: 1 }],
      npcs: [{ name: "상인", quest: "잃어버린 소포" }, { name: "시계지기", quest: "멈춘 종" }],
      quests: [{ name: "주인을 찾기", condition: "시계지기와 대화", reward: "낡은 열쇠" }],
    },
    platformer: {
      movement: [{ name: "점프", value: "높이 4.2" }, { name: "대시", value: "재사용 1초" }, { name: "코요테 타임", value: "120ms" }],
      hazards: [{ name: "비침 가시", timing: "2초" }, { name: "떨어지는 간판", timing: "발동형" }],
      levels: [{ name: "옥상 시작", goal: "네온 다리까지 도착" }],
    },
    puzzle: {
      board: { width: 8, height: 8 },
      pieces: [{ name: "기억 타일", rule: "짝 맞추기" }, { name: "비의 자물쇠", rule: "열쇠 필요" }],
      goals: [{ name: "문 열기", condition: "잠긴 타일 제거" }],
    },
    card: {
      cards: [{ name: "회상", cost: 1, effect: "카드 2장 뽑기" }, { name: "비의 보호", cost: 2, effect: "방어 8 얻기" }, { name: "잃어버린 실", cost: 0, effect: "적에게 표식" }],
      relics: [{ name: "작은 단추", effect: "전투마다 첫 카드 비용 0" }],
    },
    shooter: {
      waves: [{ name: "이슬비", enemies: 12 }, { name: "폭풍", enemies: 28 }],
      weapons: [{ name: "바늘 광선", cooldown: 0.18 }, { name: "우산 폭발", cooldown: 1.2 }],
    },
    rhythm: {
      chart: { bpm: 128, judgement: "넉넉함" },
      notes: [{ type: "탭", beat: 1 }, { type: "홀드", beat: 4 }],
    },
    farm: {
      crops: [{ name: "달빛 당근", season: "가을", days: 5 }, { name: "비의 백합", season: "봄", days: 3 }],
      npcs: [{ name: "민아", schedule: "아침 시장, 밤 도서관" }],
    },
    idle: {
      loops: [{ name: "탐험", reward: "경험치" }, { name: "제작", reward: "장비" }],
      rewards: [{ name: "오프라인 골드", rate: "분당 12" }],
    },
    metroid: {
      abilities: [{ name: "벽점프", unlocks: "시계탑" }, { name: "랜턴 대시", unlocks: "어두운 터널" }],
      locks: [{ name: "파란 문", requires: "랜턴 대시" }],
    },
    adventure: {
      clues: [{ name: "젖은 발자국", pointsTo: "오래된 역" }, { name: "부서진 단추", pointsTo: "잊힌 인형" }],
      rooms: [{ name: "아파트", exits: 2 }, { name: "역 플랫폼", exits: 3 }],
    },
  }[genre] || {};
}

function buildSeedVariants(seed) {
  return Object.entries(genreConfigs).slice(0, 5).map(([id, genre]) => ({
    genre: id,
    label: genre.label,
    pitch: `${seed} - ${genre.label} 버전`,
  }));
}

function setStatus(text) {
  statusText.textContent = text;
}

function activeGenre() {
  return genreConfigs[state.genre];
}

function render() {
  projectName.value = state.name;
  makePrompt.value = state.seed;
  applyTheme(state.theme || "crystal");
  genreLabel.textContent = activeGenre().label;
  workspaceTitle.textContent = activeGenre().title;
  renderGenreTabs();
  renderThemes();
  renderToolTabs();
  renderAssets();
  renderEditor();
  renderInspector();
  renderPreview();
  jsonOutput.textContent = JSON.stringify(state, null, 2);
}

function renderThemes() {
  themeGrid.innerHTML = themes.map((theme) => `
    <button class="theme-card ${state.theme === theme.id ? "active" : ""}" data-theme="${theme.id}">
      <span class="theme-head">
        <span class="theme-symbol">${themeInfo(theme.id).symbol}</span>
        <span>
          <span class="theme-name">${theme.name}</span>
          <span class="theme-mood">${theme.mood}</span>
        </span>
      </span>
      <span class="theme-swatch">
        <span style="background:${theme.accent}"></span>
        <span style="background:${theme.accent3}"></span>
        <span style="background:${theme.accent2}"></span>
      </span>
      <span class="theme-role">${themeInfo(theme.id).role}</span>
      <span class="theme-traits">${themeInfo(theme.id).traits.map((trait) => `<span>${trait}</span>`).join("")}</span>
    </button>
  `).join("");
  themeGrid.querySelectorAll(".theme-card").forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.theme, true));
  });
}

function applyTheme(id, rerender = false) {
  const theme = themes.find((item) => item.id === id) || themes[0];
  const meta = themeInfo(theme.id);
  state.theme = theme.id;
  localStorage.setItem("canna-theme", theme.id);
  const vars = {
    bg: theme.bg,
    panel: theme.panel,
    "panel-strong": theme.strong,
    "panel-2": theme.strong,
    line: theme.line,
    "line-soft": theme.line,
    text: theme.text,
    muted: theme.muted,
    accent: theme.accent,
    "accent-2": theme.accent2,
    "accent-3": theme.accent3,
    "accent-ink": theme.ink,
    blue: theme.accent3,
    rose: theme.rose,
    green: theme.accent,
  };
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
  document.body.dataset.themeStyle = meta.style;
  document.body.dataset.themeSymbol = meta.symbol;
  document.body.dataset.themeRole = meta.role;
  if (rerender) {
    setStatus(`${theme.name} 테마 적용`);
    render();
  }
}

function themeInfo(id = state.theme) {
  return themeMeta[id] || themeMeta.crystal;
}

function renderGenreTabs() {
  genreTabs.innerHTML = "";
  Object.entries(genreConfigs).forEach(([id, genre]) => {
    const button = document.createElement("button");
    button.className = `genre-button ${state.genre === id ? "active" : ""}`;
    button.textContent = genre.label;
    button.addEventListener("click", () => switchGenre(id));
    genreTabs.append(button);
  });
}

function switchGenre(id) {
  state.genre = id;
  state.tab = "대시보드";
  state.data = buildGenreData(id, state.seed);
  state.canna.seedVariants = buildSeedVariants(state.seed);
  setStatus(`${genreConfigs[id].label} 모드`);
  render();
}

function renderToolTabs() {
  toolTabs.innerHTML = "";
  activeGenre().tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.className = `tab-button ${state.tab === tab ? "active" : ""}`;
    button.textContent = tab;
    button.addEventListener("click", () => {
      state.tab = tab;
      render();
    });
    toolTabs.append(button);
  });
}

function renderAssets() {
  assetList.innerHTML = "";
  state.assets.forEach((asset) => {
    const item = document.createElement("div");
    item.className = "asset-item";
    item.textContent = asset;
    assetList.append(item);
  });
}

function renderEditor() {
  if (state.tab === "대시보드") {
    renderDashboard();
    return;
  }
  if (state.genre === "rogue" && state.tab === "던전") {
    renderDungeonEditor();
    return;
  }
  renderDataEditor();
}

function renderDashboard() {
  const groups = ["말로 만들기", "AI 제작 보조", "장르 템플릿", ...activeGenre().featureGroups, "에셋 기능", "노코드/로우코드 로직", "실제 코드 생성", "미리보기/테스트", "프로젝트 관리", "Canna다운 기능"];
  const meta = themeInfo();
  editorPanel.innerHTML = `
    <div class="hero-workbench">
      <div>
        <span class="eyebrow">게임 씨앗</span>
        <h3>${escapeHtml(state.seed)}</h3>
        <p>${state.canna.summary}</p>
      </div>
      <div class="theme-visual" data-symbol="${meta.symbol}">
        <span class="eyebrow">현재 테마 담당</span>
        <strong>${meta.role}</strong>
        <p>${meta.visual}</p>
      </div>
      <button id="makeMvp" class="command-button">MVP로 줄이기</button>
    </div>
    <div class="feature-grid">
      ${groups.map(groupCard).join("")}
    </div>
  `;
  $("#makeMvp").addEventListener("click", () => {
    state.scope = "1시간 안에 플레이 가능한 MVP";
    state.canna.todo = ["첫 화면 만들기", "핵심 상호작용 1개", "성공/실패 조건", "웹 게임 내보내기"];
    setStatus("MVP 범위로 정리됨");
    render();
  });
}

function groupCard(group) {
  const items = featureAtlas[group] || [];
  return `
    <article class="feature-card">
      <header><strong>${group}</strong><span>${items.length}</span></header>
      <div class="chip-row">${items.slice(0, 12).map((item) => `<button class="chip feature-chip" data-feature="${escapeHtml(item)}">${item}</button>`).join("")}</div>
    </article>
  `;
}

function renderDataEditor() {
  const rows = rowsForCurrentTab();
  editorPanel.innerHTML = `
    <div class="section-title">
      <h3>${state.tab}</h3>
      <button id="addGeneratedItem" class="small-button">자동 항목 추가</button>
    </div>
    <div class="editor-grid">
      ${rows.map(dataCard).join("")}
    </div>
    <div class="feature-card wide">
      <header><strong>관련 기능</strong><span>${activeGenre().featureGroups.length}</span></header>
      <div class="chip-row">${activeGenre().featureGroups.flatMap((group) => featureAtlas[group] || []).slice(0, 28).map((item) => `<span class="chip">${item}</span>`).join("")}</div>
    </div>
  `;
  $("#addGeneratedItem").addEventListener("click", addGeneratedItem);
}

function rowsForCurrentTab() {
  const data = state.data;
  const tabMap = {
    장면: "scenes",
    캐릭터: "characters",
    변수: "variables",
    몬스터: "monsters",
    아이템: "items",
    규칙: "rules",
    퀘스트: "quests",
    NPC: "npcs",
    맵: "maps",
    카드: "cards",
    유물: "relics",
  };
  if (state.tab === "선택지" && data.scenes) return data.scenes.map((scene) => ({ name: scene.name, choices: scene.choices.join(" / ") }));
  const key = tabMap[state.tab];
  if (key && Array.isArray(data[key])) return data[key];
  return Object.entries(data).map(([name, value]) => ({ name, value: Array.isArray(value) ? `${value.length}개 항목` : JSON.stringify(value) }));
}

function addGeneratedItem() {
  const data = state.data;
  const item = { name: `자동 생성 ${state.tab}`, idea: state.seed, status: "초안" };
  const tabMap = { 장면: "scenes", 캐릭터: "characters", 몬스터: "monsters", 아이템: "items", 규칙: "rules", 퀘스트: "quests", NPC: "npcs", 카드: "cards", 유물: "relics" };
  const key = tabMap[state.tab] || Object.keys(data).find((name) => Array.isArray(data[name]));
  if (key) data[key].push(item);
  setStatus("프롬프트 기반 항목 추가됨");
  render();
}

function renderDungeonEditor() {
  editorPanel.innerHTML = `
    <div class="section-title"><h3>던전 맵</h3><button id="randomDungeon" class="small-button">자동 생성</button></div>
    <div class="map-editor">
      <div id="tileMap" class="tile-map"></div>
      <div>
        <div class="panel-title">팔레트</div>
        <div class="palette">${palette.map((tile) => `<button class="swatch ${state.selectedTile === tile.id ? "active" : ""}" data-tile="${tile.id}" title="${tile.label}" style="background:${tile.color}"></button>`).join("")}</div>
      </div>
    </div>
  `;
  const map = $("#tileMap");
  state.data.dungeon.tiles.forEach((tileId, index) => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.style.background = palette.find((entry) => entry.id === tileId)?.color || "#232b2e";
    tile.title = `${index % 12}, ${Math.floor(index / 12)}`;
    tile.addEventListener("click", () => {
      state.data.dungeon.tiles[index] = state.selectedTile;
      render();
    });
    map.append(tile);
  });
  document.querySelectorAll(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTile = button.dataset.tile;
      render();
    });
  });
  $("#randomDungeon").addEventListener("click", () => {
    state.data.dungeon.tiles = state.data.dungeon.tiles.map((_, i) => (i % 12 === 0 || i % 12 === 11 || i < 12 || i > 131 ? "wall" : Math.random() > 0.82 ? "wall" : Math.random() > 0.9 ? "event" : "floor"));
    setStatus("던전 자동 생성됨");
    render();
  });
}

function dataCard(row) {
  return `
    <article class="list-row">
      <header><strong>${escapeHtml(row.name || row.key || "항목")}</strong><span class="muted">${Object.keys(row).length}개 필드</span></header>
      <div class="chip-row">${Object.entries(row).map(([key, value]) => `<span class="chip">${escapeHtml(key)}: ${escapeHtml(displayValue(value))}</span>`).join("")}</div>
    </article>
  `;
}

function displayValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object" && value !== null) return JSON.stringify(value);
  return String(value);
}

function renderInspector() {
  const meta = themeInfo();
  inspector.innerHTML = `
    <div class="panel-title">Canna 제안</div>
    <div class="property-row"><label>현재 장르</label><strong>${activeGenre().label}</strong></div>
    <div class="property-row"><label>범위</label><strong>${state.scope}</strong></div>
    <div class="property-row theme-duty">
      <label>테마 담당</label>
      <strong>${meta.role}</strong>
      <span>${meta.focus}</span>
      <div class="chip-row">${meta.features.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
    </div>
    <div class="property-row"><label>핵심 루프</label><div class="chip-row">${state.canna.coreLoop.map((item) => `<span class="chip">${item}</span>`).join("")}</div></div>
    <div class="property-row"><label>할 일</label><div class="list-stack">${state.canna.todo.map((item) => `<div class="mini-row">${item}</div>`).join("")}</div></div>
    <div class="property-row"><label>게임 씨앗 변환</label><div class="list-stack">${state.canna.seedVariants.map((variant) => `<button class="mini-row seed-variant" data-genre="${variant.genre}">${variant.pitch}</button>`).join("")}</div></div>
  `;
  document.querySelectorAll(".seed-variant").forEach((button) => {
    button.addEventListener("click", () => switchGenre(button.dataset.genre));
  });
}

function renderPreview() {
  if (state.genre === "vn") {
    const scene = state.data.scenes[0];
    previewStage.innerHTML = `
      <div class="vn-stage">
        <div class="vn-cast"><div class="standee">${scene.speaker.slice(0, 1)}</div></div>
        <div class="dialogue-box">
          <strong>${escapeHtml(scene.speaker)}</strong>
          <p>${escapeHtml(scene.text)}</p>
          <div class="chip-row">${scene.choices.map((choice) => `<span class="chip">${escapeHtml(choice)}</span>`).join("")}</div>
        </div>
      </div>
    `;
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
  previewStage.innerHTML = `
    <div class="preview-board">
      <h3>${activeGenre().label}</h3>
      <p>${escapeHtml(state.seed)}</p>
      <div class="chip-row">${activeGenre().featureGroups.flatMap((group) => featureAtlas[group] || []).slice(0, 10).map((item) => `<span class="chip">${item}</span>`).join("")}</div>
    </div>
  `;
}

function generateFromPrompt(remix = false) {
  const prompt = makePrompt.value.trim() || "작은 2D 게임";
  const genre = remix ? nextGenre() : inferGenre(prompt);
  state = createProject(projectName.value || "이름 없는 Canna 게임", genre, prompt);
  state.canna.summary = `"${prompt}"에서 생성한 ${genreConfigs[genre].label} 초안입니다.`;
  setStatus(remix ? "게임 씨앗을 다른 장르로 변환함" : "프롬프트에서 게임 초안 생성됨");
  render();
}

function inferGenre(prompt) {
  const text = prompt.toLowerCase();
  const tests = [
    ["rogue", ["로그", "던전", "랜덤", "몬스터", "아이템"]],
    ["vn", ["비주얼", "노벨", "대사", "선택지", "연애", "미스터리"]],
    ["rpg", ["rpg", "마을", "퀘스트", "npc"]],
    ["platformer", ["플랫", "점프", "발판", "대시"]],
    ["puzzle", ["퍼즐", "블록", "매치", "보드"]],
    ["card", ["카드", "덱", "유물"]],
    ["rhythm", ["리듬", "bpm", "노트", "음악"]],
    ["farm", ["농장", "작물", "생활", "계절"]],
    ["adventure", ["추리", "단서", "클릭", "어드벤처"]],
  ];
  return tests.find(([, words]) => words.some((word) => text.includes(word)))?.[0] || "vn";
}

function nextGenre() {
  const ids = Object.keys(genreConfigs);
  return ids[(ids.indexOf(state.genre) + 1) % ids.length];
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

projectName.addEventListener("input", () => {
  state.name = projectName.value;
  jsonOutput.textContent = JSON.stringify(state, null, 2);
});

$("#addAsset").addEventListener("click", () => {
  const input = $("#assetName");
  const value = input.value.trim();
  if (!value) return;
  state.assets.push(value);
  input.value = "";
  setStatus("에셋 추가됨");
  render();
});

$("#newProject").addEventListener("click", () => {
  state = createProject("이름 없는 Canna 게임", "vn", "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.");
  setStatus("새 프로젝트");
  render();
});

$("#saveProject").addEventListener("click", () => {
  localStorage.setItem("canna-project", JSON.stringify(state));
  setStatus("브라우저에 저장됨");
});

$("#exportProject").addEventListener("click", downloadJson);

$("#importProject").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    state = JSON.parse(await file.text());
    normalizeProject();
    setStatus("JSON 불러오기 완료");
    render();
  } catch {
    setStatus("JSON을 읽을 수 없음");
  }
});

$("#playPreview").addEventListener("click", () => {
  setStatus(`${activeGenre().label} 미리보기 갱신`);
  renderPreview();
});

$("#generateFromPrompt").addEventListener("click", () => generateFromPrompt(false));
$("#remixSeed").addEventListener("click", () => generateFromPrompt(true));

const saved = localStorage.getItem("canna-project");
if (saved) {
  try {
    state = JSON.parse(saved);
    normalizeProject();
  } catch {
    localStorage.removeItem("canna-project");
  }
}

render();

function normalizeProject() {
  const genre = state.genre && genreConfigs[state.genre] ? state.genre : "vn";
  const seed = state.seed || "기억을 잃은 인형이 비 오는 도시에서 주인을 찾는다.";
  state.name = state.name || "이름 없는 Canna 게임";
  state.genre = genre;
  state.tab = genreConfigs[genre].tabs.includes(state.tab) ? state.tab : "대시보드";
  state.theme = themes.some((theme) => theme.id === state.theme) ? state.theme : localStorage.getItem("canna-theme") || "crystal";
  state.selectedTile = state.selectedTile || "floor";
  state.seed = seed;
  state.scope = state.scope || "1주 프로토타입";
  state.assets = Array.isArray(state.assets) ? state.assets : [];
  state.canna = state.canna || {};
  state.canna.summary = state.canna.summary || `${genreConfigs[genre].label} 템플릿으로 시작한 2D 게임 초안입니다.`;
  state.canna.coreLoop = Array.isArray(state.canna.coreLoop) ? state.canna.coreLoop : ["아이디어 입력", "데이터 생성", "미리보기"];
  state.canna.todo = Array.isArray(state.canna.todo) ? state.canna.todo : ["플레이 가능한 최소 버전 만들기"];
  state.canna.warnings = Array.isArray(state.canna.warnings) ? state.canna.warnings : [];
  state.canna.seedVariants = buildSeedVariants(seed);
  const savedDataLooksBroken = /�|鍮|濡|留|媛|쒖|덈/.test(JSON.stringify(state.data || {}));
  state.data = state.data && Object.keys(state.data).length && !savedDataLooksBroken ? state.data : buildGenreData(genre, seed);
}
