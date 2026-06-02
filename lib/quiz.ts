// Hair & Scalp Quiz questions.
// OPEN ITEM (build brief §7.4): these are sensible placeholders. Replace with the
// exact questions from Megan's existing Google Form intake. The form renderer is
// data-driven, so editing this array is all it takes.

export type QuizQuestion = {
  id: string;
  prompt: string;
  type: "single" | "multi";
  options: string[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "concern",
    prompt: "What brought you here today?",
    type: "single",
    options: [
      "My hair is thinning or shedding more than usual",
      "My part is getting wider or I see more scalp",
      "I have patches of loss",
      "My scalp is itchy, flaky, or irritated",
      "I want healthier hair in general",
    ],
  },
  {
    id: "duration",
    prompt: "How long have you noticed the change?",
    type: "single",
    options: ["Less than 3 months", "3 to 6 months", "6 to 12 months", "More than a year", "Not sure"],
  },
  {
    id: "tried",
    prompt: "What have you already tried? (Choose any that apply)",
    type: "multi",
    options: [
      "Special shampoos",
      "Oils like rosemary or castor",
      "Minoxidil",
      "Supplements or vitamins",
      "A dermatologist or doctor",
      "Nothing yet",
    ],
  },
  {
    id: "triggers",
    prompt: "Has anything big happened in the last year? (Choose any that apply)",
    type: "multi",
    options: [
      "Major stress",
      "Illness or surgery",
      "Pregnancy or childbirth",
      "A big change in diet or weight",
      "A new medication",
      "None of these",
    ],
  },
  {
    id: "goal",
    prompt: "If we could get one thing right for you, what would it be?",
    type: "single",
    options: [
      "Understand why this is happening",
      "Slow down or stop the loss",
      "Grow hair back",
      "Get my scalp healthy",
      "Just feel like myself again",
    ],
  },
];
