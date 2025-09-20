export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points </label>
            {/* </td> */}
            {/* <td> */}
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment Group </label>
            {/* </td> */}
            {/* <td> */}
            <select id="wd-assignment-group">
              <option>Assignments</option>
              <option>Quizzes</option>
              <option>Exams</option>
              <option>Projects</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display Grade As </label>
            {/* </td> */}
            {/* <td> */}
            <select id="wd-display-grade-as">
              <option>Points</option>
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
              <option>GPA Scale</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-points">Submission Type </label>
            {/* </td> */}
            {/* <td align="left" valign="top"> */}
            <select id="wd-submission-type">
              <option>Online</option>
              <option>Offline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Online Entry options</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          {/* <td align="left" valign="top"> */}
          <label htmlFor="wd-assign-to">Assign to</label>
          {/* </td> */}
          <tr>
            <input id="wd-assign-to" value="Everyone" />
          </tr>
        </tr>
        <tr>
          {/* <td align="left" valign="top"> */}
          <label htmlFor="wd-due-date">Due</label>
          {/* </td> */}
          <tr>
            <input id="wd-due-date" type="datetime-local" />
          </tr>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <tr>
              <input id="wd-available-from" type="datetime-local" />
            </tr>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <tr>
              <input id="wd-available-until" type="datetime-local" />
            </tr>
          </td>
        </tr>
        <tr>
          <hr />
        </tr>
        <tr>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
