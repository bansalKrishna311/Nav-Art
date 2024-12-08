"use client";

import Image from "next/image";

const ContactCard = ({ name, phone, email, location, imageSrc }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-5 mx-auto">
      {/* Profile Picture */}
      <div className="flex items-center justify-center">
        <Image
          className="w-24 h-24 rounded-full object-cover shadow-md"
          src={imageSrc}
          alt={`${name}'s Profile Picture`}
          width={96}
          height={96}
        />
      </div>

      {/* Name and Location */}
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{location}</p>
      </div>

      {/* Contact Information */}
      <div className="mt-6 space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-400">
          <svg
            className="w-6 h-6 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l2-2m0 0l7 7-7-7zm2-2h12m-2 8l7-7-7 7z"
            />
          </svg>
          <a href={`tel:${phone}`} className="text-blue-700 hover:underline">
            {phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-400">
          <svg
            className="w-6 h-6 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 4H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
            />
          </svg>
          <a href={`mailto:${email}`} className="text-blue-700 hover:underline">
            {email}
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg shadow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact Me
          <svg
            className="rtl:rotate-180 w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
