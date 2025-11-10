/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";

export default function AssignmentsPage() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(
    null
  );

  // Filter assignments belonging to this course
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
    }
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new/Editor`);
  };

  return (
    <Container id="wd-assignments" className="mt-4">
      {/* Search & Action Buttons */}
      <Row className="align-items-center mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control placeholder="Search for Assignments" />
          </InputGroup>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="outline-secondary" className="me-2">
            + Group
          </Button>
          <Button
            variant="danger"
            className="me-2"
            onClick={handleAddAssignment}
          >
            + Assignment
          </Button>
        </Col>
      </Row>

      {/* Assignments Header */}
      <Card className="shadow-sm border-0 mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center bg-light">
          <h5 className="mb-0">ASSIGNMENTS</h5>
          <span className="fw-normal text-muted">40% of Total</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleAddAssignment}
          >
            +
          </Button>
        </Card.Header>

        <Card.Body className="p-0">
          {courseAssignments.length === 0 ? (
            <p className="p-3 text-muted">
              No assignments found for this course.
            </p>
          ) : (
            courseAssignments.map((assignment: any) => (
              <div
                key={assignment._id}
                className="border-bottom p-3 d-flex align-items-start justify-content-between"
              >
                <div className="d-flex align-items-start flex-grow-1">
                  <div className="me-3 text-success">
                    <i className="bi bi-list"></i>
                  </div>
                  <div>
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}/Editor`}
                      className="fw-bold text-decoration-none text-primary"
                    >
                      {assignment.title}
                    </Link>
                    <p className="text-muted mb-0 small">
                      Multiple Modules | <span className="text-dark">Due</span>{" "}
                      {assignment.dueDate || "soon"} |{" "}
                      <span className="text-dark">
                        {assignment.points || 100} Points
                      </span>
                    </p>
                  </div>
                </div>
                <Button
                  variant="link"
                  className="text-danger p-0"
                  onClick={() => handleDeleteClick(assignment._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))
          )}
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
