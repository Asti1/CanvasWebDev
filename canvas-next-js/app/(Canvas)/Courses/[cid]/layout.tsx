"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { courses } from "../../Database";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams() as { cid: string };
  const pathname = usePathname();

  // Compute breadcrumb parts after /Courses/{cid}
  const parts = pathname.split("/").filter(Boolean);
  const afterCid = parts.slice(2); // ["Home"], ["Modules"], ["People","Table"], etc.
  const breadcrumb = afterCid.length ? afterCid.join(" > ") : "Home";

  const course = courses.find((c) => c._id === cid);
  const courseLabel = course?.name ?? `Course ${cid}`;

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          style={{
            marginRight: "1.5rem",
            fontSize: "1.5rem",
            marginBottom: "0.25rem",
            color: "red",
          }}
        />
        {courseLabel} &gt; {breadcrumb}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
