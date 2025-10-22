"use client";

import { useParams } from "next/navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { usePathname } from "next/navigation";
export default function CoursePage() {
  const params = useParams();
  const cid = params.cid?.toString(); // ensure string
  const course = courses.find((course) => course._id === cid);
  const pathname = usePathname();
  return (
    <div id="wd-courses" className="p-3">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} &gt;{" "}
        {pathname.split("/").length > 3 ? pathname.split("/")[3] : "Home"}
      </h2>
      {course && (
        <>
          <p className="mt-2">{course.description}</p>
          <p>
            <strong>Course ID:</strong> {course._id}
          </p>
        </>
      )}
    </div>
  );
}
