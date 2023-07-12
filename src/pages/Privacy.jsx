import { Link } from "react-router-dom";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

const Privacy = () => {
  return (
    <>
      <Meta title={"Privacy"} />
      <BreadCrumb path={"Privacy & Policy"} />
      <div className="w-full h-full bg-[#f5f5f7] mt-4">
        <section className="w-full h-full py-8">
          <div className="container mx-auto px-4">
            <div className="flex sm:items-center gap-4 flex-col">
              <h3 className="text-3xl font-[500]">Privacy Policy.</h3>
              <p className="text-base text-gray-600 sm:w-2/3">
                At Dash., accessible from{" "}
                <Link
                  to="https://yasser-portfolio.vercel.app/"
                  target="_blank"
                  className="font-semibold underline"
                >
                  here,
                </Link>{" "}
                one of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by Dash. and how we use it. If you have
                additional questions or require more information about our
                Privacy Policy, do not hesitate to contact us. This Privacy
                Policy applies only to our online activities and is valid for
                visitors to our website with regards to the information that
                they shared and/or collect in Dash.. This policy is not
                applicable to any information collected offline or via channels
                other than this website.
              </p>
              <h3 className="text-2xl font-[500]">Consent</h3>
              <p className="text-base text-gray-600 sm:w-2/3">
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms. Information we collect The personal
                information that you are asked to provide, and the reasons why
                you are asked to provide it, will be made clear to you at the
                point we ask you to provide your personal information. If you
                contact us directly, we may receive additional information about
                you such as your name, email address, phone number, the contents
                of the message and/or attachments you may send us, and any other
                information you may choose to provide. When you register for an
                Account, we may ask for your contact information, including
                items such as name, company name, address, email address, and
                telephone number.
              </p>
              <p className="text-base text-gray-600 sm:w-2/3">
                Dash. follows a standard procedure of using log files. These
                files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
