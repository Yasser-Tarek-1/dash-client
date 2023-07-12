import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

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
                      <form>
                        <div
                          className="relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-yellow-500 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="name"
                            placeholder="Name"
                          />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                            htmlFor="name"
                          >
                            Name
                          </label>
                        </div>
                        <div
                          className="relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-yellow-500 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="Email address"
                          />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                            htmlFor="email"
                          >
                            Email address
                          </label>
                        </div>
                        <div
                          className="relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <textarea
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="message"
                            rows="3"
                            placeholder="Your message"
                          ></textarea>
                          <label
                            htmlFor="message"
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                          >
                            Message
                          </label>
                        </div>
                        <button
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          className="inline-block w-full rounded bg-yellow-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-yellow-500-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-yellow-500-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-500-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <div className="relative h-[700px] rounded-lg shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d884806.7441762078!2d32.16483725473649!3d29.97148721830253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1689024972560!5m2!1sar!2seg"
                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameBorder="0"
                        allowfullscreen
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
