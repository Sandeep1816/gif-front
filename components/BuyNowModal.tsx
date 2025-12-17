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
    message: Yup.string()
      .min(10, "Minimum 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          productTitle: product.title,
        }),
      });

      if (!res.ok) {
        alert("Failed to submit order");
        return;
      }

      alert("Order submitted successfully!");
      onClose();
    } catch {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm 
                    flex items-center justify-center z-50 p-4">

      {/* MODAL CARD */}
      <div
        className="
          bg-white w-full max-w-lg rounded-3xl
          border border-[#E3DBFF] shadow-2xl p-6
          animate-in fade-in zoom-in duration-200
        "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#2E2545] mb-1">
          Buy Now
        </h2>
        <p className="text-sm text-[#6B6280] mb-6">
          {product.title}
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-[#2E2545]">
                Name
              </label>
              <Field
                name="name"
                className="
                  w-full mt-1 p-3 rounded-xl
                  bg-[#FBFAFF] border border-[#E3DBFF]
                  text-[#2E2545]
                  focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
                  transition
                "
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-[#2E2545]">
                Email
              </label>
              <Field
                name="email"
                className="
                  w-full mt-1 p-3 rounded-xl
                  bg-[#FBFAFF] border border-[#E3DBFF]
                  text-[#2E2545]
                  focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
                  transition
                "
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-[#2E2545]">
                Phone
              </label>
              <Field
                name="phone"
                className="
                  w-full mt-1 p-3 rounded-xl
                  bg-[#FBFAFF] border border-[#E3DBFF]
                  text-[#2E2545]
                  focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
                  transition
                "
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-[#2E2545]">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="
                  w-full mt-1 p-3 rounded-xl h-28 resize-none
                  bg-[#FBFAFF] border border-[#E3DBFF]
                  text-[#2E2545]
                  focus:outline-none focus:ring-2 focus:ring-[#C9B0FF]
                  transition
                "
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-xs text-red-500 mt-1"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-2xl
                bg-[#C9B0FF] hover:bg-[#A88BFF]
                text-[#2E2545] font-semibold
                shadow-md transition
              "
            >
              Submit Order
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="
                w-full py-3 rounded-2xl
                border border-[#E3DBFF]
                text-[#2E2545] font-medium
                hover:bg-[#EFEAFF] transition
              "
            >
              Cancel
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
}
