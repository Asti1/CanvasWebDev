/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Question } from "../../types";

interface QuestionEditorProps {
  question: Question;
  onSave: (question: Question) => void;
  onCancel: () => void;
}

export default function QuestionEditor({
  question,
  onSave,
  onCancel,
}: QuestionEditorProps) {
  const [editedQuestion, setEditedQuestion] = useState<Question>({
    ...question,
  });

  useEffect(() => {
    setEditedQuestion({ ...question });
  }, [question]);

  const handleAddChoice = () => {
    setEditedQuestion({
      ...editedQuestion,
      choices: [...editedQuestion.choices, { text: "", isCorrect: false }],
    });
  };

  const handleRemoveChoice = (index: number) => {
    const newChoices = editedQuestion.choices.filter((_, i) => i !== index);
    setEditedQuestion({ ...editedQuestion, choices: newChoices });
  };

  const handleChoiceChange = (index: number, text: string) => {
    const newChoices = [...editedQuestion.choices];
    newChoices[index].text = text;
    setEditedQuestion({ ...editedQuestion, choices: newChoices });
  };

  const handleCorrectChange = (index: number) => {
    const newChoices = editedQuestion.choices.map((choice, i) => {
      if (editedQuestion.questionType === "MULTIPLE_CHOICE") {
        // Multiple choice might allow multiple correct answers? Usually just one for simple quizzes, or checkboxes.
        // Canvas usually allows one correct answer for MC, multiple for "Multiple Answers".
        // Assuming single correct answer for now based on radio button behavior,
        // but typically MC means one correct.
        return { ...choice, isCorrect: i === index };
      } else {
        return { ...choice, isCorrect: i === index };
      }
    });
    setEditedQuestion({ ...editedQuestion, choices: newChoices });
  };

  // For True/False, we ensure choices are True and False
  useEffect(() => {
    if (editedQuestion.questionType === "TRUE_FALSE") {
      if (
        editedQuestion.choices.length !== 2 ||
        editedQuestion.choices[0].text !== "True" ||
        editedQuestion.choices[1].text !== "False"
      ) {
        setEditedQuestion({
          ...editedQuestion,
          choices: [
            { text: "True", isCorrect: true },
            { text: "False", isCorrect: false },
          ],
        });
      }
    }
  }, [editedQuestion.questionType]);

  return (
    <div className="border p-4 rounded">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Question Title"
          value={editedQuestion.title}
          onChange={(e) =>
            setEditedQuestion({ ...editedQuestion, title: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Points</Form.Label>
        <Form.Control
          type="number"
          value={editedQuestion.points}
          onChange={(e) =>
            setEditedQuestion({
              ...editedQuestion,
              points: parseInt(e.target.value),
            })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select
          value={editedQuestion.questionType}
          onChange={(e) =>
            setEditedQuestion({
              ...editedQuestion,
              questionType: e.target.value as any,
            })
          }
        >
          <option value="MULTIPLE_CHOICE">Multiple Choice</option>
          <option value="TRUE_FALSE">True/False</option>
          <option value="FILL_IN_BLANK">Fill in the Blank</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Question Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={editedQuestion.questionText}
          onChange={(e) =>
            setEditedQuestion({
              ...editedQuestion,
              questionText: e.target.value,
            })
          }
        />
      </Form.Group>

      <hr />

      <h5>Answers</h5>
      {editedQuestion.questionType !== "FILL_IN_BLANK" && (
        <div>
          {editedQuestion.choices.map((choice, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col xs="auto">
                <Form.Check
                  type="radio"
                  name="correctAnswer"
                  checked={choice.isCorrect}
                  onChange={() => handleCorrectChange(index)}
                />
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={choice.text}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  readOnly={editedQuestion.questionType === "TRUE_FALSE"}
                />
              </Col>
              {editedQuestion.questionType === "MULTIPLE_CHOICE" && (
                <Col xs="auto">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveChoice(index)}
                  >
                    X
                  </Button>
                </Col>
              )}
            </Row>
          ))}
          {editedQuestion.questionType === "MULTIPLE_CHOICE" && (
            <Button variant="link" onClick={handleAddChoice}>
              + Add Another Answer
            </Button>
          )}
        </div>
      )}

      {editedQuestion.questionType === "FILL_IN_BLANK" && (
        <div>
          <p>Enter possible correct answers:</p>
          {editedQuestion.choices.map((choice, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col>
                <Form.Control
                  type="text"
                  value={choice.text}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveChoice(index)}
                >
                  X
                </Button>
              </Col>
            </Row>
          ))}
          <Button variant="link" onClick={handleAddChoice}>
            + Add Another Answer
          </Button>
        </div>
      )}

      <div className="d-flex justify-content-end mt-3">
        <Button variant="secondary" className="me-2" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onSave(editedQuestion)}>
          Save Question
        </Button>
      </div>
    </div>
  );
}
