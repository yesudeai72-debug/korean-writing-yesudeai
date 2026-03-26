const LEVEL_DATA = {
  beginner: {
    title: "초급",
    subtitle:
      "기초어휘 1, 2단계를 염두에 둔 입문형 연습입니다. 한눈에 보이도록 짧은 문장만 배치했습니다.",
    predicates: [
      {
        word: "먹다",
        type: "동사",
        pattern: ["주어", "목적어"],
        sentence: ["아이가", "사과를", "먹어요."],
        arguments: [
          { text: "아이가", role: "주어" },
          { text: "사과를", role: "목적어" },
          { text: "학생이", role: "주어" },
          { text: "빵을", role: "목적어" },
          { text: "저녁을", role: "목적어" }
        ]
      },
      { word: "가다", type: "동사", pattern: ["주어", "도착점"], sentence: ["학생이", "학교에", "가요."], arguments: [{ text: "학생이", role: "주어" }, { text: "학교에", role: "도착점" }, { text: "친구가", role: "주어" }, { text: "집에", role: "도착점" }, { text: "회사에", role: "도착점" }] },
      { word: "오다", type: "동사", pattern: ["주어", "출발점"], sentence: ["친구가", "집에서", "와요."], arguments: [{ text: "친구가", role: "주어" }, { text: "집에서", role: "출발점" }, { text: "선생님이", role: "주어" }, { text: "학교에서", role: "출발점" }, { text: "부산에서", role: "출발점" }] },
      { word: "보다", type: "동사", pattern: ["주어", "목적어"], sentence: ["제가", "영화를", "봐요."], arguments: [{ text: "제가", role: "주어" }, { text: "영화를", role: "목적어" }, { text: "동생이", role: "주어" }, { text: "텔레비전을", role: "목적어" }, { text: "사진을", role: "목적어" }] },
      { word: "읽다", type: "동사", pattern: ["주어", "목적어"], sentence: ["민수가", "책을", "읽어요."], arguments: [{ text: "민수가", role: "주어" }, { text: "책을", role: "목적어" }, { text: "학생이", role: "주어" }, { text: "편지를", role: "목적어" }, { text: "문장을", role: "목적어" }] },
      { word: "쓰다", type: "동사", pattern: ["주어", "목적어"], sentence: ["언니가", "일기를", "써요."], arguments: [{ text: "언니가", role: "주어" }, { text: "일기를", role: "목적어" }, { text: "제가", role: "주어" }, { text: "메일을", role: "목적어" }, { text: "이름을", role: "목적어" }] },
      { word: "배우다", type: "동사", pattern: ["주어", "목적어"], sentence: ["학생들이", "한국어를", "배워요."], arguments: [{ text: "학생들이", role: "주어" }, { text: "한국어를", role: "목적어" }, { text: "제가", role: "주어" }, { text: "춤을", role: "목적어" }, { text: "노래를", role: "목적어" }] },
      { word: "좋아하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["제가", "김치를", "좋아해요."], arguments: [{ text: "제가", role: "주어" }, { text: "김치를", role: "목적어" }, { text: "동생이", role: "주어" }, { text: "음악을", role: "목적어" }, { text: "여행을", role: "목적어" }] },
      { word: "만나다", type: "동사", pattern: ["주어", "대상"], sentence: ["저는", "친구를", "만나요."], arguments: [{ text: "저는", role: "주어" }, { text: "친구를", role: "대상" }, { text: "선생님을", role: "대상" }, { text: "부모님을", role: "대상" }, { text: "언니를", role: "대상" }] },
      { word: "사다", type: "동사", pattern: ["주어", "목적어"], sentence: ["엄마가", "우유를", "사요."], arguments: [{ text: "엄마가", role: "주어" }, { text: "우유를", role: "목적어" }, { text: "과일을", role: "목적어" }, { text: "제가", role: "주어" }, { text: "가방을", role: "목적어" }] },
      { word: "앉다", type: "동사", pattern: ["주어", "위치"], sentence: ["학생이", "의자에", "앉아요."], arguments: [{ text: "학생이", role: "주어" }, { text: "의자에", role: "위치" }, { text: "제가", role: "주어" }, { text: "자리에", role: "위치" }, { text: "바닥에", role: "위치" }] },
      { word: "살다", type: "동사", pattern: ["주어", "장소"], sentence: ["저는", "서울에", "살아요."], arguments: [{ text: "저는", role: "주어" }, { text: "서울에", role: "장소" }, { text: "한국에", role: "장소" }, { text: "가족이", role: "주어" }, { text: "기숙사에", role: "장소" }] },
      { word: "크다", type: "형용사", pattern: ["주어"], sentence: ["집이", "커요."], arguments: [{ text: "집이", role: "주어" }, { text: "교실이", role: "주어" }, { text: "가방이", role: "주어" }, { text: "나무가", role: "주어" }] },
      { word: "작다", type: "형용사", pattern: ["주어"], sentence: ["방이", "작아요."], arguments: [{ text: "방이", role: "주어" }, { text: "컵이", role: "주어" }, { text: "고양이가", role: "주어" }, { text: "공원이", role: "주어" }] },
      { word: "예쁘다", type: "형용사", pattern: ["주어"], sentence: ["꽃이", "예뻐요."], arguments: [{ text: "꽃이", role: "주어" }, { text: "가방이", role: "주어" }, { text: "바다가", role: "주어" }, { text: "그림이", role: "주어" }] },
      { word: "좋다", type: "형용사", pattern: ["주어"], sentence: ["날씨가", "좋아요."], arguments: [{ text: "날씨가", role: "주어" }, { text: "기분이", role: "주어" }, { text: "자리가", role: "주어" }, { text: "생각이", role: "주어" }] },
      { word: "싫다", type: "형용사", pattern: ["주어"], sentence: ["비가", "싫어요."], arguments: [{ text: "비가", role: "주어" }, { text: "소음이", role: "주어" }, { text: "추위가", role: "주어" }, { text: "벌레가", role: "주어" }] },
      { word: "덥다", type: "형용사", pattern: ["주어"], sentence: ["오늘이", "더워요."], arguments: [{ text: "오늘이", role: "주어" }, { text: "교실이", role: "주어" }, { text: "밖이", role: "주어" }, { text: "여름이", role: "주어" }] },
      { word: "춥다", type: "형용사", pattern: ["주어"], sentence: ["아침이", "추워요."], arguments: [{ text: "아침이", role: "주어" }, { text: "겨울이", role: "주어" }, { text: "바람이", role: "주어" }, { text: "산이", role: "주어" }] },
      { word: "재미있다", type: "형용사", pattern: ["주어"], sentence: ["수업이", "재미있어요."], arguments: [{ text: "수업이", role: "주어" }, { text: "영화가", role: "주어" }, { text: "게임이", role: "주어" }, { text: "이야기가", role: "주어" }] }
    ]
  },
  intermediate: {
    title: "중급",
    subtitle:
      "기초어휘 3, 4단계를 겨냥한 중간 단계 연습입니다. 두 개 이상의 논항 관계를 더 자주 보게 됩니다.",
    predicates: [
      { word: "설명하다", type: "동사", pattern: ["주어", "대상", "내용"], sentence: ["선생님이", "학생들에게", "규칙을", "설명해요."], arguments: [{ text: "선생님이", role: "주어" }, { text: "학생들에게", role: "대상" }, { text: "규칙을", role: "내용" }, { text: "사용법을", role: "내용" }, { text: "손님에게", role: "대상" }] },
      { word: "추천하다", type: "동사", pattern: ["주어", "대상", "내용"], sentence: ["친구가", "저에게", "책을", "추천해요."], arguments: [{ text: "친구가", role: "주어" }, { text: "저에게", role: "대상" }, { text: "책을", role: "내용" }, { text: "영화를", role: "내용" }, { text: "동생에게", role: "대상" }] },
      { word: "준비하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["학생이", "발표를", "준비해요."], arguments: [{ text: "학생이", role: "주어" }, { text: "발표를", role: "목적어" }, { text: "시험을", role: "목적어" }, { text: "행사를", role: "목적어" }, { text: "제가", role: "주어" }] },
      { word: "경험하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["저는", "다양한 문화를", "경험했어요."], arguments: [{ text: "저는", role: "주어" }, { text: "다양한 문화를", role: "목적어" }, { text: "실패를", role: "목적어" }, { text: "새로운 생활을", role: "목적어" }, { text: "학생들이", role: "주어" }] },
      { word: "유지하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["팀이", "속도를", "유지해요."], arguments: [{ text: "팀이", role: "주어" }, { text: "속도를", role: "목적어" }, { text: "질서를", role: "목적어" }, { text: "관계를", role: "목적어" }, { text: "회사에서", role: "주어" }] },
      { word: "선택하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["고객이", "상품을", "선택해요."], arguments: [{ text: "고객이", role: "주어" }, { text: "상품을", role: "목적어" }, { text: "방법을", role: "목적어" }, { text: "진로를", role: "목적어" }, { text: "제가", role: "주어" }] },
      { word: "감소하다", type: "동사", pattern: ["주어"], sentence: ["비용이", "감소했어요."], arguments: [{ text: "비용이", role: "주어" }, { text: "문제가", role: "주어" }, { text: "인구가", role: "주어" }, { text: "양이", role: "주어" }] },
      { word: "증가하다", type: "동사", pattern: ["주어"], sentence: ["이용자가", "증가했어요."], arguments: [{ text: "이용자가", role: "주어" }, { text: "수요가", role: "주어" }, { text: "관심이", role: "주어" }, { text: "비용이", role: "주어" }] },
      { word: "필요하다", type: "형용사", pattern: ["주어"], sentence: ["준비가", "필요해요."], arguments: [{ text: "준비가", role: "주어" }, { text: "시간이", role: "주어" }, { text: "연습이", role: "주어" }, { text: "도움이", role: "주어" }] },
      { word: "부족하다", type: "형용사", pattern: ["주어"], sentence: ["시간이", "부족해요."], arguments: [{ text: "시간이", role: "주어" }, { text: "정보가", role: "주어" }, { text: "경험이", role: "주어" }, { text: "용기가", role: "주어" }] },
      { word: "적절하다", type: "형용사", pattern: ["주어"], sentence: ["표현이", "적절해요."], arguments: [{ text: "표현이", role: "주어" }, { text: "설명이", role: "주어" }, { text: "방법이", role: "주어" }, { text: "자료가", role: "주어" }] },
      { word: "유명하다", type: "형용사", pattern: ["주어"], sentence: ["그 배우가", "유명해요."], arguments: [{ text: "그 배우가", role: "주어" }, { text: "도시가", role: "주어" }, { text: "식당이", role: "주어" }, { text: "작품이", role: "주어" }] },
      { word: "복잡하다", type: "형용사", pattern: ["주어"], sentence: ["문제가", "복잡해요."], arguments: [{ text: "문제가", role: "주어" }, { text: "절차가", role: "주어" }, { text: "구조가", role: "주어" }, { text: "관계가", role: "주어" }] },
      { word: "분명하다", type: "형용사", pattern: ["주어"], sentence: ["목표가", "분명해요."], arguments: [{ text: "목표가", role: "주어" }, { text: "이유가", role: "주어" }, { text: "차이가", role: "주어" }, { text: "근거가", role: "주어" }] },
      { word: "가능하다", type: "형용사", pattern: ["주어"], sentence: ["참여가", "가능해요."], arguments: [{ text: "참여가", role: "주어" }, { text: "변경이", role: "주어" }, { text: "복습이", role: "주어" }, { text: "신청이", role: "주어" }] },
      { word: "불편하다", type: "형용사", pattern: ["주어"], sentence: ["의자가", "불편해요."], arguments: [{ text: "의자가", role: "주어" }, { text: "자리배치가", role: "주어" }, { text: "화면이", role: "주어" }, { text: "조작이", role: "주어" }] },
      { word: "정리하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["학생이", "메모를", "정리해요."], arguments: [{ text: "학생이", role: "주어" }, { text: "메모를", role: "목적어" }, { text: "생각을", role: "목적어" }, { text: "자료를", role: "목적어" }, { text: "회의록을", role: "목적어" }] },
      { word: "공유하다", type: "동사", pattern: ["주어", "대상", "내용"], sentence: ["팀장이", "구성원들과", "정보를", "공유해요."], arguments: [{ text: "팀장이", role: "주어" }, { text: "구성원들과", role: "대상" }, { text: "정보를", role: "내용" }, { text: "자료를", role: "내용" }, { text: "학생들과", role: "대상" }] },
      { word: "회복하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["선수가", "컨디션을", "회복했어요."], arguments: [{ text: "선수가", role: "주어" }, { text: "컨디션을", role: "목적어" }, { text: "건강을", role: "목적어" }, { text: "리듬을", role: "목적어" }, { text: "환자가", role: "주어" }] },
      { word: "확인하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["직원이", "예약을", "확인해요."], arguments: [{ text: "직원이", role: "주어" }, { text: "예약을", role: "목적어" }, { text: "일정을", role: "목적어" }, { text: "주소를", role: "목적어" }, { text: "명단을", role: "목적어" }] }
    ]
  },
  advanced: {
    title: "고급",
    subtitle:
      "실험 대상인 고급 학습자를 위한 화면입니다. 서술어 중심으로 논항 구조를 잡는 감각을 집중적으로 훈련합니다.",
    predicates: [
      { word: "간주하다", type: "동사", pattern: ["주어", "대상", "보어"], sentence: ["연구자는", "그 결과를", "중요한 단서로", "간주합니다."], arguments: [{ text: "연구자는", role: "주어" }, { text: "그 결과를", role: "대상" }, { text: "중요한 단서로", role: "보어" }, { text: "핵심 자료로", role: "보어" }, { text: "그 현상을", role: "대상" }] },
      { word: "구성하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["화자가", "문장을", "구성합니다."], arguments: [{ text: "화자가", role: "주어" }, { text: "문장을", role: "목적어" }, { text: "논리를", role: "목적어" }, { text: "담론을", role: "목적어" }, { text: "필자가", role: "주어" }] },
      { word: "가정하다", type: "동사", pattern: ["주어", "내용"], sentence: ["우리는", "다른 조건을", "가정합니다."], arguments: [{ text: "우리는", role: "주어" }, { text: "다른 조건을", role: "내용" }, { text: "새로운 상황을", role: "내용" }, { text: "필자는", role: "주어" }, { text: "반대 입장을", role: "내용" }] },
      { word: "도출하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["연구팀이", "결론을", "도출했습니다."], arguments: [{ text: "연구팀이", role: "주어" }, { text: "결론을", role: "목적어" }, { text: "의미를", role: "목적어" }, { text: "시사점을", role: "목적어" }, { text: "위원회가", role: "주어" }] },
      { word: "촉진하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["정책이", "참여를", "촉진합니다."], arguments: [{ text: "정책이", role: "주어" }, { text: "참여를", role: "목적어" }, { text: "변화를", role: "목적어" }, { text: "성장을", role: "목적어" }, { text: "기술이", role: "주어" }] },
      { word: "제한하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["규정이", "행동을", "제한합니다."], arguments: [{ text: "규정이", role: "주어" }, { text: "행동을", role: "목적어" }, { text: "선택을", role: "목적어" }, { text: "접근을", role: "목적어" }, { text: "환경이", role: "주어" }] },
      { word: "반영하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["결과가", "현실을", "반영합니다."], arguments: [{ text: "결과가", role: "주어" }, { text: "현실을", role: "목적어" }, { text: "여론을", role: "목적어" }, { text: "차이를", role: "목적어" }, { text: "자료가", role: "주어" }] },
      { word: "규정하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["법이", "범위를", "규정합니다."], arguments: [{ text: "법이", role: "주어" }, { text: "범위를", role: "목적어" }, { text: "조건을", role: "목적어" }, { text: "기준을", role: "목적어" }, { text: "제도가", role: "주어" }] },
      { word: "개입하다", type: "동사", pattern: ["주어", "장소"], sentence: ["정부가", "시장에", "개입합니다."], arguments: [{ text: "정부가", role: "주어" }, { text: "시장에", role: "장소" }, { text: "논의에", role: "장소" }, { text: "과정에", role: "장소" }, { text: "기관이", role: "주어" }] },
      { word: "의존하다", type: "동사", pattern: ["주어", "대상"], sentence: ["결과가", "환경에", "의존합니다."], arguments: [{ text: "결과가", role: "주어" }, { text: "환경에", role: "대상" }, { text: "자료에", role: "대상" }, { text: "조건에", role: "대상" }, { text: "판단이", role: "주어" }] },
      { word: "타당하다", type: "형용사", pattern: ["주어"], sentence: ["주장이", "타당합니다."], arguments: [{ text: "주장이", role: "주어" }, { text: "해석이", role: "주어" }, { text: "근거가", role: "주어" }, { text: "추론이", role: "주어" }] },
      { word: "적합하다", type: "형용사", pattern: ["주어"], sentence: ["방법이", "적합합니다."], arguments: [{ text: "방법이", role: "주어" }, { text: "자료가", role: "주어" }, { text: "기준이", role: "주어" }, { text: "전략이", role: "주어" }] },
      { word: "불가피하다", type: "형용사", pattern: ["주어"], sentence: ["조정이", "불가피합니다."], arguments: [{ text: "조정이", role: "주어" }, { text: "변경이", role: "주어" }, { text: "논쟁이", role: "주어" }, { text: "선택이", role: "주어" }] },
      { word: "명시적이다", type: "-이다", pattern: ["주어"], sentence: ["기준이", "명시적입니다."], arguments: [{ text: "기준이", role: "주어" }, { text: "지침이", role: "주어" }, { text: "설명이", role: "주어" }, { text: "조건이", role: "주어" }] },
      { word: "핵심적이다", type: "-이다", pattern: ["주어"], sentence: ["이 변수가", "핵심적입니다."], arguments: [{ text: "이 변수가", role: "주어" }, { text: "해당 요소가", role: "주어" }, { text: "전제가", role: "주어" }, { text: "문맥이", role: "주어" }] },
      { word: "유의미하다", type: "형용사", pattern: ["주어"], sentence: ["차이가", "유의미합니다."], arguments: [{ text: "차이가", role: "주어" }, { text: "변화가", role: "주어" }, { text: "성과가", role: "주어" }, { text: "대조가", role: "주어" }] },
      { word: "상충하다", type: "동사", pattern: ["주어", "대상"], sentence: ["두 입장이", "서로", "상충합니다."], arguments: [{ text: "두 입장이", role: "주어" }, { text: "서로", role: "대상" }, { text: "그 요구가", role: "주어" }, { text: "이해와", role: "대상" }, { text: "목표와", role: "대상" }] },
      { word: "시사하다", type: "동사", pattern: ["주어", "내용"], sentence: ["자료가", "새로운 가능성을", "시사합니다."], arguments: [{ text: "자료가", role: "주어" }, { text: "새로운 가능성을", role: "내용" }, { text: "한계를", role: "내용" }, { text: "방향을", role: "내용" }, { text: "결과가", role: "주어" }] },
      { word: "포괄하다", type: "동사", pattern: ["주어", "목적어"], sentence: ["개념이", "여러 범주를", "포괄합니다."], arguments: [{ text: "개념이", role: "주어" }, { text: "여러 범주를", role: "목적어" }, { text: "세부 항목을", role: "목적어" }, { text: "예외를", role: "목적어" }, { text: "이 정의가", role: "주어" }] },
      { word: "전제하다", type: "동사", pattern: ["주어", "내용"], sentence: ["논의가", "공통 배경을", "전제합니다."], arguments: [{ text: "논의가", role: "주어" }, { text: "공통 배경을", role: "내용" }, { text: "기본 지식을", role: "내용" }, { text: "일정한 조건을", role: "내용" }, { text: "설명이", role: "주어" }] }
    ]
  }
};

function createPredicateButton(item, index, isActive) {
  return `
    <button class="predicate-button${isActive ? " active" : ""}" type="button" data-index="${index}">
      <span>${item.word}</span>
      <small>${item.type} · ${item.pattern.length}개 논항</small>
    </button>
  `;
}

function createArgumentSlots(pattern, sentence) {
  return pattern
    .map((role, index) => {
      const text = sentence[index] || `${role}`;
      return `<div class="slot filled">${text}</div>`;
    })
    .join("");
}

function createArgumentChips(argumentsList) {
  return argumentsList
    .map(
      (item, index) => `
        <div class="arg-chip" style="animation-delay:${index * 120}ms">
          ${item.text}
          <small>${item.role}</small>
        </div>
      `
    )
    .join("");
}

function renderPage(levelKey) {
  const app = document.querySelector("[data-app]");

  if (!app) {
    return;
  }

  const level = LEVEL_DATA[levelKey];
  let currentIndex = 0;

  const draw = () => {
    const current = level.predicates[currentIndex];

    app.innerHTML = `
      <div class="lesson-head">
        <span class="eyebrow">Predicate First Practice</span>
        <h1>${level.title} 문장을 만들어요</h1>
        <p>${level.subtitle}</p>
      </div>
      <div class="stack">
        <section class="panel">
          <h2>전체 문장</h2>
          <p class="panel-note">서술어는 고정해 두고, 필요한 논항 수만큼 문장 상자를 보여 줍니다.</p>
          <div class="sentence-board">
            <div class="sentence-line">
              ${createArgumentSlots(current.pattern, current.sentence)}
              <div class="predicate-box">${current.word}</div>
            </div>
          </div>
        </section>
        <section class="panel">
          <h2>샘플 안내</h2>
          <div class="hint-list">
            <div class="hint-item"><strong>현재 서술어</strong>는 ${current.word}입니다. ${current.pattern.join(", ")} 자리가 필요합니다.</div>
            <div class="hint-item"><strong>연습 순서</strong>는 서술어를 먼저 보고, 이어서 조사가 붙은 논항 후보를 고르는 방식입니다.</div>
            <div class="hint-item"><strong>주의</strong> 현재 20개 목록은 임시 샘플입니다. 엑셀 파일을 받으면 급수와 빈도 기준으로 교체할 수 있습니다.</div>
          </div>
        </section>
      </div>
      <section class="panel" style="margin-top:14px">
        <h2>서술어 후보</h2>
        <p class="panel-note">한 화면에 너무 많아 보이지 않도록 버튼형 목록으로 정리했습니다.</p>
        <div class="candidate-grid">
          ${level.predicates
            .map((item, index) => createPredicateButton(item, index, index === currentIndex))
            .join("")}
        </div>
      </section>
      <section class="panel" style="margin-top:14px">
        <h2>논항 후보</h2>
        <p class="panel-note">조사가 결합된 후보가 차례대로 나타납니다. 강조 효과로 현재 볼 후보를 돋보이게 했습니다.</p>
        <div class="candidate-list">
          ${createArgumentChips(current.arguments)}
        </div>
      </section>
    `;

    app.querySelectorAll(".predicate-button").forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = Number(button.dataset.index);
        draw();
      });
    });
  };

  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page && LEVEL_DATA[page]) {
    renderPage(page);
  }
});
