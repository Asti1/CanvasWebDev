"use client";
import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { addAssignment, updateAssignment } from "../../reducer";
import { v4 as uuidv4 } from "uuid";

// Define the Assignment type
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function AssignmentEditor() {
  const router = useRouter();
  const { cid, aid } = useParams();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const isNewAssignment = aid === "new";
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid as string,
  });

  useEffect(() => {
    if (!isNewAssignment && existingAssignment) {
      // Merge existing assignment with default values for missing fields
      setAssignment({
        _id: existingAssignment._id || "",
        title: existingAssignment.title || "",
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        dueDate: existingAssignment.dueDate || "",
        availableFrom: existingAssignment.availableFrom || "",
        availableUntil: existingAssignment.availableUntil || "",
        course: existingAssignment.course || (cid as string),
      });
    }
  }, [isNewAssignment, existingAssignment, cid]);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment: Assignment = {
        ...assignment,
        _id: uuidv4(),
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container mt-4" id="wd-assignments-editor">
      <h4 className="mb-4 fw-semibold">
        {isNewAssignment ? "Create Assignment" : "Edit Assignment"}
      </h4>

      <Card className="shadow-sm p-4 border-0">
        <Form>
          {/* Assignment Name */}
          <Form.Group className="mb-4" controlId="assignmentName">
            <Form.Label className="fw-semibold">Assignment Name</Form.Label>
            <Form.Control
              type="text"
              value={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-4" controlId="assignmentDescription">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={assignment.description}
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
            />
          </Form.Group>

          <Row className="g-3">
            {/* Points */}
            <Col md={4}>
              <Form.Group controlId="points">
                <Form.Label className="fw-semibold">Points</Form.Label>
                <Form.Control
                  type="number"
                  value={assignment.points}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      points: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </Form.Group>

              {/* Assignment Group */}
              <Form.Group controlId="assignmentGroup" className="mt-3">
                <Form.Label className="fw-semibold">
                  Assignment Group
                </Form.Label>
                <Form.Select defaultValue="Assignments">
                  <option>Assignments</option>
                  <option>Quizzes</option>
                  <option>Exams</option>
                  <option>Projects</option>
                </Form.Select>
              </Form.Group>

              {/* Display Grade */}
              <Form.Group controlId="displayGrade" className="mt-3">
                <Form.Label className="fw-semibold">
                  Display Grade As
                </Form.Label>
                <Form.Select defaultValue="Points">
                  <option>Points</option>
                  <option>Percentage</option>
                  <option>Complete/Incomplete</option>
                  <option>Letter Grade</option>
                  <option>GPA Scale</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Submission Type */}
          <div className="mt-4">
            <Form.Label className="fw-semibold">Submission Type</Form.Label>
            <Card className="mt-3 p-3 bg-light border-0">
              <Form.Group controlId="submissionType">
                <Form.Select defaultValue="Online">
                  <option>Online</option>
                  <option>Offline</option>
                </Form.Select>
              </Form.Group>

              <Form.Label className="fw-semibold mb-2 mt-3">
                Online Entry Options
              </Form.Label>
              <div className="d-flex flex-column">
                <Form.Check type="checkbox" label="Text Entry" />
                <Form.Check type="checkbox" label="Website URL" />
                <Form.Check type="checkbox" label="Media Recordings" />
                <Form.Check type="checkbox" label="Student Annotation" />
                <Form.Check type="checkbox" label="File Uploads" />
              </div>
            </Card>
          </div>

          {/* Assign Section */}
          <Form.Label className="fw-semibold mb-3 mt-3">Assign</Form.Label>
          <Card className="mt-4 p-3 bg-light border-0">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="assignTo">
                  <Form.Label>Assign To</Form.Label>
                  <Form.Control type="text" defaultValue="Everyone" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="g-3 mt-2">
              <Col md={4}>
                <Form.Group controlId="dueDate">
                  <Form.Label>Due</Form.Label>
                  <Form.Control
                    type="date"
                    value={assignment.dueDate}
                    onChange={(e) =>
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="availableFrom">
                  <Form.Label>Available From</Form.Label>
                  <Form.Control
                    type="date"
                    value={assignment.availableFrom}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="untilDate">
                  <Form.Label>Until</Form.Label>
                  <Form.Control
                    type="date"
                    value={assignment.availableUntil}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" className="me-2" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
