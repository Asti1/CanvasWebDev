import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
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
        Course {cid}{" "}
      </h2>{" "}
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
