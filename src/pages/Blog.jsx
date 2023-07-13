import { useParams } from "react-router-dom";
import BlogCard from "../components/Home/BlogCard";
import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";
import Categories from "../components/OurStore/Filter/Categories";
import SingleBlog from "../components/Blog/SingleBlog";

// same page for Blogs and Blog Deatails
// if find { id } params then open Blog Deatails else open Blogs
const Blog = () => {
  const { id = null } = useParams();

  return (
    <>
      <Meta title={!id ? "Blogs" : "Dynamic Name"} />
      <BreadCrumb path={!id ? "Blogs" : "Dynamic Name"} />
      <div className="w-full h-full bg-[#f5f5f7] mt-4">
        <section className="w-full h-full py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center sm:items-start  gap-4 flex-col sm:flex-row">
              <div className="w-80 ">
                <Categories />
              </div>
              {id ? (
                <SingleBlog id={id} />
              ) : (
                <div className="w-full items-center justify-center flex flex-wrap gap-8">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
