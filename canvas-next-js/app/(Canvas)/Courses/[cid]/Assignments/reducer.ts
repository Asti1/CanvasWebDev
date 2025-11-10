/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}
interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
    },
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
