"use client";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./store";
export default function Labs() {
  return (
    <>
      <Provider store={store}>
        <div className="text-3xl font-bold underline">Astitva Goel </div>
        <div>
          <ul>
            <li>
              <Link href="/Labs/Lab1">Lab1: HTML Examples</Link>
            </li>
            <li>
              <Link href="/Labs/Lab2">Lab2: CSS Basics</Link>
            </li>
            <li>
              <Link href="/Labs/Lab3">Lab3: JS Fundamentals</Link>
            </li>
            <li>
              <Link href="/Labs/Lab4">Lab4: State Management</Link>
            </li>
            <li>
              <Link href="/Labs/Lab5">Lab5: NodeJS</Link>
            </li>
          </ul>
        </div>
      </Provider>
    </>
  );
}
