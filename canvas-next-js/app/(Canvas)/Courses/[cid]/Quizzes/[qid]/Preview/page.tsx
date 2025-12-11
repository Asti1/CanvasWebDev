/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../../client";
import { Quiz, Question } from "../../types";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (qid) {
        const q = await client.findQuizById(qid as string);
        setQuiz(q);
      }
    };
    fetchQuiz();
  }, [qid]);

  const handleAnswerChange = (questionIndex: number, answer: any) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let totalScore = 0;
    quiz.questions.forEach((q, index) => {
      const userAnswer = answers[index];
      let isCorrect = false;

      if (
        q.questionType === "MULTIPLE_CHOICE" ||
        q.questionType === "TRUE_FALSE"
      ) {
        const correctChoice = q.choices.find((c) => c.isCorrect);
        if (correctChoice && userAnswer === correctChoice.text) {
          isCorrect = true;
        }
      } else if (q.questionType === "FILL_IN_BLANK") {
        // Case insensitive match for any correct answer
        const correctChoice = q.choices.find(
          (c) => c.text.toLowerCase() === (userAnswer || "").toLowerCase()
        );
        if (correctChoice) {
          isCorrect = true;
        }
      }

      if (isCorrect) {
        totalScore += q.points;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const handleEditQuiz = () => {
    router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="container mt-4" id="wd-quiz-preview">
      <Alert variant="danger" className="d-flex align-items-center">
        <FaExclamationTriangle className="me-2" />
        <span>This is a preview of the published version of the quiz</span>
      </Alert>

      <h3>{quiz.title}</h3>
      {submitted && (
        <Alert variant="success">
          <h4>Quiz Submitted!</h4>
          <p>
            Your Score: {score} / {quiz.points}
          </p>
        </Alert>
      )}

      {quiz.questions.map((q: Question, index: number) => (
        <Card key={index} className="mb-4">
          <Card.Header className="d-flex justify-content-between">
            <h5>{q.title}</h5>
            <span>{q.points} pts</span>
          </Card.Header>
          <Card.Body>
            <Card.Text
              dangerouslySetInnerHTML={{ __html: q.questionText || "" }}
            />{" "}
            {/* Simple render, assuming safe HTML or plain text */}
            {q.questionType === "MULTIPLE_CHOICE" && (
              <Form>
                {q.choices.map((choice, i) => (
                  <Form.Check
                    key={i}
                    type="radio"
                    label={choice.text}
                    name={`question-${index}`}
                    onChange={() => handleAnswerChange(index, choice.text)}
                    disabled={submitted}
                    isInvalid={
                      submitted &&
                      choice.isCorrect &&
                      answers[index] !== choice.text
                    } // Highlight missed correct
                    isValid={
                      submitted &&
                      choice.isCorrect &&
                      answers[index] === choice.text
                    } // Highlight correct
                    checked={answers[index] === choice.text}
                  />
                ))}
              </Form>
            )}
            {q.questionType === "TRUE_FALSE" && (
              <Form>
                {q.choices.map((choice, i) => (
                  <Form.Check
                    key={i}
                    type="radio"
                    label={choice.text}
                    name={`question-${index}`}
                    onChange={() => handleAnswerChange(index, choice.text)}
                    disabled={submitted}
                    checked={answers[index] === choice.text}
                  />
                ))}
              </Form>
            )}
            {q.questionType === "FILL_IN_BLANK" && (
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                disabled={submitted}
                value={answers[index] || ""}
              />
            )}
            {submitted && (
              <div className="mt-2">
                {/* Show correct answers logic if desired */}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-end mb-5">
        {!submitted ? (
          <Button variant="primary" onClick={handleSubmit} className="w-100">
            Submit Quiz
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={handleEditQuiz}
            className="w-100"
          >
            Edit Quiz
          </Button>
        )}
      </div>
    </div>
  );
}
