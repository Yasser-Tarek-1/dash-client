import Button from "../../Layouts/Button";
import Form from "../../Layouts/Form";
import { mainBanner1 } from "../../assets";

const SingleBlog = ({ id }) => {
  return (
    <div className="w-full h-full">
      <div className="mb-4 rounded-lg overflow-hidden lg:h-[70vh]">
        <h3 className="mb-6 text-2xl font-[500]">A butey Blog For You.</h3>
        <img
          src={mainBanner1}
          className="rounded-lg object-cover max-w-full"
          alt="blog"
        />
      </div>
      <p className="mb-4  text-base text-gray-600">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div className="flex items-center gap-8 mb-4 ">
        <p className="text-sm text-gray-500">11 JUN, 2023</p>
        <p className="text-sm text-gray-500">Yasser</p>
      </div>
      <div className="p-4 rounded-lg bg-white shadow-lg">
        <h3 className="mb-6 text-xl font-[500]">Leave Commint</h3>
        <Form>
          <div className="flex items-center gap-6">
            <Form.Control
              htmlFor="name"
              label="Name"
              id="name"
              name="name"
              placeholder="John"
            />
            <Form.Control
              htmlFor="email"
              label="Email address"
              id="email"
              name="email"
              placeholder="john.doe@company.com"
            />
          </div>
          <div className="w-full h-full flex items-start gap-2 flex-col capitalize my-2">
            <label htmlFor="commint" className="text-sm font-medium">
              Your Commint
            </label>
            <textarea
              type="text"
              id="commint"
              className={`border w-full rounded-lg outline-none text-sm focus:ring-yellow-400 focus:border-yellow-400 block`}
              placeholder="Your Commint"
            />
          </div>
          <Button>Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default SingleBlog;
