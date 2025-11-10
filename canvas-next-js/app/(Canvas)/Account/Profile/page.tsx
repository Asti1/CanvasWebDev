"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";

// Define the Profile type
interface Profile {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
}

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  // Initialize profile with proper typing
  const [profile, setProfile] = useState<Profile>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "USER",
  });

  // Load current user data into profile when component mounts
  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const handleSignout = () => {
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  const handleSave = () => {
    dispatch(setCurrentUser(profile));
    // Optionally show a success message or redirect
  };

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <input
        id="wd-username"
        className="form-control mb-2"
        placeholder="Username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        className="form-control mb-2"
        placeholder="First Name"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        className="form-control mb-2"
        placeholder="Last Name"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <input
        id="wd-dob"
        type="date"
        className="form-control mb-2"
        value={profile.dob}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />
      <select
        id="wd-role"
        className="form-control mb-2"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        id="wd-save-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={handleSave}
      >
        Save
      </button>
      <button
        id="wd-signout-btn"
        className="btn btn-danger w-100"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </div>
  );
}
