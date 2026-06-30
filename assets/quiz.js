/* ==========================================================================
   Reusable quiz widget. Drop this markup into any lesson and load this script:

   <div class="quiz" data-answer="1">
     <p class="quiz-prompt">Your question?</p>
     <button class="quiz-choice">First option</button>
     <button class="quiz-choice">Second option</button>   <!-- index 1 = correct -->
     <button class="quiz-choice">Third option</button>
     <p class="quiz-explain">Shown after answering — the why.</p>
   </div>

   data-answer is the zero-based index of the correct .quiz-choice.
   Feedback is immediate and automatic (retrieval practice + tight loop).
   Styles are injected here so a lesson only needs this one <script>.
   ========================================================================== */
(function () {
  const css = `
    .quiz { font-family: var(--font-ui, system-ui); border: 1px solid var(--rule, #e3e0d6);
            border-radius: 8px; padding: 1.1rem 1.2rem; margin: 2rem 0; background: #fff; }
    .quiz-prompt { font-weight: 600; font-size: 1rem; margin: 0 0 0.8rem; }
    .quiz-choice { display: block; width: 100%; text-align: left; font: inherit; font-size: 0.95rem;
            padding: 0.6rem 0.8rem; margin: 0.4rem 0; border: 1px solid var(--rule, #e3e0d6);
            border-radius: 6px; background: #fafaf7; cursor: pointer; transition: all .12s; }
    .quiz-choice:hover:not(:disabled) { border-color: #999; background: #f0efe9; }
    .quiz-choice:disabled { cursor: default; }
    .quiz-choice.correct { background: var(--good-soft, #e9f3ec); border-color: var(--good, #2f6b3a); font-weight: 600; }
    .quiz-choice.wrong   { background: #f7e9e9; border-color: #b54040; }
    .quiz-choice .mark { float: right; font-weight: 700; }
    .quiz-explain { display: none; font-size: 0.92rem; line-height: 1.5; margin: 0.9rem 0 0;
            padding: 0.7rem 0.9rem; background: var(--accent-soft, #f3e9ea);
            border-left: 3px solid var(--accent, #7a1f2b); border-radius: 0 4px 4px 0; }
    .quiz-explain.show { display: block; }
    .quiz.answered .quiz-prompt::after { content: ""; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  document.querySelectorAll(".quiz").forEach((quiz) => {
    const answer = parseInt(quiz.getAttribute("data-answer"), 10);
    const choices = [...quiz.querySelectorAll(".quiz-choice")];
    const explain = quiz.querySelector(".quiz-explain");

    choices.forEach((choice, i) => {
      choice.addEventListener("click", () => {
        if (quiz.classList.contains("answered")) return;
        quiz.classList.add("answered");
        choices.forEach((c) => (c.disabled = true));
        choices[answer].classList.add("correct");
        choices[answer].insertAdjacentHTML("beforeend", '<span class="mark">✓</span>');
        if (i !== answer) {
          choice.classList.add("wrong");
          choice.insertAdjacentHTML("beforeend", '<span class="mark">✗</span>');
        }
        if (explain) explain.classList.add("show");
      });
    });
  });
})();
