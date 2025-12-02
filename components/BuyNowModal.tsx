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
      <div className="bg-[#F7DDE2] w-full max-w-lg rounded-2xl shadow-xl 
                      border border-[#E8C7C7] p-6">

        <h2 className="text-2xl font-bold text-[#8A1538] mb-4">
          Buy: {product.title}
        </h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4">

            {/* Name */}
            <div>
              <label className="font-medium text-[#8A1538]">Name</label>
              <Field
                name="name"
                className="w-full p-3 mt-1 bg-[#FFF9F5] border border-[#E8C7C7] 
                           rounded-lg text-[#3A2F2F] focus:outline-none 
                           focus:ring-2 focus:ring-[#D4A5A5]"
              />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-[#8A1538]">Email</label>
              <Field
                name="email"
                className="w-full p-3 mt-1 bg-[#FFF9F5] border border-[#E8C7C7] 
                           rounded-lg text-[#3A2F2F] focus:outline-none 
                           focus:ring-2 focus:ring-[#D4A5A5]"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium text-[#8A1538]">Phone</label>
              <Field
                name="phone"
                className="w-full p-3 mt-1 bg-[#FFF9F5] border border-[#E8C7C7] 
                           rounded-lg text-[#3A2F2F] focus:outline-none 
                           focus:ring-2 focus:ring-[#D4A5A5]"
              />
              <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Message */}
            <div>
              <label className="font-medium text-[#8A1538]">Message</label>
              <Field
                as="textarea"
                name="message"
                className="w-full p-3 mt-1 bg-[#FFF9F5] border border-[#E8C7C7] 
                           rounded-lg h-28 text-[#3A2F2F] resize-none 
                           focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]"
              />
              <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#8A1538] text-white 
                         font-semibold hover:bg-[#72102D] transition shadow-md"
            >
              Submit Order
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#FFF9F5] rounded-lg text-[#8A1538] 
                         border border-[#E8C7C7] font-medium hover:bg-[#F3E3E8] 
                         transition mt-2"
            >
              Cancel
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
}
