import aboutimg from "../assets/aboutus.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Dispatch, SetStateAction } from "react";

function About({
  handleOpenModel,
  userData,
  setUserData,
}: {
  handleOpenModel: (type: "signin" | "signup") => void;
  userData: any;
  setUserData: Dispatch<SetStateAction<any>>;
}) {
  return (
    <>
      <Header
        handleOpenModel={handleOpenModel}
        userData={userData}
        setUserData={setUserData}
      />

      <div className="w-[90%] mx-auto my-3 sm:flex sm:items-center sm:gap-6 text-justify">
        <img
          src={aboutimg}
          alt="about-us-img"
          className="w-screen rounded-2xl sm:w-[50%] sm:rounded-2xl"
        />
        <div>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-pink-500">Match Verse</span>,
            we’re not just connecting profiles — we’re nurturing relationships.
            Our team understands that choosing a life partner is one of life’s
            most significant decisions. That’s why we’re committed to making
            your experience thoughtful, transparent, and empowering.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Our platform is designed to honor cultural values while embracing
            modern aspirations. With advanced search filters, privacy-first
            controls, and real-time support, we ensure that your path to
            companionship is smooth, meaningful, and respectful.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Thousands of couples have already found their happily-ever-after
            with us — and we can’t wait to be part of your journey too.
          </p>

          <p className="mt-6 text-pink-600 font-semibold text-lg italic text-center">
            "Let your love story begin with trust, grow with understanding, and
            blossom with us."
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
