/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { href } from "react-router";
import Account from "../page";
import Users from "./Users/page";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
            {link}
          </NavLink>
        </NavItem>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink as={Link} href={`/Account/Users`} active={pathname.endsWith("Users")}>
          Users
        </NavLink>
      )}
    </Nav>
  );
}
