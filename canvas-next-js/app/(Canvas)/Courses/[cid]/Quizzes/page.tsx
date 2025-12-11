"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "./client";
import {
  FaSearch,
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaBan,
  FaRocket,
} from "react-icons/fa";
import { Quiz } from "./types";
import { Button, Form, InputGroup, ListGroup, Dropdown } from "react-bootstrap";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function Quizzes() {
  const { cid } = useParams();
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const isFaculty =
    (currentUser && currentUser.role === "FACULTY") ||
    (currentUser && currentUser.role === "ADMIN");

  const fetchQuizzes = async () => {
    if (cid) {
      const q = await client.findQuizzesForCourse(cid as string);
      setQuizzes(q);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, [cid]);

  const handleCreateQuiz = async () => {
    const newQuiz = {
      title: "New Quiz",
      description: "New Quiz Description",
      points: 0,
      quizType: "GRADED_QUIZ",
      assignmentGroup: "QUIZZES",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      showCorrectAnswers: false,
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      published: false,
    };
    const quiz = await client.createQuiz(cid as string, newQuiz);
    router.push(`/Courses/${cid}/Quizzes/${quiz._id}`);
  };

  const handleDeleteQuiz = async (qid: string) => {
    await client.deleteQuiz(qid);
    fetchQuizzes();
  };

  const handlePublishToggle = async (quiz: Quiz) => {
    await client.updateQuiz({ ...quiz, published: !quiz.published });
    fetchQuizzes();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div id="wd-quizzes">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Quiz" />
        </InputGroup>
        {isFaculty && (
          <div>
            <Button
              variant="danger"
              onClick={handleCreateQuiz}
              className="me-2"
            >
              <FaPlus className="me-1" /> Quiz
            </Button>
            <Button variant="secondary">
              <FaEllipsisV />
            </Button>
          </div>
        )}
      </div>

      <ListGroup>
        <ListGroup.Item className="p-0 fs-5 border-gray bg-light fw-bold ps-2">
          Assignment Quizzes
        </ListGroup.Item>
        {quizzes.map((quiz) => (
          <ListGroup.Item
            key={quiz._id}
            className="d-flex align-items-center p-3"
          >
            <div className="me-3 fs-1 text-success">
              <FaRocket />
            </div>
            <div className="flex-grow-1">
              <Link
                href={`/Courses/${cid}/Quizzes/${quiz._id}`}
                className="fw-bold text-dark text-decoration-none fs-5"
              >
                {quiz.title}
              </Link>
              <div className="text-muted small">
                <span className="me-3">
                  {quiz.availableDate &&
                  new Date() < new Date(quiz.availableDate) ? (
                    <>
                      Not available until{" "}
                      {new Date(quiz.availableDate).toLocaleString()}
                    </>
                  ) : quiz.untilDate &&
                    new Date() > new Date(quiz.untilDate) ? (
                    "Closed"
                  ) : (
                    "Available"
                  )}
                </span>
                <span className="me-3">Due {formatDate(quiz.dueDate)}</span>
                <span className="me-3">{quiz.points} pts</span>
                <span>
                  {quiz.questions ? quiz.questions.length : 0} Questions
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              {isFaculty && (
                <>
                  <span
                    onClick={() => handlePublishToggle(quiz)}
                    style={{ cursor: "pointer" }}
                    className="me-3 fs-4"
                  >
                    {quiz.published ? (
                      <FaCheckCircle className="text-success" />
                    ) : (
                      <FaBan className="text-danger" />
                    )}
                  </span>

                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      className="text-dark p-0 border-0"
                    >
                      <FaEllipsisV />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() =>
                          router.push(`/Courses/${cid}/Quizzes/${quiz._id}`)
                        }
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteQuiz(quiz._id)}>
                        Delete
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handlePublishToggle(quiz)}>
                        {quiz.published ? "Unpublish" : "Publish"}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
