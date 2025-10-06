import Link from "next/link";
import { Card, Container, Form } from "react-bootstrap";
export default function Signup() {
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
