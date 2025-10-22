"use client";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

// import Link from "next/link";

// export default function CanvasNavigation() {
//   const pathname = usePathname();
//   const links = [
//     { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
//     { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
//     { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },

//     { label: "Inbox", path: "/Inbox", icon: FaInbox },
//     { label: "Labs", path: "/Labs", icon: LiaCogSolid },
//   ];
//   return (
//     <ListGroup
//       id="wd-kambaz-navigation"
//       style={{ width: 120 }}
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//     >
//       <ListGroupItem
//         id="wd-neu-link"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//         action
//         className="bg-black border-0 text-center"
//       >
//         <img src="/images/NEU.png" width="75px" />
//       </ListGroupItem>
//       <ListGroupItem
//         as={Link}
//         href="/Account"
//         className={`text-center border-0 bg-black
// ${
//   pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
// }`}
//         href={""}
//       >
//         <FaRegCircleUser
//           className={`fs-1 ${
//             pathname.includes("Account") ? "text-danger" : "text-white"
//           }`}
//         />
//         <br />
//         Account
//       </ListGroupItem>
//       {links.map((link) => (
//         <ListGroupItem
//           key={link.path}
//           as={Link}
//           href={link.path}
//           className={`bg-black text-center border-0
// ${
//   pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
// }`}
//         >
//           {link.icon({ className: "fs-1 text-danger" })}
//           <br />
//           {link.label}
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
// import Link from "next/link";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { IoCalendarOutline } from "react-icons/io5";
// import { FaInbox } from "react-icons/fa6";
// export default function CourseNavigation() {
//   const pathname = usePathname();
//   const links = [
//     { label: "Home", path: "/Dashboard", icon: AiOutlineDashboard },
//     { label: "Modules", path: "/Modules", icon: LiaBookSolid },
//     { label: "Piazza", path: "/Calendar", icon: IoCalendarOutline },
//     { label: "Zoom", path: "/Inbox", icon: FaInbox },
//     { label: "Quizzes", path: "/Quizzes", icon: LiaCogSolid },
//     { label: "Grades", path: "/Grades", icon: LiaCogSolid },
//     { label: "People", path: "/Peoplw", icon: LiaCogSolid },
//   ];
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link
//         href="/Courses/1234/Home"
//         id="wd-course-home-link"
//         className="list-group-item active border-0"
//       >
//         {" "}
//         Home{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/Modules"
//         id="wd-course-modules-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         Modules{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/Piazza"
//         id="wd-course-piazza-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         Piazza{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/Zoom"
//         id="wd-course-zoom-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         Zoom{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/Assignments"
//         id="wd-course-quizzes-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         Assignments{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/Quizzes"
//         id="wd-course-assignments-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         Quizzes{" "}
//       </Link>
//       <br />
//       <Link
//         href="/Courses/1234/People/Table"
//         id="wd-course-people-link"
//         className="list-group-item text-danger border-0"
//       >
//         {" "}
//         People{" "}
//       </Link>
//       <br />
//     </div>
//   );
// }

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaBook, FaCircleQuestion, FaInbox, FaUser } from "react-icons/fa6";
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
