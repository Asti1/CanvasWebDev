/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const enrollInCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/courses/${courseId}/enroll`
  );
  return data;
};

export const findEnrollmentsForUser = async (userId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(
    `${COURSES_API}/${courseId}/enrollments`
  );
  return data;
};
