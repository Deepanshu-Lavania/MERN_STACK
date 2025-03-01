import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    console.log(formData);
    //Email js Data
    const serviceId = "service_9aebtw2";
    const templateId = "template_i9h78sb";
    const publicKey = "9UQ0N_YpHHQh2I2S-";

    //Create a new object that contains dynamic template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Deepanshu Lavania",
      message: formData.message,
    };

    //send the eamil using EmailJs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitMessage("Email sent successfuly ! ");
          console.log("emailjs response is : ",response);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        }, 1500);
      }).catch((error)=>{
        console.error('Error during send the email : ',error)
      })
  };

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, project inquiries,
            or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168102.00619643932!2d77.53448752463363!3d28.987162129677248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sModinagar%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1740739160461!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                Send Me a Message
              </h3>

              

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your Name..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
