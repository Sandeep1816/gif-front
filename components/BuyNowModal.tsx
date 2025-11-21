"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BuyNowModal({ product, onClose }: any) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
      .required("Phone is required"),
    message: Yup.string().min(10, "Minimum 10 chars").required("Message required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          productTitle: product.title,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Failed to submit order");
        return;
      }

      alert("Order submitted successfully!");
      onClose();
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      {/* MODAL CARD */}
      <div className="bg-[#FFF3E5] w-full max-w-lg rounded-2xl shadow-xl border border-[#F5DCC7] p-6">

        <h2 className="text-2xl font-bold text-[#4A3728] mb-4">
          Buy: {product.title}
        </h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4">

            {/* Name */}
            <div>
              <label className="font-medium text-[#4A3728]">Name</label>
              <Field
                name="name"
                className="w-full p-3 mt-1 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]"
              />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-[#4A3728]">Email</label>
              <Field
                name="email"
                className="w-full p-3 mt-1 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium text-[#4A3728]">Phone</label>
              <Field
                name="phone"
                className="w-full p-3 mt-1 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]"
              />
              <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Message */}
            <div>
              <label className="font-medium text-[#4A3728]">Message</label>
              <Field
                as="textarea"
                name="message"
                className="w-full p-3 mt-1 bg-[#FFF9F1] border border-[#EBD8C7] rounded-lg h-28 text-[#4A3728] resize-none focus:outline-none focus:ring-2 focus:ring-[#F6D4BD]"
              />
              <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#F6D4BD] text-[#4A3728] font-semibold hover:bg-[#E8C5AC] transition shadow-sm"
            >
              Submit Order
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#F0E6DD] rounded-lg text-[#4A3728] hover:bg-[#E6D9CF] transition mt-2"
            >
              Cancel
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
}
