export const FeedbackOptions = p => (
  <>
    <button onClick={p.onLeaveFeedback('good')} type="button">
      good
    </button>
    <button onClick={p.onLeaveFeedback('neutral')} type="button">
      neutral
    </button>
    <button onClick={p.onLeaveFeedback('bad')} type="button">
      bad
    </button>
  </>
);
