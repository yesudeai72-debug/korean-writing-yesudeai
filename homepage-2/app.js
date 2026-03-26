const ROLE_PARTICLES = {
  주어: ["이", "가"],
  목적어: ["을", "를"],
  대상: ["에게", "한테", "에"],
  내용: ["을", "를"],
  장소: ["에", "에서"],
  도착점: ["에"],
  출발점: ["에서"],
  위치: ["에"],
  보어: ["로", "으로"],
  상태: ["이", "가"]
};

const LEVEL_DATA = {
  beginner: {
    title: "초급",
    subtitle:
      "서술어를 고르면 필요한 논항 수만큼 칸이 생기고, 조사까지 골라 짧은 문장을 완성합니다.",
    showParticleChoices: true,
    allowSemanticViolations: false,
    advancedBlankParticleIndex: null,
    predicates: [
      {
        word: "먹다",
        type: "동사",
        slots: [
          { role: "주어", particle: "가", answer: "아이가" },
          { role: "목적어", particle: "를", answer: "사과를" }
        ],
        sample: ["아이가", "사과를", "먹어요."],
        arguments: [
          { text: "아이가", role: "주어", valid: true },
          { text: "학생이", role: "주어", valid: true },
          { text: "엄마가", role: "주어", valid: true },
          { text: "사과를", role: "목적어", valid: true },
          { text: "빵을", role: "목적어", valid: true },
          { text: "저녁을", role: "목적어", valid: true }
        ]
      },
      {
        word: "가다",
        type: "동사",
        slots: [
          { role: "주어", particle: "이", answer: "학생이" },
          { role: "도착점", particle: "에", answer: "학교에" }
        ],
        sample: ["학생이", "학교에", "가요."],
        arguments: [
          { text: "학생이", role: "주어", valid: true },
          { text: "친구가", role: "주어", valid: true },
          { text: "동생이", role: "주어", valid: true },
          { text: "학교에", role: "도착점", valid: true },
          { text: "집에", role: "도착점", valid: true },
          { text: "회사에", role: "도착점", valid: true }
        ]
      },
      {
        word: "보다",
        type: "동사",
        slots: [
          { role: "주어", particle: "가", answer: "제가" },
          { role: "목적어", particle: "를", answer: "영화를" }
        ],
        sample: ["제가", "영화를", "봐요."],
        arguments: [
          { text: "제가", role: "주어", valid: true },
          { text: "동생이", role: "주어", valid: true },
          { text: "친구가", role: "주어", valid: true },
          { text: "영화를", role: "목적어", valid: true },
          { text: "사진을", role: "목적어", valid: true },
          { text: "텔레비전을", role: "목적어", valid: true }
        ]
      },
      {
        word: "좋아하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "가", answer: "제가" },
          { role: "목적어", particle: "를", answer: "김치를" }
        ],
        sample: ["제가", "김치를", "좋아해요."],
        arguments: [
          { text: "제가", role: "주어", valid: true },
          { text: "동생이", role: "주어", valid: true },
          { text: "언니가", role: "주어", valid: true },
          { text: "김치를", role: "목적어", valid: true },
          { text: "음악을", role: "목적어", valid: true },
          { text: "여행을", role: "목적어", valid: true }
        ]
      },
      {
        word: "예쁘다",
        type: "형용사",
        slots: [{ role: "주어", particle: "이", answer: "꽃이" }],
        sample: ["꽃이", "예뻐요."],
        arguments: [
          { text: "꽃이", role: "주어", valid: true },
          { text: "가방이", role: "주어", valid: true },
          { text: "바다가", role: "주어", valid: true },
          { text: "그림이", role: "주어", valid: true }
        ]
      },
      {
        word: "필요하다",
        type: "형용사",
        slots: [{ role: "주어", particle: "가", answer: "시간이" }],
        sample: ["시간이", "필요해요."],
        arguments: [
          { text: "시간이", role: "주어", valid: true },
          { text: "준비가", role: "주어", valid: true },
          { text: "도움이", role: "주어", valid: true },
          { text: "연습이", role: "주어", valid: true }
        ]
      }
    ]
  },
  intermediate: {
    title: "중급",
    subtitle:
      "조사까지 선택하면서, 선택 제약을 어기는 후보도 함께 보고 한국어 비문 감각을 익힙니다.",
    showParticleChoices: true,
    allowSemanticViolations: true,
    advancedBlankParticleIndex: null,
    predicates: [
      {
        word: "설명하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "이", answer: "선생님이" },
          { role: "대상", particle: "에게", answer: "학생에게" },
          { role: "내용", particle: "을", answer: "규칙을" }
        ],
        sample: ["선생님이", "학생에게", "규칙을", "설명해요."],
        arguments: [
          { text: "선생님이", role: "주어", valid: true },
          { text: "직원이", role: "주어", valid: true },
          { text: "학생에게", role: "대상", valid: true },
          { text: "손님에게", role: "대상", valid: true },
          { text: "규칙을", role: "내용", valid: true },
          { text: "사용법을", role: "내용", valid: true },
          { text: "구름을", role: "내용", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "추천하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "가", answer: "친구가" },
          { role: "대상", particle: "에게", answer: "저에게" },
          { role: "내용", particle: "을", answer: "책을" }
        ],
        sample: ["친구가", "저에게", "책을", "추천해요."],
        arguments: [
          { text: "친구가", role: "주어", valid: true },
          { text: "선배가", role: "주어", valid: true },
          { text: "저에게", role: "대상", valid: true },
          { text: "동생에게", role: "대상", valid: true },
          { text: "책을", role: "내용", valid: true },
          { text: "영화를", role: "내용", valid: true },
          { text: "주차장을", role: "내용", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "유지하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "이", answer: "팀이" },
          { role: "목적어", particle: "를", answer: "질서를" }
        ],
        sample: ["팀이", "질서를", "유지해요."],
        arguments: [
          { text: "팀이", role: "주어", valid: true },
          { text: "학교가", role: "주어", valid: true },
          { text: "질서를", role: "목적어", valid: true },
          { text: "속도를", role: "목적어", valid: true },
          { text: "관계를", role: "목적어", valid: true },
          { text: "구름을", role: "목적어", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "공유하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "이", answer: "팀장이" },
          { role: "대상", particle: "와", answer: "구성원과" },
          { role: "내용", particle: "를", answer: "정보를" }
        ],
        sample: ["팀장이", "구성원과", "정보를", "공유해요."],
        arguments: [
          { text: "팀장이", role: "주어", valid: true },
          { text: "교사가", role: "주어", valid: true },
          { text: "구성원과", role: "대상", valid: true },
          { text: "학생들과", role: "대상", valid: true },
          { text: "정보를", role: "내용", valid: true },
          { text: "자료를", role: "내용", valid: true },
          { text: "번개를", role: "내용", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "복잡하다",
        type: "형용사",
        slots: [{ role: "주어", particle: "가", answer: "문제가" }],
        sample: ["문제가", "복잡해요."],
        arguments: [
          { text: "문제가", role: "주어", valid: true },
          { text: "절차가", role: "주어", valid: true },
          { text: "구조가", role: "주어", valid: true },
          { text: "바나나가", role: "주어", valid: false, note: "선택 제약 위반" }
        ]
      }
    ]
  },
  advanced: {
    title: "고급",
    subtitle:
      "고급에서는 조사 단서를 하나 비워 두고, 선택 제약을 따져 가며 더 엄밀하게 논항 구조를 완성합니다.",
    showParticleChoices: false,
    allowSemanticViolations: true,
    advancedBlankParticleIndex: 0,
    predicates: [
      {
        word: "간주하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "는", answer: "연구자는" },
          { role: "대상", particle: "을", answer: "그 결과를" },
          { role: "보어", particle: "로", answer: "중요한 단서로" }
        ],
        sample: ["연구자는", "그 결과를", "중요한 단서로", "간주합니다."],
        arguments: [
          { text: "연구자는", role: "주어", valid: true },
          { text: "위원회는", role: "주어", valid: true },
          { text: "그 결과를", role: "대상", valid: true },
          { text: "그 현상을", role: "대상", valid: true },
          { text: "중요한 단서로", role: "보어", valid: true },
          { text: "핵심 자료로", role: "보어", valid: true },
          { text: "달콤한 의자로", role: "보어", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "촉진하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "이", answer: "정책이" },
          { role: "목적어", particle: "를", answer: "참여를" }
        ],
        sample: ["정책이", "참여를", "촉진합니다."],
        arguments: [
          { text: "정책이", role: "주어", valid: true },
          { text: "기술이", role: "주어", valid: true },
          { text: "참여를", role: "목적어", valid: true },
          { text: "변화를", role: "목적어", valid: true },
          { text: "성장을", role: "목적어", valid: true },
          { text: "우산을", role: "목적어", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "시사하다",
        type: "동사",
        slots: [
          { role: "주어", particle: "가", answer: "자료가" },
          { role: "내용", particle: "을", answer: "새로운 가능성을" }
        ],
        sample: ["자료가", "새로운 가능성을", "시사합니다."],
        arguments: [
          { text: "자료가", role: "주어", valid: true },
          { text: "결과가", role: "주어", valid: true },
          { text: "새로운 가능성을", role: "내용", valid: true },
          { text: "한계를", role: "내용", valid: true },
          { text: "방향을", role: "내용", valid: true },
          { text: "베개를", role: "내용", valid: false, note: "선택 제약 위반" }
        ]
      },
      {
        word: "타당하다",
        type: "형용사",
        slots: [{ role: "주어", particle: "이", answer: "주장이" }],
        sample: ["주장이", "타당합니다."],
        arguments: [
          { text: "주장이", role: "주어", valid: true },
          { text: "해석이", role: "주어", valid: true },
          { text: "근거가", role: "주어", valid: true },
          { text: "오렌지가", role: "주어", valid: false, note: "선택 제약 위반" }
        ]
      }
    ]
  }
};

function choiceButton(label, classes, dataset, detail = "") {
  const attrs = Object.entries(dataset)
    .map(([key, value]) => `data-${key}="${String(value)}"`)
    .join(" ");
  return `
    <button type="button" class="${classes}" ${attrs}>
      <span>${label}</span>
      ${detail ? `<small>${detail}</small>` : ""}
    </button>
  `;
}

function getDefaultState(predicate) {
  return {
    selectedArguments: Array.from({ length: predicate.slots.length }, () => null),
    selectedParticles: predicate.slots.map(() => null),
    focusSlot: 0,
    feedback: ""
  };
}

function getOpenSlotIndex(state, predicate) {
  const missingArgument = state.selectedArguments.findIndex((value) => value === null);
  if (missingArgument !== -1) {
    return missingArgument;
  }

  const missingParticle = predicate.slots.findIndex((slot, index) => {
    return slot.particle && state.selectedParticles[index] === null;
  });
  return missingParticle === -1 ? 0 : missingParticle;
}

function createSampleSentence(predicate) {
  return predicate.sample
    .map(
      (text, index) => `
        <div class="sample-chip" style="animation-delay:${index * 160}ms">${text}</div>
      `
    )
    .join("");
}

function createSentenceSlots(predicate, state, level) {
  return predicate.slots
    .map((slot, index) => {
      const selectedArgument = state.selectedArguments[index];
      const particleVisible = !(
        level.advancedBlankParticleIndex === index && !level.showParticleChoices
      );
      const particleLabel = slot.particle && particleVisible ? slot.particle : "";
      const particleChoice = state.selectedParticles[index];

      return `
        <button type="button" class="answer-slot${state.focusSlot === index ? " active" : ""}" data-slot-index="${index}">
          <span class="answer-role">${slot.role}</span>
          <span class="answer-particle">${particleChoice || particleLabel || " "}</span>
          <span class="answer-text">${selectedArgument ? selectedArgument.text : "논항 선택"}</span>
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
        { index },
        `${item.type} · ${item.slots.length}개 논항`
      )
    )
    .join("");
}

function createArgumentButtons(predicate, state, level) {
  const currentRole = predicate.slots[state.focusSlot]?.role;
  return predicate.arguments
    .map((item, index) => {
      const isCurrentRole = item.role === currentRole;
      const isDisabled = !isCurrentRole;
      const label = item.text;
      const detail = item.valid ? item.role : `${item.role} · 선택 제약 위반`;
      return choiceButton(
        label,
        `arg-chip${isDisabled ? " muted" : ""}${!item.valid ? " danger" : ""}`,
        { argIndex: index },
        detail
      );
    })
    .join("");
}

function createParticleButtons(predicate, state, level) {
  if (!level.showParticleChoices) {
    return "";
  }
  const currentSlot = predicate.slots[state.focusSlot];
  const options = ROLE_PARTICLES[currentSlot.role] || [currentSlot.particle];

  return options
    .map((particle, index) =>
      choiceButton(
        particle,
        `particle-chip${state.selectedParticles[state.focusSlot] === particle ? " active" : ""}`,
        { particleIndex: index, particleValue: particle },
        currentSlot.role
      )
    )
    .join("");
}

function buildSentenceText(predicate, state, level) {
  return predicate.slots
    .map((slot, index) => {
      const argument = state.selectedArguments[index];
      const particle = state.selectedParticles[index] || "";
      const particleVisible = !(
        level.advancedBlankParticleIndex === index && !level.showParticleChoices
      );
      if (!argument) {
        return `[${slot.role}]`;
      }
      if (!particleVisible) {
        return argument.text;
      }
      return particle ? `${argument.text}${particle}` : `${argument.text}[조사]`;
    })
    .concat(predicate.word)
    .join(" ");
}

function isCompleted(predicate, state, level) {
  const allArgumentsFilled = state.selectedArguments.every(Boolean);
  if (!allArgumentsFilled) {
    return false;
  }
  if (!level.showParticleChoices) {
    return true;
  }
  return predicate.slots.every((slot, index) => {
    if (!slot.particle) {
      return true;
    }
    return Boolean(state.selectedParticles[index]);
  });
}

function validateCurrentState(predicate, state, level) {
  const invalidArgument = state.selectedArguments.find((item) => item && item.valid === false);
  if (invalidArgument) {
    return "선택 제약을 어긴 논항이 들어가 있어 한국어 문장이 자연스럽지 않습니다.";
  }

  if (level.showParticleChoices) {
    const wrongParticle = predicate.slots.find((slot, index) => {
      return slot.particle && state.selectedParticles[index] && state.selectedParticles[index] !== slot.particle;
    });
    if (wrongParticle) {
      return "조사 선택을 다시 확인해 주세요. 이 서술어는 정해진 논항과 조사 결합을 요구합니다.";
    }
  }

  return "문장이 완성되었습니다.";
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
    const predicate = level.predicates[currentIndex];
    const completed = isCompleted(predicate, state, level);
    const sentenceText = buildSentenceText(predicate, state, level);

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
            ${createSentenceSlots(predicate, state, level)}
            <div class="predicate-box fixed">${predicate.word}</div>
          </div>
          <p class="live-sentence">${sentenceText}</p>
          ${state.feedback ? `<p class="feedback${completed && !state.feedback.includes("자연스럽지") && !state.feedback.includes("다시") ? " success" : ""}">${state.feedback}</p>` : ""}
        </div>
      </section>
      <section class="panel" style="margin-top:14px">
        <h2>샘플 문장</h2>
        <p class="panel-note">샘플에서는 논항이 왼쪽부터 차례대로 나타납니다.</p>
        <div class="sample-line">${createSampleSentence(predicate)}</div>
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
          <p class="panel-note">현재 선택 중인 칸: ${predicate.slots[state.focusSlot].role}</p>
          <div class="candidate-list">
            ${createArgumentButtons(predicate, state, level)}
          </div>
          ${
            level.showParticleChoices
              ? `
            <h2 style="margin-top:18px">조사 후보</h2>
            <div class="candidate-list particle-list">
              ${createParticleButtons(predicate, state, level)}
            </div>
          `
              : `
            <div class="hint-list" style="margin-top:18px">
              <div class="hint-item"><strong>고급 규칙</strong> 한 칸은 조사 단서 없이 제시됩니다. 의미와 서술어 요구를 보고 판단해 보세요.</div>
            </div>
          `
          }
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
        state.focusSlot = Number(button.dataset.slotIndex);
        redraw();
      });
    });

    app.querySelectorAll("[data-arg-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = predicate.arguments[Number(button.dataset.argIndex)];
        const currentRole = predicate.slots[state.focusSlot].role;
        if (selected.role !== currentRole) {
          state.feedback = "지금 고르는 칸과 역할이 맞지 않습니다.";
          redraw();
          return;
        }
        state.selectedArguments[state.focusSlot] = selected;
        if (level.showParticleChoices) {
          state.feedback = "이제 조사 후보도 골라 보세요.";
        } else {
          state.feedback = validateCurrentState(predicate, state, level);
        }
        state.focusSlot = getOpenSlotIndex(state, predicate);
        if (isCompleted(predicate, state, level)) {
          state.feedback = validateCurrentState(predicate, state, level);
        }
        redraw();
      });
    });

    app.querySelectorAll("[data-particle-value]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedParticles[state.focusSlot] = button.dataset.particleValue;
        state.feedback = isCompleted(predicate, state, level)
          ? validateCurrentState(predicate, state, level)
          : "다음 칸을 눌러 논항을 이어서 선택하세요.";
        state.focusSlot = getOpenSlotIndex(state, predicate);
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
