"use client";
import { useState } from "react";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button, Card, Container, Form } from "react-bootstrap";
import { users } from "../../Database";
export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
}

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    // Cast the user to proper User type
    const typedUser: User = {
      _id: user._id,
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dob: user.dob,
      role: (user.role as User["role"]) || "USER",
    };

    dispatch(setCurrentUser(typedUser));
    router.push("/Dashboard");
  };

  return (
    <Container
      id="wd-signin-screen"
      className="justify-content-center align-items-center mt-5"
    >
      <Card className="p-4 shadow-sm border-0" style={{ width: "350px" }}>
        <h1>Sign in</h1>
        <Form.Control
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="mb-2"
          placeholder="username"
          id="wd-username"
        />
        <Form.Control
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="mb-2"
          placeholder="password"
          type="password"
          id="wd-password"
        />
        <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">
          Sign in
        </Button>
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </Card>
    </Container>
  );
}
