import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter, BsWhatsapp, BsTelephoneForward } from "react-icons/bs";

const Contact = () => {


  return (
    <div className=" text-slate-300 grid lg:grid-cols-2 gap-5 py-16">
      <div className="ml-5">
        <p className="text-3xl pb-16"> Get in touch </p>
        <div className="grid grid-cols-3 gap-8 text-xl lg:text-5xl lg:px-20">

        <a href="https://www.linkedin.com/in/jewelhfahim/" target="_blank" rel="noreferrer noopener">
        <BsLinkedin className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."/></a>
        
        <BsInstagram className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />

        <a href="https://www.facebook.com/Xewel.H.Fahim" target="_blank" rel="noreferrer noopener">
        <BsFacebook className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

        <a href="https://twitter.com/jewelhfahim" target="_blank" rel="noreferrer noopener">
        <BsTwitter className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>

        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer noopener">
        <BsWhatsapp className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." /></a>


        <div className="tooltip tooltip-top" data-tip="+8801911209322">
        <BsTelephoneForward className="m-4 hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." />        </div>

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
              className="input input-bordered input-secondary rounded-none bg-[#203555]"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-secondary rounded-none bg-[#203555]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-secondary rounded-none w-full mb-3 bg-[#203555]"
          />
          <textarea
            className="textarea textarea-secondary rounded-none h-28 mb-3 w-full bg-[#203555]"
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
