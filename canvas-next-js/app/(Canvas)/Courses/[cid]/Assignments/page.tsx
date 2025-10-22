// "use client";

// import Link from "next/link";
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Form,
//   InputGroup,
//   Row,
// } from "react-bootstrap";

// export default function Assignments() {
//   return (
//     <Container id="wd-assignments" className="mt-4">
//       {/* Search and Action Buttons */}
//       <Row className="align-items-center mb-3">
//         <Col md={6}>
//           <InputGroup>
//             <Form.Control placeholder="Search for Assignments" />
//           </InputGroup>
//         </Col>
//         <Col md={6} className="text-end">
//           <Button variant="outline-secondary" className="me-2">
//             + Group
//           </Button>
//           <Button variant="danger" className="me-2">
//             + Assignment
//           </Button>
//           <Button variant="outline-secondary" className="me-2">
//             + Quizzes
//           </Button>
//           <Button variant="outline-secondary" className="me-2">
//             + Exams
//           </Button>
//           <Button variant="outline-secondary">+ Projects</Button>
//         </Col>
//       </Row>

//       {/* Assignments Header */}
//       <Card className="shadow-sm border-0 mb-3">
//         <Card.Header className="d-flex justify-content-between align-items-center bg-light">
//           <h5 className="mb-0">ASSIGNMENTS </h5>
//           <span className="fw-normal text-muted border-gray">40% of Total</span>
//           <Button variant="outline-secondary" size="sm">
//             +
//           </Button>
//         </Card.Header>

//         <Card.Body className="p-0">
//           {/* A1 */}
//           <div className="border-bottom p-3 d-flex align-items-start">
//             <div className="me-3 text-success">
//               <i className="bi bi-list"></i>
//             </div>
//             <div>
//               <Link
//                 href="/Courses/1234/Assignments/123/Editor"
//                 className="fw-bold text-decoration-none text-primary"
//               >
//                 A1 - ENV + HTML
//               </Link>
//               <p className="text-muted mb-0 small">
//                 Multiple Modules |{" "}
//                 <span className="text-dark">Not available until</span> May 6 at
//                 12:00am |<span className="text-dark"> Due</span> May 13 at
//                 11:59pm | 100 Points
//               </p>
//             </div>
//           </div>

//           {/* A2 */}
//           <div className="border-bottom p-3 d-flex align-items-start">
//             <div className="me-3 text-success">
//               <i className="bi bi-list"></i>
//             </div>
//             <div>
//               <Link
//                 href="/Courses/1234/Assignments/123/Editor"
//                 className="fw-bold text-decoration-none text-primary"
//               >
//                 A2 - CSS + BOOTSTRAP
//               </Link>
//               <p className="text-muted mb-0 small">
//                 Multiple Modules |{" "}
//                 <span className="text-dark">Not available until</span> May 13 at
//                 12:00am |<span className="text-dark"> Due</span> May 20 at
//                 11:59pm | 100 Points
//               </p>
//             </div>
//           </div>

//           {/* A3 */}
//           <div className="p-3 d-flex align-items-start">
//             <div className="me-3 text-success">
//               <i className="bi bi-list"></i>
//             </div>
//             <div>
//               <Link
//                 href="/Courses/1234/Assignments/123/Editor"
//                 className="fw-bold text-decoration-none text-primary"
//               >
//                 A3 - JAVASCRIPT + REACT
//               </Link>
//               <p className="text-muted mb-0 small">
//                 Multiple Modules |{" "}
//                 <span className="text-dark">Not available until</span> May 20 at
//                 12:00am |<span className="text-dark"> Due</span> May 27 at
//                 11:59pm | 100 Points
//               </p>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }
"use client";

import Link from "next/link";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { assignments } from "../../../Database";

export default function AssignmentsPage({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  // Filter assignments belonging to this course
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

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
          <Button variant="danger" className="me-2">
            + Assignment
          </Button>
          <Button variant="outline-secondary" className="me-2">
            + Quizzes
          </Button>
          <Button variant="outline-secondary" className="me-2">
            + Exams
          </Button>
          <Button variant="outline-secondary">+ Projects</Button>
        </Col>
      </Row>

      {/* Assignments Header */}
      <Card className="shadow-sm border-0 mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center bg-light">
          <h5 className="mb-0">ASSIGNMENTS</h5>
          <span className="fw-normal text-muted">40% of Total</span>
          <Button variant="outline-secondary" size="sm">
            +
          </Button>
        </Card.Header>

        <Card.Body className="p-0">
          {courseAssignments.length === 0 ? (
            <p className="p-3 text-muted">
              No assignments found for this course.
            </p>
          ) : (
            courseAssignments.map((assignment) => (
              <div
                key={assignment._id}
                className="border-bottom p-3 d-flex align-items-start"
              >
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
                    soon | <span className="text-dark">100 Points</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
