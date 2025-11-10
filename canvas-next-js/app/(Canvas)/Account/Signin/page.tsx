/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useRouter } from "next/navigation";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Canvas/Dashboard");
  };
  return (
    <Container
      id="wd-signin-screen"
      className=" justify-content-center align-items-center mt-5"
    >
      <Card className="p-4 shadow-sm border-0" style={{ width: "350px" }}>
        <h1>Sign in</h1>
        {/* <Form.Control
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
        <Link
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in{" "}
        </Link> */}
        <Form.Control
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="mb-2"
          placeholder="username"
          id="wd-username"
        />
        <Form.Control
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="mb-2"
          placeholder="password"
          type="password"
          id="wd-password"
        />
        <Button onClick={signin} id="wd-signin-btn" className="w-100">
          {" "}
          Sign in{" "}
        </Button>
        <br />
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </Card>
    </Container>
  );
}
