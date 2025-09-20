import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <button id="wd-add-quiz">+ Quizzes</button>
      <button id="wd-add-exam">+ Exams</button>
      <button id="wd-add-project">+ Projects</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123/Editor"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <p>
            Multiple Modules | <span>Not available until</span> May 6 at 12:00am
            | <span>Due</span> May 13 at 11:59pm | 100 Points
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123/Editor"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <p>
            Multiple Modules | <span>Not available until</span> May 13 at
            12:00am | <span>Due</span> May 20 at 11:59pm | 100 Points
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123/Editor"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <p>
            Multiple Modules | <span>Not available until</span> May 20 at
            12:00am | <span>Due</span> May 27 at 11:59pm | 100 Points
          </p>
        </li>
      </ul>
    </div>
  );
}
