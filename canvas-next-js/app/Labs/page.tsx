import Link from "next/link";
export default function Labs() {
  return (
    <>
      <div className="text-3xl font-bold underline">Labs Page</div>
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
        </ul>
      </div>
    </>
  );
}
