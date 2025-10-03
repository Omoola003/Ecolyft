"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock } from "lucide-react";

export default function RequestPickupSection() {
    const [formData, setFormData] = useState({
    name: "",
    address: "",
    wasteType: "",
    quantity: "",
    date: "",
    time: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/request-pickup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          address: "",
          wasteType: "",
          quantity: "",
          date: "",
          time: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Quick Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 h-full"
          >
            {/* WhatsApp Card */}
            <div className="bg-[#F8FFF7] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-3">
                  Quick Schedule
                </h2>
                <p className="text-gray-700 mb-5">
                  Need a faster way to schedule your pickup? Chat with us
                  directly on WhatsApp for instant support.
                </p>
              </div>
              <a
                href="https://wa.me/2348071116369"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-500 transition-all duration-300 mt-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp to Schedule
              </a>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#2E8B57] mb-4">
                  Need Help?
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-600 mt-1" />
                    <span>
                      Call us:{" "}
                      <strong className="text-gray-900">
                        +234 (807) 111-6369
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <span>
                      Business Hours: <br />
                      <strong className="text-gray-900">
                        Mon–Fri, 9AM–5PM EST
                      </strong>
                    </span>
                  </li>
                  <li>
                    We typically respond to all requests within{" "}
                    <strong>24 hours</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Compact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F8FFF7] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#2E8B57] mb-3">
                Request Waste Pickup
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Pickup address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <select
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                >
                  <option value="">Select Waste Type</option>
                  <option>Plastics</option>
                  <option>Papers</option>
                  <option>Glass</option>
                  <option>Metals</option>
                  <option>E-waste</option>
                  <option>Others</option>
                </select>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity e.g. 5kg, 2 bags"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg"
            >
              {status === "loading" ? "Submitting..." : "Submit Request"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-3">Request submitted successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-3">Something went wrong. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
