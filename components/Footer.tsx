import { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { db } from "../firebaseConfig"; // Adjust the path to your firebaseConfig
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Import Firestore functions

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    details: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save form data to Firebase Firestore
    try {
      const docRef = await addDoc(collection(db, "clientDetails"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        purpose: formData.purpose,
        details: formData.details,
        timestamp: Timestamp.now()
      });

      console.log("Document written with ID: ", docRef.id);

      // Send SMS message to your phone number (using Twilio API)
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: '7087963595',  // Replace with your phone number
          message: `New client inquiry: ${formData.name} (${formData.phone}) - ${formData.purpose}`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send SMS');
      }

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "",
        details: ""
      });

      // Show the popup message
      setShowPopup(true);

      // Hide the popup message after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      
    } catch (error: unknown) {
      let errorMessage = 'Unknown error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error submitting form:", errorMessage);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <form
          className="w-full max-w-md space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          />
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            required
          >
            <option value="" disabled>Select Purpose</option>
            <option value="website">Website</option>
            <option value="web app">Web App</option>
            <option value="mobile app">Mobile App</option>
            <option value="crossplatform app">Crossplatform App</option>
          </select>
          <textarea
            name="details"
            placeholder="More Details"
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg focus:outline-none hover:bg-purple-700"
          >
            Submit
          </button>
        </form>

        {showPopup && (
          <div
            className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
          >
            Form submitted successfully!
          </div>
        )}

        <a href="mailto:contact@jsmastery.pro" className="mt-8">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
