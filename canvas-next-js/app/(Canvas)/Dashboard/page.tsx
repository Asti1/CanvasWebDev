/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { RootState } from "../store";

import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/[cid]/reducer";
import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import * as enrollClient from "../Enrollments/client";
export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const dispatch = useDispatch();
  // const [courses, setCourses] = useState<any[]>(db.courses);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpeg",
    description: "New Description",
  });

  // const { enrollements } = db;
  // const displayCourses = currentUser
  //   ? courses.filter((course: any) =>
  //       enrollements.some(
  //         (enrollement) =>
  //           enrollement.user === currentUser._id &&
  //           enrollement.course === course._id
  //       )
  //     )
  //   : courses;
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const onAddNewCourse = async () => {
    if (!currentUser) return;
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  const onDeleteCourse = async (courseId: string) => {
    if (!courses.some((c: any) => c._id === courseId)) return;
    const status = await client.deleteCourse(courseId);
    dispatch(
      setCourses(courses.filter((course: any) => course._id !== courseId))
    );
  };
  const onUpdateCourse = async () => {
    if (!courses.some((c: any) => c._id === course._id)) return;
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: any) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  useEffect(() => {
    if (!currentUser) {
      window.location.href = "/Account/Signin";
      return;
    }
    fetchCourses();
    fetchAllCourses();
  }, [currentUser]);

  const onEnrollCourse = async (courseId: string) => {
    try {
      if (!currentUser) return;
      await enrollClient.enrollInCourse("current", courseId);
      await fetchCourses();
    } catch (e) {
      console.error(e);
    }
  };

  const onUnenrollCourse = async (courseId: string) => {
    try {
      await enrollClient.unenrollFromCourse("current", courseId);
      dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <Button className="float-end me-2" onClick={onUpdateCourse}>
          Update
        </Button>
        <Button
          className="float-end me-2"
          onClick={(event) => {
            event.preventDefault();
            onDeleteCourse(course._id);
          }}
        >
          Delete{" "}
        </Button>
      </h5>
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.description}
        as="textarea"
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src="/images/reactjs.jpeg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{" "}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}{" "}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                    <Button
                      id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="me-2 float-end"
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        onUnenrollCourse(course._id);
                      }}
                      className="float-end"
                    >
                      Unenroll
                    </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
      <h2 className="mt-3">
        Available Courses (
        {
          allCourses.filter(
            (c: any) => !courses.some((uc: any) => uc._id === c._id)
          ).length
        }
        )
      </h2>
      <div id="wd-dashboard-available-courses">
        <Row xs={1} md={5} className="g-4">
          {allCourses
            .filter((c: any) => !courses.some((uc: any) => uc._id === c._id))
            .map((course: any) => (
              <Col key={course._id} style={{ width: "300px" }}>
                <Card>
                  <CardImg
                    src="/images/reactjs.jpeg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button
                      variant="outline-primary"
                      onClick={() => onEnrollCourse(course._id)}
                    >
                      Enroll
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
