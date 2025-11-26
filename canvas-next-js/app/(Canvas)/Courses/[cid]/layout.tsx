"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const pathname = usePathname();

  type Course = { _id: string; name?: string };
  const courses = useSelector(
    (state: RootState) =>
      (state.coursesReducer as { courses?: Course[] }).courses ?? []
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  if (!currentUser) {
    redirect("/Account/Signin");
  }
  const course = courses.find((c) => c._id === cid);

  // Compute breadcrumb parts after /Courses/{cid}
  const parts = pathname.split("/").filter(Boolean);
  const afterCid = parts.slice(2); // ["Home"], ["Modules"], ["People","Table"], etc.
  const breadcrumb = afterCid.length ? afterCid.join(" > ") : "Home";

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
