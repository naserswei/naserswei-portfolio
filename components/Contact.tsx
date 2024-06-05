import React from "react";
import { ProfileForm } from "./Form";

function Contact() {
  return (
    <section className="bg-[url('/images/contact.png')] h-[90vh] sm:h-[70vh] flex justify-center items-center">
      <div className=" bg-white px-5 pb-5 sm:w-[75%] w-[90%]">
        <ProfileForm />
      </div>
    </section>
  );
}

export default Contact;
