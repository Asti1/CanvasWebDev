/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";

import { useState } from "react";
import { redirect } from "next/navigation";
import * as client from "../client";
import { Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
export default function Signup() {
  const [user, setUser] = useState<any>({});

  const dispatch = useDispatch();
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      // router.push("/Account/Profile");
      redirect("/Account/Profile");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container
      id="wd-signin-screen"
      className="justify-content-center align-items-center mt-5"
    >
      <Card className="p-4 shadow-sm border-0" style={{ width: "350px" }}>
        <h1>Sign up</h1>
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="mb-2"
        />
        <br />
        <Form.Control
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-2"
        />
        <br />
        <Form.Control
          id="wd-password-verify"
          placeholder="verify password"
          type="password"
          className="mb-2"
        />
        <br />
        <Link
          onClick={signup}
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in{" "}
        </Link>
        {/* <br />
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link> */}
      </Card>
    </Container>
  );
}
