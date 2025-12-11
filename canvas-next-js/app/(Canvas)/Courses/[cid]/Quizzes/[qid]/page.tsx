/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../client";
import { Quiz } from "../types";
import { Button, Row, Col, Table, Alert } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  useEffect(() => {
    const fetchQuiz = async () => {
      if (qid) {
        try {
          const q = await client.findQuizById(qid as string);
          setQuiz(q);
          if (currentUser && currentUser.role === "STUDENT") {
            const subs = await client.findSubmissionsForUser(
              qid as string,
              currentUser.username
            );
            setSubmissions(subs);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchQuiz();
  }, [qid, currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!quiz) return <div>Loading...</div>;
  if (!currentUser) return <div>Please sign in to view this quiz.</div>;

  const isFaculty =
    currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const isStudent = currentUser.role === "STUDENT";

  const attemptsTaken = submissions.length;
  // If multipleAttempts is false, limit is 1. If true, limit is howManyAttempts (default 1 if undefined?)
  const maxAttempts = quiz.multipleAttempts ? quiz.howManyAttempts || 1 : 1;
  const canTake = attemptsTaken < maxAttempts;
  const latestScore =
    submissions.length > 0 ? submissions[submissions.length - 1].score : null;

  return (
    <div id="wd-quiz-details" className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        {isFaculty && (
          <>
            <Button
              variant="secondary"
              className="me-2"
              onClick={() =>
                router.push(`/Courses/${cid}/Quizzes/${qid}/Preview`)
              }
            >
              Preview
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                router.push(`/Courses/${cid}/Quizzes/${qid}/Editor`)
              }
            >
              <FaPencilAlt className="me-1" /> Edit
            </Button>
          </>
        )}
        {isStudent && (
          <div className="d-flex gap-2">
            {canTake && (
              <Button
                variant="primary"
                onClick={() =>
                  router.push(`/Courses/${cid}/Quizzes/${qid}/Take`)
                }
              >
                {attemptsTaken === 0 ? "Start Quiz" : "Take Quiz Again"}
              </Button>
            )}
            {attemptsTaken > 0 && (
              <Button
                variant="secondary"
                onClick={() =>
                  router.push(`/Courses/${cid}/Quizzes/${qid}/Take?view=true`)
                }
              >
                View Results
              </Button>
            )}
          </div>
        )}
      </div>

      <hr />

      <h1>{quiz.title}</h1>

      {/* Show Description if exists */}
      {quiz.description && (
        <div
          className="alert alert-secondary mb-4"
          dangerouslySetInnerHTML={{ __html: quiz.description }}
        ></div>
      )}

      {currentUser.role === "STUDENT" && attemptsTaken > 0 && (
        <Alert variant="info" className="mt-3">
          <h5>Latest Attempt</h5>
          <p className="mb-0">
            Score: {latestScore} / {quiz.points}
          </p>
          <p className="mb-0">
            Attempt: {attemptsTaken} / {maxAttempts}
          </p>
        </Alert>
      )}

      <Row className="mt-4 justify-content-center">
        <Col md={8}>
          <Table borderless>
            <tbody>
              <tr>
                <td className="text-end fw-bold">Quiz Type</td>
                <td>{quiz.quizType}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Points</td>
                <td>{quiz.points}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Assignment Group</td>
                <td>{quiz.assignmentGroup}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Shuffle Answers</td>
                <td>{quiz.shuffleAnswers ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Time Limit</td>
                <td>{quiz.timeLimit} Minutes</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Multiple Attempts</td>
                <td>{quiz.multipleAttempts ? "Yes" : "No"}</td>
              </tr>
              {quiz.multipleAttempts && (
                <tr>
                  <td className="text-end fw-bold">How Many Attempts</td>
                  <td>{quiz.howManyAttempts}</td>
                </tr>
              )}
              <tr>
                <td className="text-end fw-bold">Show Correct Answers</td>
                <td>{quiz.showCorrectAnswers ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Access Code</td>
                <td>{quiz.accessCode || "None"}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">One Question at a Time</td>
                <td>{quiz.oneQuestionAtATime ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">Webcam Required</td>
                <td>{quiz.webcamRequired ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-end fw-bold">
                  Lock Questions After Answering
                </td>
                <td>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </Table>

          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Due</th>
                <th>For</th>
                <th>Available from</th>
                <th>Until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {quiz.dueDate ? new Date(quiz.dueDate).toLocaleString() : ""}
                </td>
                <td>Everyone</td>
                <td>
                  {quiz.availableDate
                    ? new Date(quiz.availableDate).toLocaleString()
                    : ""}
                </td>
                <td>
                  {quiz.untilDate
                    ? new Date(quiz.untilDate).toLocaleString()
                    : ""}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
