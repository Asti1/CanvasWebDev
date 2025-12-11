/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Quiz } from "./types";
const axiosWithCredentials = axios.create({ withCredentials: true });
const COURSES_API = "http://localhost:4000/api/courses";
const QUIZZES_API = "http://localhost:4000/api/quizzes";

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data as Quiz[];
};

export const createQuiz = async (courseId: string, quiz: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return response.data as Quiz;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

export const updateQuiz = async (quiz: Quiz) => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data as Quiz;
};

export const findQuizById = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data as Quiz;
};

export const findSubmissionsForUser = async (
  quizId: string,
  username: string
) => {
  const response = await axios.get(
    `${QUIZZES_API}/${quizId}/submissions/${username}`
  );
  return response.data;
};

export const createSubmission = async (quizId: string, submission: any) => {
  const response = await axios.post(
    `${QUIZZES_API}/${quizId}/submissions`,
    submission
  );
  return response.data;
};

export const findLatestSubmission = async (
  quizId: string,
  username: string
) => {
  const response = await axios.get(
    `${QUIZZES_API}/${quizId}/submissions/${username}/latest`
  );
  return response.data;
};
