import { Link } from "react-router-dom";
import { mainBanner1 } from "../../assets";
import Button from "../../Layouts/Button";

const BlogCard = ({ img, date, title, des, link = "/" }) => {
  return (
    <div className="rounded-lg w-80 h-[450px] bg-white shadow-xl overflow-hidden">
      <img
        src={img || mainBanner1}
        alt="mainBanner1"
        className="max-w-full w-80 h-56"
      />
      <div className="p-6 flex items-start gap-2 flex-col">
        <p className="text-xs text-gray-400">{date || `11 JUN, 2023`}</p>
        <h2 className="card-title">{title || `Shoes!`}</h2>
        <p className=" text-sm text-gray-600 custom-ellipsis h-16">
          {des ||
            `If a dog chews shoes whose shoes does he choose, If a dog chews shoes
          whose shoes does he choose?`}
        </p>
        <Button.Link to="/blog/1">Read more</Button.Link>
      </div>
    </div>
  );
};

export default BlogCard;
