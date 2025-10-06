"use client";

import React from "react";
import Link from "next/link";
import { Form, Button, Card, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <Container
      id="wd-profile-screen"
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <Card className="p-4 shadow-sm border-0" style={{ width: "350px" }}>
        <h1 className="mb-4 text-center">Profile</h1>

        <Form>
          {/* Username */}
          <Form.Group className="mb-3" controlId="username">
            <Form.Control
              type="text"
              defaultValue="alice"
              placeholder="Username"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              defaultValue="123"
              placeholder="Password"
            />
          </Form.Group>

          {/* First Name */}
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Control
              type="text"
              defaultValue="Alice"
              placeholder="First Name"
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3" controlId="lastname">
            <Form.Control
              type="text"
              defaultValue="Wonderland"
              placeholder="Last Name"
            />
          </Form.Group>

          {/* Date of Birth */}
          <Form.Group className="mb-3" controlId="dob">
            <Form.Control type="date" defaultValue="2000-01-01" />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              defaultValue="alice@wonderland"
              placeholder="Email"
            />
          </Form.Group>

          {/* Role */}
          <Form.Group className="mb-4" controlId="role">
            <Form.Select defaultValue="FACULTY">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Form.Group>

          {/* Sign Out */}
          <div className="d-grid">
            <Link href="Signin" passHref>
              <Button variant="danger" type="button">
                Signout
              </Button>
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
