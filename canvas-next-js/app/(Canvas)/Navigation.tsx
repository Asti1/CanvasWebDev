"use client";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { CiBeaker1 } from "react-icons/ci";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import * as db from "./Database";

export default function CanvasNavigation() {
  const [courses, setCourses] = useState(db.courses);

  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    {
      label: "Courses",
      path: `/Courses/${courses.length > 0 ? courses[0]._id : ""}/Home`,
      icon: LiaBookSolid,
    },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },

    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: CiBeaker1 },
  ];
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroupItem
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        action
        className="bg-black border-0 text-center"
      >
        <img src="../../../public/images/NEU.png" alt="NEU Logo" width="75px" />
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/Account"
        className={`text-center border-0 bg-black
${
  pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
}`}
        // href={""}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.path}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
${
  pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
}`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
