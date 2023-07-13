import BreadCrumb from "../Layouts/BreadCrumb";
import Button from "../Layouts/Button";
import Form from "../Layouts/Form";
import Meta from "../Layouts/Meta";

const Contact = () => {
  return (
    <>
      <Meta title={`Contact Us`} />
      <BreadCrumb path={"Contact Us"} />
      <div className="w-full h-full bg-[#f5f5f7] mt-4 py-8">
        <div className="container mx-auto px-4">
          <section className="mb-32 text-center">
            <div className="py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:backdrop-blur-[30px] md:px-12 lg:-mr-14">
                      <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                      <Form>
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
                        <div className="w-full h-full flex items-start gap-2 flex-col capitalize my-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <textarea
                            type="text"
                            id="message"
                            className={`border w-full rounded-lg outline-none text-sm focus:ring-yellow-400 focus:border-yellow-400 block`}
                            placeholder="Your Message "
                          />
                        </div>
                        <Button>Send</Button>
                      </Form>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <div className="relative h-[700px] rounded-lg shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884806.7441762078!2d32.16483725473649!3d29.97148721830253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1689024972560!5m2!1sar!2seg"
                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
