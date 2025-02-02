import React, { useEffect, useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  User,
  MapPinned,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Contactpopup = ({ onFormSubmitSuccess }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [selectedData, setSelectedData] = useState({
    name: "",
    postalcode: "",
    email: "",
    phonenumber: "",
    courseCategory: "",
    courseTitle: "",
    message: "",
    privacyUnderstand: false,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await axios.get(`${url}/courses/allCourses/`);
        setCourses(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const setCourseCategory = (courseCategory) => {
    const filtered = courses.filter(
      (course) => course.courseCategory === courseCategory
    );
    setFilteredCourse(filtered);
    setSelectedData({ ...selectedData, courseCategory });
  };

  const Submit = async (e) => {
    e.preventDefault();
    const { name, email, courseTitle, message, privacyUnderstand } =
      selectedData;
    if (!name || !email || !courseTitle || !message || !privacyUnderstand) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await axios.post(`${url}/contact/`, selectedData);
      if (response.data.success === true) {
        toast.success("Message sent successfully.");
        setSelectedData({
          name: "",
          postalcode: "",
          email: "",
          phonenumber: "",
          courseCategory: "",
          courseTitle: "",
          message: "",
          privacyUnderstand: false,
        });
        setFilteredCourse([]);
        // Call the callback function to close the widget
        onFormSubmitSuccess?.();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="p-4 bg-gray-50">
      <p className="text-gray-600 text-sm mb-6">
        Please fill in the form and we'll get back to you shortly.
      </p>

      <form onSubmit={Submit} className="space-y-4">
        {/* Personal Information */}
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Your name *"
              className="pl-10 p-3 border rounded-lg w-full bg-white"
              value={selectedData.name}
              onChange={(e) =>
                setSelectedData({ ...selectedData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address *"
              className="pl-10 p-3 border rounded-lg w-full bg-white"
              value={selectedData.email}
              onChange={(e) =>
                setSelectedData({ ...selectedData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Phone Number"
              className="pl-10 p-3 border rounded-lg w-full bg-white"
              value={selectedData.phonenumber}
              onChange={(e) =>
                setSelectedData({
                  ...selectedData,
                  phonenumber: e.target.value,
                })
              }
            />
          </div>

          <div className="relative">
            <MapPinned className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Postal code"
              className="pl-10 p-3 border rounded-lg w-full bg-white"
              value={selectedData.postalcode}
              onChange={(e) =>
                setSelectedData({ ...selectedData, postalcode: e.target.value })
              }
            />
          </div>
        </div>

        {/* Course Selection */}
        <div className="space-y-3">
          <div className="relative">
            <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              className="pl-10 p-3 border rounded-lg w-full bg-white appearance-none"
              value={selectedData.courseCategory}
              onChange={(e) => setCourseCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Select a course category *
              </option>
              <option value="hourly">Hourly</option>
              <option value="intensive">Intensive</option>
            </select>
          </div>

          {filteredCourse.length > 0 && (
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                className="pl-10 p-3 border rounded-lg w-full bg-white appearance-none"
                value={selectedData.courseTitle}
                onChange={(e) =>
                  setSelectedData({
                    ...selectedData,
                    courseTitle: e.target.value,
                  })
                }
              >
                <option value="" disabled hidden>
                  Select a Course *
                </option>
                {filteredCourse.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.courseTitle}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            placeholder="Your message... *"
            className="pl-10 p-3 border rounded-lg w-full bg-white"
            rows="3"
            value={selectedData.message}
            onChange={(e) =>
              setSelectedData({ ...selectedData, message: e.target.value })
            }
          />
        </div>

        {/* Privacy Policy */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacyPolicy"
            className="mt-1"
            checked={selectedData.privacyUnderstand}
            onChange={(e) =>
              setSelectedData({
                ...selectedData,
                privacyUnderstand: e.target.checked,
              })
            }
          />
          <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
            I understand and agree to the{" "}
            <span className="text-blue-500 cursor-pointer">Privacy Policy</span>{" "}
            *
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactpopup;
