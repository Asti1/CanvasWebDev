import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControl";
import ModuleControlButton from "./ModuleControlButton";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      <div>
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> Week 1{" "}
            <ModuleControlButton />
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
                <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> READING{" "}
                <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer -
                Chapter 1 - Introduction
                <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Full Stack Developer - Chapter 2 - Creating user interfaces with
                HTML <LessonControlButtons />
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
            <ModuleControlButton />
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1 <LessonControlButtons />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2 <LessonControlButtons />
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
      {/* <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Syllabus , Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development
                </li>
                <li className="wd-content-item">
                  Creating an HTTP Server with Node.js
                </li>
                <li className="wd-content-item">
                  Creating a React Application
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to Netlify
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML and DOM
                </li>
                <li className="wd-content-item">
                  Formatting web content with headings and
                </li>
                <li className="wd-content-item">
                  Formatting content with Lists and Tables
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
}
