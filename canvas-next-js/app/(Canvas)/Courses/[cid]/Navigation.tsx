"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaBook, FaCircleQuestion, FaUser } from "react-icons/fa6";
import {
  MdAssignment,
  MdGrade,
  MdQuiz,
  MdVideoCameraFront,
} from "react-icons/md";
import { IoMdHome } from "react-icons/io";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  const links = [
    { label: "Home", icon: IoMdHome },
    { label: "Modules", icon: FaBook },
    { label: "Piazza", icon: FaCircleQuestion },
    { label: "Zoom", icon: MdVideoCameraFront },
    { label: "Assignments", icon: MdAssignment },
    { label: "Quizzes", icon: MdQuiz },
    { label: "Grades", icon: MdGrade },
    { label: "People", icon: FaUser },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(({ label, icon: Icon }) => {
        // Construct path for each link
        const path =
          label === "People"
            ? `/Courses/${cid}/${label}/Table`
            : `/Courses/${cid}/${label}`;

        const isActive = pathname.includes(path);

        return (
          <Link
            key={label}
            href={path}
            className={`list-group-item border-0 ${
              isActive ? "active text-white bg-danger" : "text-danger"
            }`}
            id={`wd-course-${label.toLowerCase()}-link`}
          >
            <Icon className="me-2" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
