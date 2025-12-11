export interface Question {
  _id?: string;
  id?: string; // Optional for new questions
  title: string;
  points: number;
  questionType: "MULTIPLE_CHOICE" | "TRUE_FALSE" | "FILL_IN_BLANK";
  questionText: string;
  choices: { text: string; isCorrect: boolean }[];
}

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  course: string;
  points: number;
  quizType:
    | "GRADED_QUIZ"
    | "PRACTICE_QUIZ"
    | "GRADED_SURVEY"
    | "UNGRADED_SURVEY";
  assignmentGroup: "QUIZZES" | "EXAMS" | "ASSIGNMENTS" | "PROJECT";
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  howManyAttempts?: number;
  showCorrectAnswers: boolean;
  accessCode?: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  dueDate?: string;
  availableDate?: string;
  untilDate?: string;
  published: boolean;
  questions: Question[];
}
