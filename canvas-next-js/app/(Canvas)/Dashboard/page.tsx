import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/algo.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1235 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Design and Analysis of Algorithms{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/aws.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1236 AWS </h5>
              <p className="wd-dashboard-course-title">Cloud & AWS </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/java.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1237 Java </h5>
              <p className="wd-dashboard-course-title">Java Programming </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1238 Machine Learning </h5>
              <p className="wd-dashboard-course-title">Machine Learning </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/images/nlp.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1239 NLP </h5>
              <p className="wd-dashboard-course-title">
                Natural Language Processing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/images/dbms.jpeg" width={200} height={150} alt="" />
            <div>
              <h5> CS1240 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management System
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
