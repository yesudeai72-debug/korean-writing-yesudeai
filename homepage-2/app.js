function arg(text, role, valid = true, note = "") {
  return { text, role, valid, note };
}

function predicate(word, type, slots, sample, argumentsList) {
  return { word, type, slots, sample, arguments: argumentsList };
}

const PARTICLE_OPTIONS = {
  이: ["이", "가"],
  가: ["이", "가"],
  은: ["은", "는"],
  는: ["은", "는"],
  을: ["을", "를"],
  를: ["을", "를"],
  와: ["와", "과"],
  과: ["와", "과"],
  로: ["로", "으로"],
  으로: ["로", "으로"],
  에게: ["에게", "한테"],
  한테: ["에게", "한테"],
  에: ["에"],
  에서: ["에서"]
};

const PARTICLE_HINTS = {
  주어: "이/가",
  목적어: "을/를",
  대상: "에게/한테",
  내용: "을/를",
  장소: "에/에서",
  도착점: "에",
  출발점: "에서",
  위치: "에",
  보어: "로/으로"
};

const LEVEL_DATA = {
  beginner: {
    title: "초급",
    subtitle:
      "기초 문장부터 시작해 서술어가 요구하는 논항 수와 조사를 함께 익힙니다.",
    allowSemanticViolations: false,
    hideParticlesInSlots: false,
    predicates: [
      predicate(
        "가다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "도착점", particle: "에" }
        ],
        ["학생이", "학교에", "가요."],
        [
          arg("학생", "주어"),
          arg("친구", "주어"),
          arg("아버지", "주어"),
          arg("학교", "도착점"),
          arg("집", "도착점"),
          arg("회사", "도착점")
        ]
      ),
      predicate(
        "오다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "출발점", particle: "에서" }
        ],
        ["친구가", "집에서", "와요."],
        [
          arg("친구", "주어"),
          arg("선생님", "주어"),
          arg("누나", "주어"),
          arg("집", "출발점"),
          arg("학교", "출발점"),
          arg("부산", "출발점")
        ]
      ),
      predicate(
        "먹다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["아이가", "사과를", "먹어요."],
        [
          arg("아이", "주어"),
          arg("학생", "주어"),
          arg("엄마", "주어"),
          arg("사과", "목적어"),
          arg("빵", "목적어"),
          arg("저녁", "목적어")
        ]
      ),
      predicate(
        "마시다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["동생이", "우유를", "마셔요."],
        [
          arg("동생", "주어"),
          arg("아기", "주어"),
          arg("손님", "주어"),
          arg("우유", "목적어"),
          arg("물", "목적어"),
          arg("주스", "목적어")
        ]
      ),
      predicate(
        "보다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["학생이", "영화를", "봐요."],
        [
          arg("학생", "주어"),
          arg("아이", "주어"),
          arg("가족", "주어"),
          arg("영화", "목적어"),
          arg("사진", "목적어"),
          arg("텔레비전", "목적어")
        ]
      ),
      predicate(
        "읽다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["민수가", "책을", "읽어요."],
        [
          arg("민수", "주어"),
          arg("학생", "주어"),
          arg("누나", "주어"),
          arg("책", "목적어"),
          arg("편지", "목적어"),
          arg("문장", "목적어")
        ]
      ),
      predicate(
        "쓰다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["언니가", "일기를", "써요."],
        [
          arg("언니", "주어"),
          arg("학생", "주어"),
          arg("형", "주어"),
          arg("일기", "목적어"),
          arg("이름", "목적어"),
          arg("메일", "목적어")
        ]
      ),
      predicate(
        "사다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["엄마가", "우유를", "사요."],
        [
          arg("엄마", "주어"),
          arg("아빠", "주어"),
          arg("손님", "주어"),
          arg("우유", "목적어"),
          arg("과일", "목적어"),
          arg("가방", "목적어")
        ]
      ),
      predicate(
        "만나다",
        "동사",
        [
          { role: "주어", particle: "는" },
          { role: "대상", particle: "를" }
        ],
        ["저는", "친구를", "만나요."],
        [
          arg("저", "주어"),
          arg("학생", "주어"),
          arg("동생", "주어"),
          arg("친구", "대상"),
          arg("선생님", "대상"),
          arg("부모님", "대상")
        ]
      ),
      predicate(
        "배우다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["학생이", "한국어를", "배워요."],
        [
          arg("학생", "주어"),
          arg("동생", "주어"),
          arg("친구", "주어"),
          arg("한국어", "목적어"),
          arg("춤", "목적어"),
          arg("노래", "목적어")
        ]
      ),
      predicate(
        "좋아하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["아이가", "김치를", "좋아해요."],
        [
          arg("아이", "주어"),
          arg("학생", "주어"),
          arg("언니", "주어"),
          arg("김치", "목적어"),
          arg("음악", "목적어"),
          arg("여행", "목적어")
        ]
      ),
      predicate(
        "싫어하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["동생이", "비를", "싫어해요."],
        [
          arg("동생", "주어"),
          arg("아이", "주어"),
          arg("학생", "주어"),
          arg("비", "목적어"),
          arg("숙제", "목적어"),
          arg("소음", "목적어")
        ]
      ),
      predicate(
        "앉다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "위치", particle: "에" }
        ],
        ["학생이", "의자에", "앉아요."],
        [
          arg("학생", "주어"),
          arg("아기", "주어"),
          arg("손님", "주어"),
          arg("의자", "위치"),
          arg("자리", "위치"),
          arg("바닥", "위치")
        ]
      ),
      predicate(
        "살다",
        "동사",
        [
          { role: "주어", particle: "는" },
          { role: "장소", particle: "에" }
        ],
        ["저는", "서울에", "살아요."],
        [
          arg("저", "주어"),
          arg("가족", "주어"),
          arg("친구", "주어"),
          arg("서울", "장소"),
          arg("한국", "장소"),
          arg("기숙사", "장소")
        ]
      ),
      predicate(
        "예쁘다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["꽃이", "예뻐요."],
        [arg("꽃", "주어"), arg("가방", "주어"), arg("그림", "주어"), arg("바다", "주어")]
      ),
      predicate(
        "크다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["집이", "커요."],
        [arg("집", "주어"), arg("교실", "주어"), arg("가방", "주어"), arg("나무", "주어")]
      ),
      predicate(
        "작다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["방이", "작아요."],
        [arg("방", "주어"), arg("컵", "주어"), arg("고양이", "주어"), arg("공원", "주어")]
      ),
      predicate(
        "덥다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["날씨가", "더워요."],
        [arg("날씨", "주어"), arg("여름", "주어"), arg("교실", "주어"), arg("밖", "주어")]
      ),
      predicate(
        "춥다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["겨울이", "추워요."],
        [arg("겨울", "주어"), arg("아침", "주어"), arg("바람", "주어"), arg("산", "주어")]
      ),
      predicate(
        "필요하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["시간이", "필요해요."],
        [arg("시간", "주어"), arg("준비", "주어"), arg("도움", "주어"), arg("연습", "주어")]
      )
    ]
  },
  intermediate: {
    title: "중급",
    subtitle:
      "중급에서는 구조 연습과 함께 선택 제약 위반 후보도 구별해 보도록 설계했습니다.",
    allowSemanticViolations: true,
    hideParticlesInSlots: false,
    predicates: [
      predicate(
        "설명하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "대상", particle: "에게" },
          { role: "내용", particle: "을" }
        ],
        ["선생님이", "학생에게", "규칙을", "설명해요."],
        [
          arg("선생님", "주어"),
          arg("직원", "주어"),
          arg("학생", "대상"),
          arg("손님", "대상"),
          arg("규칙", "내용"),
          arg("사용법", "내용"),
          arg("구름", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "추천하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "대상", particle: "에게" },
          { role: "내용", particle: "을" }
        ],
        ["친구가", "저에게", "책을", "추천해요."],
        [
          arg("친구", "주어"),
          arg("선배", "주어"),
          arg("저", "대상"),
          arg("동생", "대상"),
          arg("책", "내용"),
          arg("영화", "내용"),
          arg("주차장", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "준비하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["학생이", "발표를", "준비해요."],
        [
          arg("학생", "주어"),
          arg("팀", "주어"),
          arg("발표", "목적어"),
          arg("시험", "목적어"),
          arg("행사", "목적어"),
          arg("바람", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "정리하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["학생이", "메모를", "정리해요."],
        [
          arg("학생", "주어"),
          arg("기자", "주어"),
          arg("메모", "목적어"),
          arg("자료", "목적어"),
          arg("생각", "목적어"),
          arg("비", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "공유하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "대상", particle: "와" },
          { role: "내용", particle: "를" }
        ],
        ["팀장이", "구성원과", "정보를", "공유해요."],
        [
          arg("팀장", "주어"),
          arg("교사", "주어"),
          arg("구성원", "대상"),
          arg("학생들", "대상"),
          arg("정보", "내용"),
          arg("자료", "내용"),
          arg("번개", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "선택하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "를" }
        ],
        ["고객이", "상품을", "선택해요."],
        [
          arg("고객", "주어"),
          arg("학생", "주어"),
          arg("상품", "목적어"),
          arg("방법", "목적어"),
          arg("진로", "목적어"),
          arg("천둥", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "결정하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["위원회가", "계획을", "결정해요."],
        [
          arg("위원회", "주어"),
          arg("팀", "주어"),
          arg("계획", "목적어"),
          arg("일정", "목적어"),
          arg("방향", "목적어"),
          arg("우유", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "비교하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["학생이", "두 자료를", "비교해요."],
        [
          arg("학생", "주어"),
          arg("연구원", "주어"),
          arg("두 자료", "목적어"),
          arg("두 의견", "목적어"),
          arg("가격", "목적어"),
          arg("노래", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "사용하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["직원이", "카드를", "사용해요."],
        [
          arg("직원", "주어"),
          arg("손님", "주어"),
          arg("카드", "목적어"),
          arg("기계", "목적어"),
          arg("앱", "목적어"),
          arg("별", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "경험하다",
        "동사",
        [
          { role: "주어", particle: "는" },
          { role: "목적어", particle: "을" }
        ],
        ["저는", "새 문화를", "경험했어요."],
        [
          arg("저", "주어"),
          arg("학생", "주어"),
          arg("새 문화", "목적어"),
          arg("실패", "목적어"),
          arg("새 생활", "목적어"),
          arg("돌", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "유지하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "를" }
        ],
        ["팀이", "질서를", "유지해요."],
        [
          arg("팀", "주어"),
          arg("학교", "주어"),
          arg("질서", "목적어"),
          arg("속도", "목적어"),
          arg("관계", "목적어"),
          arg("구름", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "확인하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "을" }
        ],
        ["직원이", "예약을", "확인해요."],
        [
          arg("직원", "주어"),
          arg("학생", "주어"),
          arg("예약", "목적어"),
          arg("일정", "목적어"),
          arg("주소", "목적어"),
          arg("비둘기", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "요구하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "를" }
        ],
        ["과제가", "집중을", "요구해요."],
        [
          arg("과제", "주어"),
          arg("상황", "주어"),
          arg("집중", "목적어"),
          arg("준비", "목적어"),
          arg("주의", "목적어"),
          arg("모자", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "포함하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "를" }
        ],
        ["계획이", "세부 내용을", "포함해요."],
        [
          arg("계획", "주어"),
          arg("보고서", "주어"),
          arg("세부 내용", "목적어"),
          arg("예시", "목적어"),
          arg("조건", "목적어"),
          arg("바람", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "복잡하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["문제가", "복잡해요."],
        [
          arg("문제", "주어"),
          arg("절차", "주어"),
          arg("구조", "주어"),
          arg("바나나", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "부족하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["시간이", "부족해요."],
        [
          arg("시간", "주어"),
          arg("정보", "주어"),
          arg("경험", "주어"),
          arg("구름", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "분명하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["목표가", "분명해요."],
        [
          arg("목표", "주어"),
          arg("이유", "주어"),
          arg("차이", "주어"),
          arg("토마토", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "적절하다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["표현이", "적절해요."],
        [
          arg("표현", "주어"),
          arg("방법", "주어"),
          arg("설명", "주어"),
          arg("구름", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "가능하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["참여가", "가능해요."],
        [
          arg("참여", "주어"),
          arg("신청", "주어"),
          arg("변경", "주어"),
          arg("달", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "불편하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["의자가", "불편해요."],
        [
          arg("의자", "주어"),
          arg("자리배치", "주어"),
          arg("화면", "주어"),
          arg("무지개", "주어", false, "선택 제약 위반")
        ]
      )
    ]
  },
  advanced: {
    title: "고급",
    subtitle:
      "고급에서는 조사 단서를 일부 비워 두고, 선택 제약까지 고려해 엄밀하게 문장을 완성합니다.",
    allowSemanticViolations: true,
    hideParticlesInSlots: true,
    predicates: [
      predicate(
        "간주하다",
        "동사",
        [
          { role: "주어", particle: "는" },
          { role: "대상", particle: "을" },
          { role: "보어", particle: "로" }
        ],
        ["연구자는", "그 결과를", "중요한 단서로", "간주합니다."],
        [
          arg("연구자", "주어"),
          arg("위원회", "주어"),
          arg("그 결과", "대상"),
          arg("그 현상", "대상"),
          arg("중요한 단서", "보어"),
          arg("핵심 자료", "보어"),
          arg("달콤한 의자", "보어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "가정하다",
        "동사",
        [
          { role: "주어", particle: "는" },
          { role: "내용", particle: "을" }
        ],
        ["필자는", "다른 조건을", "가정합니다."],
        [
          arg("필자", "주어"),
          arg("연구자", "주어"),
          arg("다른 조건", "내용"),
          arg("새로운 상황", "내용"),
          arg("반대 입장", "내용"),
          arg("붉은 연필", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "시사하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "내용", particle: "을" }
        ],
        ["자료가", "새로운 가능성을", "시사합니다."],
        [
          arg("자료", "주어"),
          arg("결과", "주어"),
          arg("새로운 가능성", "내용"),
          arg("한계", "내용"),
          arg("방향", "내용"),
          arg("베개", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "촉진하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "를" }
        ],
        ["정책이", "참여를", "촉진합니다."],
        [
          arg("정책", "주어"),
          arg("기술", "주어"),
          arg("참여", "목적어"),
          arg("변화", "목적어"),
          arg("성장", "목적어"),
          arg("우산", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "제한하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "을" }
        ],
        ["규정이", "행동을", "제한합니다."],
        [
          arg("규정", "주어"),
          arg("환경", "주어"),
          arg("행동", "목적어"),
          arg("접근", "목적어"),
          arg("선택", "목적어"),
          arg("하늘", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "반영하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "을" }
        ],
        ["결과가", "현실을", "반영합니다."],
        [
          arg("결과", "주어"),
          arg("자료", "주어"),
          arg("현실", "목적어"),
          arg("여론", "목적어"),
          arg("차이", "목적어"),
          arg("나무", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "규정하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "을" }
        ],
        ["법이", "범위를", "규정합니다."],
        [
          arg("법", "주어"),
          arg("제도", "주어"),
          arg("범위", "목적어"),
          arg("조건", "목적어"),
          arg("기준", "목적어"),
          arg("바다", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "의존하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "대상", particle: "에" }
        ],
        ["결과가", "환경에", "의존합니다."],
        [
          arg("결과", "주어"),
          arg("판단", "주어"),
          arg("환경", "대상"),
          arg("자료", "대상"),
          arg("조건", "대상"),
          arg("노래", "대상", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "개입하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "장소", particle: "에" }
        ],
        ["정부가", "시장에", "개입합니다."],
        [
          arg("정부", "주어"),
          arg("기관", "주어"),
          arg("시장", "장소"),
          arg("논의", "장소"),
          arg("과정", "장소"),
          arg("사과", "장소", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "구성하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "목적어", particle: "을" }
        ],
        ["필자가", "문장을", "구성합니다."],
        [
          arg("필자", "주어"),
          arg("화자", "주어"),
          arg("문장", "목적어"),
          arg("논리", "목적어"),
          arg("담론", "목적어"),
          arg("우산", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "도출하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "을" }
        ],
        ["연구팀이", "결론을", "도출했습니다."],
        [
          arg("연구팀", "주어"),
          arg("위원회", "주어"),
          arg("결론", "목적어"),
          arg("의미", "목적어"),
          arg("시사점", "목적어"),
          arg("구두", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "포괄하다",
        "동사",
        [
          { role: "주어", particle: "이" },
          { role: "목적어", particle: "를" }
        ],
        ["개념이", "여러 범주를", "포괄합니다."],
        [
          arg("개념", "주어"),
          arg("정의", "주어"),
          arg("여러 범주", "목적어"),
          arg("세부 항목", "목적어"),
          arg("예외", "목적어"),
          arg("별빛", "목적어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "전제하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "내용", particle: "을" }
        ],
        ["논의가", "공통 배경을", "전제합니다."],
        [
          arg("논의", "주어"),
          arg("설명", "주어"),
          arg("공통 배경", "내용"),
          arg("기본 지식", "내용"),
          arg("일정한 조건", "내용"),
          arg("작은 숟가락", "내용", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "타당하다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["주장이", "타당합니다."],
        [
          arg("주장", "주어"),
          arg("해석", "주어"),
          arg("근거", "주어"),
          arg("오렌지", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "적합하다",
        "형용사",
        [{ role: "주어", particle: "이" }],
        ["방법이", "적합합니다."],
        [
          arg("방법", "주어"),
          arg("자료", "주어"),
          arg("전략", "주어"),
          arg("호수", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "불가피하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["조정이", "불가피합니다."],
        [
          arg("조정", "주어"),
          arg("변경", "주어"),
          arg("논쟁", "주어"),
          arg("바나나", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "명시적이다",
        "-이다",
        [{ role: "주어", particle: "가" }],
        ["기준이", "명시적입니다."],
        [
          arg("기준", "주어"),
          arg("지침", "주어"),
          arg("설명", "주어"),
          arg("고양이", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "핵심적이다",
        "-이다",
        [{ role: "주어", particle: "가" }],
        ["이 변수가", "핵심적입니다."],
        [
          arg("이 변수", "주어"),
          arg("전제", "주어"),
          arg("문맥", "주어"),
          arg("모자", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "유의미하다",
        "형용사",
        [{ role: "주어", particle: "가" }],
        ["차이가", "유의미합니다."],
        [
          arg("차이", "주어"),
          arg("변화", "주어"),
          arg("대조", "주어"),
          arg("사탕", "주어", false, "선택 제약 위반")
        ]
      ),
      predicate(
        "상충하다",
        "동사",
        [
          { role: "주어", particle: "가" },
          { role: "대상", particle: "와" }
        ],
        ["두 입장이", "서로와", "상충합니다."],
        [
          arg("두 입장", "주어"),
          arg("그 요구", "주어"),
          arg("서로", "대상"),
          arg("이해", "대상"),
          arg("목표", "대상"),
          arg("책상", "대상", false, "선택 제약 위반")
        ]
      )
    ]
  }
};

function choiceButton(label, classes, dataset, detail = "") {
  const attrs = Object.entries(dataset)
    .map(([key, value]) => {
      const attr = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      return `data-${attr}="${String(value)}"`;
    })
    .join(" ");
  return `
    <button type="button" class="${classes}" ${attrs}>
      <span>${label}</span>
      ${detail ? `<small>${detail}</small>` : ""}
    </button>
  `;
}

function getDefaultState(predicateInfo) {
  return {
    selectedArguments: Array.from({ length: predicateInfo.slots.length }, () => null),
    selectedParticles: Array.from({ length: predicateInfo.slots.length }, () => null),
    focusSlot: 0,
    focusParticleSlot: null,
    feedback: "",
    lastFilledSlot: null,
    feedbackTone: "",
    invalidSlot: null
  };
}

function getOpenSlotIndex(state, predicateInfo) {
  const missingArgument = state.selectedArguments.findIndex((value) => value === null);
  return missingArgument === -1 ? 0 : missingArgument;
}

function getOpenParticleSlotIndex(state, predicateInfo) {
  const missingParticle = state.selectedParticles.findIndex((value, index) => {
    return predicateInfo.slots[index].particle && value === null;
  });
  return missingParticle === -1 ? 0 : missingParticle;
}

function createSentenceSlots(predicateInfo, state, level) {
  return predicateInfo.slots
    .map((slot, index) => {
      const selectedArgument = state.selectedArguments[index];
      const particleLabel = level.hideParticlesInSlots
        ? ""
        : PARTICLE_HINTS[slot.role] || slot.particle || "";
      const isCurrent = state.focusSlot === index;
      const isFilled = Boolean(selectedArgument);
      const isBurst = state.lastFilledSlot === index;
      const isInvalid = state.invalidSlot === index;

      return `
        <button type="button" class="answer-slot${isCurrent ? " active" : ""}${isFilled ? " filled" : ""}${isBurst ? " burst" : ""}${isInvalid ? " invalid" : ""}" data-slot-index="${index}">
          <span class="answer-role">${slot.role}</span>
          <span class="answer-inline">
            <span class="answer-text">${selectedArgument ? selectedArgument.text : " "}</span>
            <span class="answer-particle">${particleLabel || "&nbsp;"}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function createPredicateButtons(level, currentIndex) {
  return level.predicates
    .map((item, index) =>
      choiceButton(
        item.word,
        `predicate-button${index === currentIndex ? " active" : ""}`,
        { index }
      )
    )
    .join("");
}

function createArgumentButtons(predicateInfo, state) {
  return predicateInfo.arguments
    .map((item, index) => {
      return choiceButton(
        item.text,
        `arg-chip${!item.valid ? " danger" : ""}`,
        { argIndex: index }
      );
    })
    .join("");
}

function createParticleSlots(predicateInfo, state) {
  return predicateInfo.slots
    .map((slot, index) => {
      const selected = state.selectedParticles[index];
      const active = state.focusParticleSlot === index;
      return `
        <button type="button" class="particle-slot${active ? " active" : ""}" data-particle-slot-index="${index}">
          <span class="particle-slot-role">${slot.role}</span>
          <span class="particle-slot-value">${selected || "조사 선택"}</span>
        </button>
      `;
    })
    .join("");
}

function createParticleButtons(predicateInfo, state) {
  const slotIndex = state.focusParticleSlot ?? 0;
  const slot = predicateInfo.slots[slotIndex];
  const options = slot ? PARTICLE_OPTIONS[slot.particle] || [slot.particle] : [];
  if (!options.length) {
    return `<div class="hint-item"><strong>조사 후보 안내</strong> 먼저 논항을 넣거나 다른 조사 박스를 선택해 주세요.</div>`;
  }
  return options
    .map((particle, index) =>
      choiceButton(
        particle,
        `particle-chip${state.selectedParticles[slotIndex] === particle ? " active" : ""}`,
        { particleIndex: index, particleValue: particle }
      )
    )
    .join("");
}

function buildSentenceText(predicateInfo, state, level) {
  return predicateInfo.slots
    .map((slot, index) => {
      const argumentInfo = state.selectedArguments[index];
      if (!argumentInfo) {
        return `[${slot.role}]`;
      }
      if (level.hideParticlesInSlots) {
        return `${argumentInfo.text}${state.selectedParticles[index] || "[조사]"}`;
      }
      return `${argumentInfo.text}${slot.particle || ""}`;
    })
    .concat(predicateInfo.word)
    .join(" ");
}

function isCompleted(predicateInfo, state, level) {
  const argsDone = state.selectedArguments.every(Boolean);
  if (!argsDone) {
    return false;
  }
  if (!level.hideParticlesInSlots) {
    return true;
  }
  return state.selectedParticles.every((value, index) => {
    return predicateInfo.slots[index].particle ? Boolean(value) : true;
  });
}

function validateCurrentState(predicateInfo, state, level) {
  const invalidArgument = state.selectedArguments.find((item) => item && item.valid === false);
  if (invalidArgument) {
    return {
      message: "선택 제약을 어긴 논항이 들어가 있어 한국어 문장이 자연스럽지 않습니다.",
      tone: "error"
    };
  }

  return {
    message: "문장이 완성되었습니다.",
    tone: "success"
  };
}

function renderPage(levelKey) {
  const app = document.querySelector("[data-app]");
  if (!app) {
    return;
  }

  const level = LEVEL_DATA[levelKey];
  let currentIndex = 0;
  let state = getDefaultState(level.predicates[currentIndex]);

  const redraw = () => {
    const predicateInfo = level.predicates[currentIndex];
    const completed = isCompleted(predicateInfo, state, level);
    const sentenceText = buildSentenceText(predicateInfo, state, level);

    app.innerHTML = `
      <div class="lesson-head">
        <span class="eyebrow">Predicate First Practice</span>
        <h1>${level.title} 논항 구조</h1>
        <p>${level.subtitle}</p>
      </div>
      <section class="panel">
        <h2>문장이 완성될 공간</h2>
        <p class="panel-note">서술어를 먼저 선택하고, 각 칸을 눌러 논항과 조사를 맞춰 문장을 완성하세요.</p>
        <div class="construction-board">
          <div class="construction-row">
            ${createSentenceSlots(predicateInfo, state, level)}
            <div class="predicate-box fixed">${predicateInfo.word}</div>
          </div>
          ${level.hideParticlesInSlots ? `<div class="particle-slot-row">${createParticleSlots(predicateInfo, state)}</div>` : ""}
          <p class="live-sentence">${sentenceText}</p>
          ${state.feedback ? `<p class="feedback${state.feedbackTone === "success" ? " success" : ""}${state.feedbackTone === "error" ? " error" : ""}">${state.feedback}</p>` : ""}
        </div>
      </section>
      <div class="choice-columns">
        <section class="panel">
          <h2>서술어 후보</h2>
          <div class="candidate-grid">
            ${createPredicateButtons(level, currentIndex)}
          </div>
        </section>
        <section class="panel">
          <h2>논항 후보</h2>
          <p class="panel-note">비어 있는 칸을 왼쪽부터 채우고, 완성 후에는 바꿀 칸을 눌러 다시 고칠 수 있습니다.</p>
          <div class="candidate-list">
            ${createArgumentButtons(predicateInfo, state)}
          </div>
          ${level.hideParticlesInSlots ? `
          <h2 style="margin-top:18px">조사 후보</h2>
          <p class="panel-note">논항을 채운 뒤 조사 박스를 눌러 해당 조사도 선택하세요.</p>
          <div class="candidate-list">
            ${createParticleButtons(predicateInfo, state)}
          </div>
          ` : ""}
          <div class="hint-list" style="margin-top:18px">
            <div class="hint-item"><strong>${level.hideParticlesInSlots ? "고급 규칙" : "초·중급 규칙"}</strong> ${level.hideParticlesInSlots ? "고급은 조사 없이 빈 칸이 주어집니다. 의미 관계를 보고 논항을 넣어 보세요." : "초급과 중급은 각 칸 안에 조사가 먼저 보입니다. 알맞은 논항을 눌러 문장을 채워 보세요."}</div>
          </div>
        </section>
      </div>
    `;

    app.querySelectorAll("[data-index]").forEach((button) => {
      button.addEventListener("click", () => {
        currentIndex = Number(button.dataset.index);
        state = getDefaultState(level.predicates[currentIndex]);
        redraw();
      });
    });

    app.querySelectorAll("[data-slot-index]").forEach((button) => {
      button.addEventListener("click", () => {
        if (state.selectedArguments.every(Boolean)) {
          state.focusSlot = Number(button.dataset.slotIndex);
          state.feedback = "바꿀 칸을 선택했습니다. 해당 역할의 논항 후보를 눌러 바꿔 보세요.";
          state.feedbackTone = "";
          state.lastFilledSlot = null;
          state.invalidSlot = null;
          redraw();
        }
      });
    });

    app.querySelectorAll("[data-particle-slot-index]").forEach((button) => {
      button.addEventListener("click", () => {
        state.focusParticleSlot = Number(button.dataset.particleSlotIndex);
        state.feedback = "조사 박스를 선택했습니다. 아래 조사 후보에서 골라 보세요.";
        state.feedbackTone = "";
        redraw();
      });
    });

    app.querySelectorAll("[data-arg-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = predicateInfo.arguments[Number(button.dataset.argIndex)];
        const targetSlotIndex = state.selectedArguments.every(Boolean)
          ? state.focusSlot
          : getOpenSlotIndex(state, predicateInfo);

        state.selectedArguments[targetSlotIndex] = selected;
        state.invalidSlot = selected.valid === false ? targetSlotIndex : null;
        if (level.hideParticlesInSlots && state.selectedParticles[targetSlotIndex] === null) {
          state.focusParticleSlot = targetSlotIndex;
        }
        if (isCompleted(predicateInfo, state, level)) {
          const result = validateCurrentState(predicateInfo, state, level);
          state.feedback = result.message;
          state.feedbackTone = result.tone;
        } else {
          state.feedback = level.hideParticlesInSlots
            ? "논항을 넣었습니다. 조사 박스도 함께 채워 보세요."
            : "다음 칸을 눌러 논항을 이어서 선택하세요.";
          state.feedbackTone = "";
        }
        state.focusSlot = getOpenSlotIndex(state, predicateInfo);
        state.lastFilledSlot = targetSlotIndex;
        redraw();
      });
    });

    app.querySelectorAll("[data-particle-value]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetSlotIndex = state.focusParticleSlot ?? getOpenParticleSlotIndex(state, predicateInfo);
        state.selectedParticles[targetSlotIndex] = button.dataset.particleValue;
        if (isCompleted(predicateInfo, state, level)) {
          const result = validateCurrentState(predicateInfo, state, level);
          state.feedback = result.message;
          state.feedbackTone = result.tone;
        } else {
          state.feedback = "조사를 넣었습니다. 다음 논항이나 조사를 이어서 선택하세요.";
          state.feedbackTone = "";
        }
        state.focusParticleSlot = getOpenParticleSlotIndex(state, predicateInfo);
        redraw();
      });
    });
  };

  redraw();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page && LEVEL_DATA[page]) {
    renderPage(page);
  }
});
