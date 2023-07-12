import { Link } from "react-router-dom";

const BreadCrumb = ({ path }) => {
  return (
    <div className="text-sm breadcrumbs w-fit mx-auto my-4">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{path}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
