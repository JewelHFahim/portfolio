import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter, BsWhatsapp, BsTelephoneForward } from "react-icons/bs";

const Contact = () => {


  return (
    <div className=" text-slate-300 grid grid-cols-2 gap-5 pt-16">
      <div className="ml-5">
        <p className="text-3xl pb-16">Let's Connect ...</p>
        <div className="grid grid-cols-3 text-5xl px-20">
        <BsLinkedin className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
        
        <BsInstagram className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <BsFacebook className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <BsTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <BsWhatsapp className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <BsTelephoneForward className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />


        </div>


      </div>



      <div className="pr-5">
        <p className=" text-3xl pb-6 text-secondary">Contact me</p>

        <p className="pb-8 hidden lg:block">
          Get in touch or shoot me an email directly on{" "}
          <span className="font-bold">jewelhfahim@gmail.com</span>{" "}
        </p>

        <form className="">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-info rounded-none bg-[#203555]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-info rounded-none bg-[#203555]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info rounded-none w-full mb-3 bg-[#203555]"
          />
          <textarea
            className="textarea textarea-info rounded-none h-28 mb-3 w-full bg-[#203555]"
            placeholder="Message"
          ></textarea>

          <div className="text-right">
            <button className="btn btn-outline btn-secondary rounded-none text-right">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
