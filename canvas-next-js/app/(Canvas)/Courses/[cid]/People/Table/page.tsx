/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../Table";
import * as coursesClient from "../../../client";

export default function CoursePeopleTablePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    const list = await coursesClient.findUsersForCourse(cid as string);
    setUsers(list);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}

