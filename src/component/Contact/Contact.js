import React, { useRef } from "react";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter, BsWhatsapp, BsTelephoneForward } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e9zelfu', 'template_0hqlm1a', form.current, 'IQNsjorEPhNdAX3lS')
      .then((result) => {
          console.log(result.text);
          toast.success("Message Sent")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


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

        <form ref={form} onSubmit={sendEmail} className="">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              name="to_name" 
              type="text"
              placeholder="Name"
              className="input input-bordered input-secondary rounded-none bg-[#203555]"
            />
            <input
              name="from_name"
              type="text"
              placeholder="Email"
              className="input input-bordered input-secondary rounded-none bg-[#203555]"
            />
          </div>
          <input
          name="subject"
            type="text"
            placeholder="Subject"
            className="input input-bordered input-secondary rounded-none w-full mb-3 bg-[#203555]"
          />
          <textarea
            name="message" 
            className="textarea textarea-secondary rounded-none h-28 mb-3 w-full bg-[#203555]"
            placeholder="Message"
          ></textarea>

          <div className="text-right">
            <button type="submit" className="btn btn-outline btn-secondary rounded-none text-right">
              Send message
            </button>
          </div>
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
        
      </div>
    </div>
  );
};

export default Contact;
