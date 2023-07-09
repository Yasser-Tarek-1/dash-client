import BlogCard from "./BlogCard";

const BLOGS_CONTENT = [{}, {}, {}, {}];

const Blogs = () => {
  return (
    <section className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold">Our Latest News</h3>
        <div className="my-12">
          <div className="flex items-center w-full gap-8 justify-center flex-wrap">
            {BLOGS_CONTENT.map((blog, idx) => {
              return <BlogCard key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
