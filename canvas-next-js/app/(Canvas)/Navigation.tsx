import { AiOutlineDashboard } from "react-icons/ai";
import { IoBook, IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
export default function CanvasNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-danger text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.svg" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-3 text-danger" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-3 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses"
          id="wd-dashboard-link"
          className="text-white text-decoration-none"
        >
          <IoBook className="fs-3 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses"
          id="wd-dashboard-link"
          className="text-white text-decoration-none"
        >
          <FaCalendarAlt className="fs-3 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses"
          id="wd-dashboard-link"
          className="text-white text-decoration-none"
        >
          <FaInbox className="fs-3 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Courses"
          id="wd-dashboard-link"
          className="text-white text-decoration-none"
        >
          <HiBeaker className="fs-3 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
      <br />
    </ListGroup>
  );
}
