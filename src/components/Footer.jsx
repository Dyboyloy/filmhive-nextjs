import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#1F2937] px-1 py-4 text-white">
      <div>
        <h1 className="text-2xl font-bold text-center">
          Film{" "}
          <span className="text-white bg-sky-500 rounded-lg p-2">Hive</span>
        </h1>
      </div>
      <div className="flex items-center flex-col md:flex-row md:justify-between">
        <div className="my-4">
          <p className="text-xl text-justify w-[90vw] md:w-[50vw]">
            FilmHive is a leading free streaming website 2024 that offers users
            the opportunity to watch movies online without the need for
            registration. Boasting an extensive database and a range of
            impressive features, we are confident that FilmHive is the premier
            destination for free online movie viewing. We highly recommend that
            you do not miss out on this exceptional platform.
          </p>
        </div>
        <div className="w-[45vw]">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
          <div>
          <a href="https://www.facebook.com/longdy.gtx/" target="_blank" className="flex items-center hover:text-sky-400 transition-[.6s] my-2">
            <FaFacebook /> 
            <p className="text-base font-bold mx-2">Facebook</p>
          </a>
          <a href="https://t.me/ouk_longdy" target="_blank" className="flex items-center hover:text-sky-400 transition-[.6s] my-2">
            <FaTelegram />
            <p className="text-base font-bold mx-2">Telegram</p>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
