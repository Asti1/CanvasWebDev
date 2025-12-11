/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../../client";
import { Quiz, Question } from "../../types";
import {
  Button,
  Form,
  Tab,
  Tabs,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import QuestionEditor from "./QuestionEditor";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [key, setKey] = useState("details");
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<number>(-1);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (qid) {
        const q = await client.findQuizById(qid as string);
        setQuiz(q);
      }
    };
    fetchQuiz();
  }, [qid]);

  const handleSave = async () => {
    if (quiz) {
      await client.updateQuiz(quiz);
      router.push(`/Courses/${cid}/Quizzes/${qid}`);
    }
  };

  const handleSaveAndPublish = async () => {
    if (quiz) {
      await client.updateQuiz({ ...quiz, published: true });
      router.push(`/Courses/${cid}/Quizzes`);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  const handleNewQuestion = () => {
    setEditingQuestion({
      title: "New Question",
      points: 1,
      questionType: "MULTIPLE_CHOICE",
      questionText: "Question text",
      choices: [],
    });
    setEditingQuestionIndex(-1);
  };

  const handleEditQuestion = (question: Question, index: number) => {
    setEditingQuestion(question);
    setEditingQuestionIndex(index);
  };

  const handleSaveQuestion = (question: Question) => {
    if (!quiz) return;
    const newQuestions = [...(quiz.questions || [])];
    if (editingQuestionIndex >= 0) {
      newQuestions[editingQuestionIndex] = question;
    } else {
      newQuestions.push(question);
    }

    // Calculate total points
    const totalPoints = newQuestions.reduce((acc, q) => acc + q.points, 0);

    setQuiz({ ...quiz, questions: newQuestions, points: totalPoints });
    setEditingQuestion(null);
    setEditingQuestionIndex(-1);
  };

  const handleCancelQuestion = () => {
    setEditingQuestion(null);
    setEditingQuestionIndex(-1);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <Container id="wd-quiz-editor">
      <div className="d-flex justify-content-end mb-3 align-items-center">
        <span className="me-2 text-danger">Points {quiz.points}</span>
        <span className="me-2 text-muted">
          {quiz.published ? "Published" : "Not Published"}
        </span>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k || "details")}
        className="mb-3"
      >
        <Tab eventKey="details" title="Details">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Quiz Title"
                value={quiz.title}
                onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Quiz Description"
                value={quiz.description}
                onChange={(e) =>
                  setQuiz({ ...quiz, description: e.target.value })
                }
              />
            </Form.Group>

            <Row className="mb-3 align-items-center">
              <Col md={4} className="text-end">
                <Form.Label>Quiz Type</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Select
                  value={quiz.quizType}
                  onChange={(e) =>
                    setQuiz({ ...quiz, quizType: e.target.value as any })
                  }
                >
                  <option value="GRADED_QUIZ">Graded Quiz</option>
                  <option value="PRACTICE_QUIZ">Practice Quiz</option>
                  <option value="GRADED_SURVEY">Graded Survey</option>
                  <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={4} className="text-end">
                <Form.Label>Points</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="number"
                  value={quiz.points}
                  readOnly
                  disabled
                />
              </Col>
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={4} className="text-end">
                <Form.Label>Assignment Group</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Select
                  value={quiz.assignmentGroup}
                  onChange={(e) =>
                    setQuiz({ ...quiz, assignmentGroup: e.target.value as any })
                  }
                >
                  <option value="QUIZZES">Quizzes</option>
                  <option value="EXAMS">Exams</option>
                  <option value="ASSIGNMENTS">Assignments</option>
                  <option value="PROJECT">Project</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="Shuffle Answers"
                  checked={quiz.shuffleAnswers}
                  onChange={(e) =>
                    setQuiz({ ...quiz, shuffleAnswers: e.target.checked })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={4} className="text-end">
                <Form.Label>Time Limit (Minutes)</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="number"
                  value={quiz.timeLimit}
                  onChange={(e) =>
                    setQuiz({ ...quiz, timeLimit: parseInt(e.target.value) })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="Multiple Attempts"
                  checked={quiz.multipleAttempts}
                  onChange={(e) =>
                    setQuiz({ ...quiz, multipleAttempts: e.target.checked })
                  }
                />
                {quiz.multipleAttempts && (
                  <div className="mt-2">
                    <Form.Label>How Many Attempts</Form.Label>
                    <Form.Control
                      type="number"
                      value={quiz.howManyAttempts}
                      onChange={(e) =>
                        setQuiz({
                          ...quiz,
                          howManyAttempts: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                )}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="Show Correct Answers"
                  checked={quiz.showCorrectAnswers}
                  onChange={(e) =>
                    setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={4} className="text-end">
                <Form.Label>Access Code</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="text"
                  value={quiz.accessCode}
                  onChange={(e) =>
                    setQuiz({ ...quiz, accessCode: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="One Question at a Time"
                  checked={quiz.oneQuestionAtATime}
                  onChange={(e) =>
                    setQuiz({ ...quiz, oneQuestionAtATime: e.target.checked })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="Webcam Required"
                  checked={quiz.webcamRequired}
                  onChange={(e) =>
                    setQuiz({ ...quiz, webcamRequired: e.target.checked })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}></Col>
              <Col md={8}>
                <Form.Check
                  type="checkbox"
                  label="Lock Questions After Answering"
                  checked={quiz.lockQuestionsAfterAnswering}
                  onChange={(e) =>
                    setQuiz({
                      ...quiz,
                      lockQuestionsAfterAnswering: e.target.checked,
                    })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4} className="text-end">
                <Form.Label>Assign to</Form.Label>
              </Col>
              <Col md={8} className="border p-3 rounded">
                <Form.Group className="mb-3">
                  <Form.Label>Due</Form.Label>
                  <Form.Control
                    type="date"
                    value={
                      quiz.dueDate
                        ? new Date(quiz.dueDate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      setQuiz({ ...quiz, dueDate: e.target.value })
                    }
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Available from</Form.Label>
                      <Form.Control
                        type="date"
                        value={
                          quiz.availableDate
                            ? new Date(quiz.availableDate)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          setQuiz({ ...quiz, availableDate: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Until</Form.Label>
                      <Form.Control
                        type="date"
                        value={
                          quiz.untilDate
                            ? new Date(quiz.untilDate)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          setQuiz({ ...quiz, untilDate: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Tab>
        <Tab eventKey="questions" title="Questions">
          {editingQuestion ? (
            <QuestionEditor
              question={editingQuestion}
              onSave={handleSaveQuestion}
              onCancel={handleCancelQuestion}
            />
          ) : (
            <div className="text-center mt-4">
              <Button
                variant="secondary"
                className="mb-3"
                onClick={handleNewQuestion}
              >
                + New Question
              </Button>
              {quiz.questions && quiz.questions.length > 0 ? (
                <ListGroup className="text-start">
                  {quiz.questions.map((q: Question, index: number) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleEditQuestion(q, index)}
                    >
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">{q.title}</span>
                        <span>{q.points} pts</span>
                      </div>
                      <div className="text-muted small">
                        {q.questionText
                          ? q.questionText.substring(0, 50) +
                            (q.questionText.length > 50 ? "..." : "")
                          : "No text"}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No questions yet.</p>
              )}
            </div>
          )}
        </Tab>
      </Tabs>

      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant="danger"
          className="me-2"
          onClick={handleSaveAndPublish}
        >
          Save & Publish
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Container>
  );
}
