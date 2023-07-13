import BreadCrumb from "../Layouts/BreadCrumb";
import Button from "../Layouts/Button";
import Form from "../Layouts/Form";
import Meta from "../Layouts/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb path={"Reset Password"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-8 text-3xl font-bold">Reset Password</h2>
            <htmlForm>
              <Form.Control
                htmlFor="password"
                label="Password"
                id="password"
                name="password"
                placeholder="•••••••••"
                type="password"
              />
              <Form.Control
                htmlFor="confirm_password"
                label="Ponfirm Password"
                id="confirm_password"
                name="confirm_password"
                placeholder="•••••••••"
                type="password"
              />
              <Button>Reset</Button>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
