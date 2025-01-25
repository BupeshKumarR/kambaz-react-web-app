import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/4208/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algo.jpg" width={200} />
            <div>
              <h5> CS4208 Intro to Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/3141/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dbms.jpg" width={200} />
            <div>
              <h5> CS3141 Intro to Database Management </h5>
              <p className="wd-dashboard-course-title">
              Analyst </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/5101/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python.jpeg" width={200} />
            <div>
              <h5> CS5101 Python </h5>
              <p className="wd-dashboard-course-title">
              Analyst  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/6500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/stats.jpg" width={200} />
            <div>
              <h5> STAT6500 Advanced Statistics  </h5>
              <p className="wd-dashboard-course-title">
              Analyst  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/2101/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pshycho.webp" width={200} />
            <div>
              <h5> PSYCH2101 - Introduction to Psychology </h5>
              <p className="wd-dashboard-course-title">
                Psychology  </p>
              <button> Go </button>
            </div>
          </Link>
         </div>
         <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/2001/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/microecon.jpg" width={200} />
            <div>
              <h5> ECON2001 Principles of Microeconomics </h5>
              <p className="wd-dashboard-course-title">
                Economics  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
