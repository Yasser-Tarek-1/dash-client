import BreadCrumb from "../Layouts/BreadCrumb";
import Button from "../Layouts/Button";
import Form from "../Layouts/Form";
import Meta from "../Layouts/Meta";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb path={"Forgot Password"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-8 text-3xl font-bold">Forgot Password</h2>
            <Form>
              <Form.Control
                htmlFor="email"
                label="email"
                type="email"
                placeholder="yasser@gmail.com"
                id="email"
                name="email"
              />
            </Form>
            <Button>Next</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
