import React from 'react';
import contactImage from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <section id='contact' className="bg-[#ddcfc6] py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg grid grid-cols-1 md:grid-cols-2">

        {/* Contact Information */}
        <div className="p-8 sm:p-12 text-center order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We are here to meet any business need and to promote your company online!
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Phone:</span> <span className='underline underline-offset-4'>1 (232) 252 55 22</span>
            </p>
            <p>
              <span className="font-semibold">Location:</span> 75 Street Sample, WI 63025
            </p>
            <p>
              <span className="font-semibold">Mail:</span> <a href="mailto:template@sample.com" className="underline underline-offset-4">template@sample.com</a>
            </p>
          </div>

          <p className="text-gray-700 text-sm mt-2">
            Images from <span className=" underline underline-offset-4 cursor-pointer hover:text-gray-400 transition-colors">Freepik</span>
          </p>
        </div>

        {/* Right side image */}
        <div className="relative w-full h-80 sm:h-full order-1 md:order-2">
          <img
            src={contactImage}
            alt="Desk and Laptop"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
