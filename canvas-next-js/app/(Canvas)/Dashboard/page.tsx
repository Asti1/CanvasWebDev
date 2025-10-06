import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark overflow-hidden"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1234 React JS{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1235"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/algo.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1235 Algorithms{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Design and Analysis of Algorithms{" "}
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1236"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  src="/images/aws.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1236 AWS{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Cloud & AWS{" "}
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1237"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  src="/images/java.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1237 Java{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Java Programming{" "}
                  </CardText>
                  <Button variant="primary"> Go </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1238"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  src="/images/ml.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1238 Machine Learning{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Machine Learning{" "}
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1239"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  src="/images/nlp.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1239 NLP{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Natural Language Processing
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1240"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  src="/images/dbms.jpeg"
                  width="100%"
                  height={160}
                  alt=""
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {" "}
                    CS1240 DBMS{" "}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Database Management System
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
