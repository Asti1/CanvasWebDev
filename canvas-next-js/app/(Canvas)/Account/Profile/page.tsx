/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import React from "react";
import Link from "next/link";
import { Form, Button, Card, Container } from "react-bootstrap";
import { RootState } from "../../store";

export default function Profile() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container
      id="wd-profile-screen"
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <Card className="p-4 shadow-sm border-0" style={{ width: "350px" }}>
        <h1 className="mb-4 text-center">Profile</h1>
        {profile && (
          <Form>
            {/* Username */}
            <Form.Group className="mb-3" controlId="username">
              <Form.Control
                type="text"
                // defaultValue="alice"
                placeholder="Username"
                defaultValue={profile.username}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    username: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                // defaultValue="123"
                placeholder="Password"
                defaultValue={profile.password}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    password: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* First Name */}
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Control
                type="text"
                // defaultValue="Alice"
                placeholder="First Name"
                defaultValue={profile.firstName}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    firstName: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* Last Name */}
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Control
                type="text"
                // defaultValue="Wonderland"
                placeholder="Last Name"
                defaultValue={profile.lastName}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    lastName: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-3" controlId="dob">
              <Form.Control
                type="date"
                // defaultValue="2000-01-01"
                defaultValue={profile.dob}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    dob: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                // defaultValue="alice@wonderland"
                placeholder="Email"
                defaultValue={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* Role */}
            <Form.Group className="mb-4" controlId="role">
              <Form.Select
                defaultValue="FACULTY"
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    role: e.target.value,
                  })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </Form.Select>
            </Form.Group>

            {/* Sign Out */}
            <div className="d-grid">
              <Link href="Signin" passHref>
                <Button onClick={() => dispatch(setCurrentUser(profile))}>
                  Save
                </Button>
              </Link>
            </div>
          </Form>
        )}
      </Card>
    </Container>
  );
}
