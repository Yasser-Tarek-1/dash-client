import { Link } from "react-router-dom";

const BreadCrumb = ({ path }) => {
  return (
    <div className="text-sm breadcrumbs w-fit mx-auto">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{path || `Our Store`}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
