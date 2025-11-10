/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-8 rounded-0">
      <Link href="Signin" className="list-group-item active border-0">
        {" "}
        Signin{" "}
      </Link>{" "}
      <br />
      <Link href="Signup" className="list-group-item text-danger border-0">
        {" "}
        Signup{" "}
      </Link>{" "}
      <br />
      <Link href="Profile" className="list-group-item text-danger border-0">
        {" "}
        Profile{" "}
      </Link>{" "}
      <br />
      <Link href="/Labs" className="list-group-item text-danger border-0">
        {" "}
        Labs{" "}
      </Link>{" "}
    </div>
  );
}
