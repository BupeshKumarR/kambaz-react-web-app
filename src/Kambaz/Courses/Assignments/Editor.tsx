import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-5">
      {/* Breadcrumb */}
      <p className="mb-4 fs-5">
        <strong>CS5610</strong> &gt; Assignments &gt; A1
      </p>

      {/* Form */}
      <form>
        {/* Assignment Name */}
        <div className="row mb-4">
          <div className="col-md-12">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              className="form-control"
              defaultValue="A1"
            />
          </div>
        </div>

        {/* Assignment Description */}
        <div className="row mb-4">
          <div className="col-md-12">
            <label htmlFor="wd-description" className="form-label">
              Assignment Description
            </label>
            <textarea
              id="wd-description"
              className="form-control"
              rows={12}
              defaultValue={`The assignment is available online.\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
            ></textarea>
          </div>
        </div>

        {/* Points */}
        <div className="row mb-4 align-items-center">
            <div className="col-md-4">
                <label htmlFor="wd-points" className="form-label">
                    Points</label>
            </div>
            <div className="col-md-8">
            <input
                id="wd-points"
                type="number"
                className="form-control"
                defaultValue={100}
                />
            </div>
            </div>

        {/* Assignment Group */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-4">
            <label htmlFor="wd-group" className="form-label">
              Assignment Group</label>
          </div>
          <div className="col-md-8">
          <select id="wd-group" className="form-control">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="instructions">INSTRUCTIONS</option>
          </select>
            </div>
        </div>

        {/* Submission Type and Online Entry Options */}
        <div className="row mb-4">
          <div className="col-md-3 p-3 rounded">
                <label htmlFor="wd-submission-type" className="form-label">
                  Submission Type
                </label>
          </div>
          <div className="col-md-9 border p-3 rounded">
            <div className="col-md-8">
                    <select id="wd-submission-type" className="form-control">
                    <option value="online">Online</option>
                    <option value="inperson">In Person</option>
                    </select>
            </div>
            <div className="col-md-8 mb-2 mt-3">
                <label className="form-label"><strong>Online Entry Options</strong></label>
            </div>
            <div className="col-md-8">
            <div className="form-check mb-2">
              <input
                id="wd-text-entry"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check  mb-2">
              <input
                id="wd-website-url"
                type="checkbox"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check  mb-2">
              <input
                id="wd-media-recordings"
                type="checkbox"
                className="form-check-input"
              />
              <label
                htmlFor="wd-media-recordings"
                className="form-check-label"
              >
                Media Recordings
              </label>
            </div>
            <div className="form-check  mb-2">
              <input
                id="wd-student-annotation"
                type="checkbox"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check  mb-2">
              <input
                id="wd-file-upload"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>      
        </div>
    </div>

            



        {/* Assign Section */}
        <div className="row mb-4">
            <div className="col-md-3">
                <label>Assign</label>
            </div>
            <div className="col-md-9">
        <div className="row mb-4">
          <div className="col-md-12 border p-3 rounded">
            <label htmlFor="wd-assign-to" className="form-label">
              <strong>Assign to</strong>
            </label>
            <input
              id="wd-assign-to"
              className="form-control mb-3"
              defaultValue="Everyone"
            />

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-due-date" className="form-label">
                <strong>Due</strong>
                </label>
                <input
                  id="wd-due-date"
                  type="date"
                  className="form-control"
                  defaultValue="2024-05-13"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">
                <strong>Available from</strong>
                </label>
                <input
                  id="wd-available-from"
                  type="date"
                  className="form-control"
                  defaultValue="2024-05-06"
                />
              </div>
              <div className="col-md-6 mt-3">
                <label htmlFor="wd-available-until" className="form-label">
                  <strong>Until</strong>
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  className="form-control"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Link
            to="/Kambaz/Courses/1234/Assignments"
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to="/Kambaz/Courses/1234/Assignments"
            className="btn btn-primary"
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}