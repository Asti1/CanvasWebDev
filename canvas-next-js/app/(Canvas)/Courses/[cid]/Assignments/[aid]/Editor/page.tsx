"use client";
import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4" id="wd-assignments-editor">
      <h4 className="mb-4 fw-semibold">Assignment Editor</h4>

      <Card className="shadow-sm p-4 border-0">
        <Form>
          {/* Assignment Name */}
          <Form.Group className="mb-4" controlId="assignmentName">
            <Form.Label className="fw-semibold">Assignment Name</Form.Label>
            <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-4" controlId="assignmentDescription">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
            />
          </Form.Group>

          <Row className="g-3">
            {/* Points */}
            <Col md={4}>
              <Form.Group controlId="points">
                <Form.Label className="fw-semibold">Points</Form.Label>
                <Form.Control type="number" defaultValue={100} />
              </Form.Group>
              {/* </Col> */}

              {/* Assignment Group */}
              {/* <Col md={4}> */}
              <Form.Group controlId="assignmentGroup">
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
              {/* </Col> */}

              {/* Display Grade */}
              {/* <Col md={4}> */}
              <Form.Group controlId="displayGrade">
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

              {/* Online Entry Options */}

              <Form.Label className="fw-semibold mb-2">
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
                  <Form.Control type="date" defaultValue="2024-12-30" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="availableFrom">
                  <Form.Label>Available From</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="untilDate">
                  <Form.Label>Until</Form.Label>
                  <Form.Control type="date" defaultValue="2024-12-31" />
                </Form.Group>
              </Col>
            </Row>
          </Card>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
