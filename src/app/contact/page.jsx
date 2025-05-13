"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Link from "next/link";
import PrimaryButton from "@/components/shared/button/PrimaryButton";
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader";
import Title from "@/components/shared/sectionHeader/Title";
import {
  Mail,
  Twitter,
  Instagram,
  Facebook,
  Github,
  Linkedin,
} from "lucide-react";

// Define social links with fallbacks
const socialLinks = {
  github: "https://github.com/Mehedimid",
  linkedin: "https://www.linkedin.com/in/mehedimid/",
  facebook: "https://web.facebook.com/mehedimid",
  instagram: "", // Not available
  twitter: "https://x.com/mehedimid",
};

const getValidLink = (...urls) => urls.find(Boolean);

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out.",
    });
    reset();
  };

  return (
    <div className="layout-padding">
      <SectionHeader icon={<Mail />} title="Contact Me" />

      <div className="content-padding">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          {/* Left Form Section */}
          <div className="w-full lg:w-7/12">
            <div className="flex justify-center">
              <Title text="Let's Talk" />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-lg shadow-md"
            >
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-4">
                  <label className="block text-base font-semibold mb-2">
                    Name
                  </label>
                  <input
                    className="w-full border-2 border-gray-400 rounded px-4 py-2"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4">
                  <label className="block text-base font-semibold mb-2">
                    Email
                  </label>
                  <input
                    className="w-full border-2 border-gray-400 rounded px-4 py-2"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="w-full px-3 mb-6">
                  <label className="block text-base font-semibold mb-2">
                    How can I help you?
                  </label>
                  <textarea
                    className="w-full border-2 border-gray-400 rounded px-4 py-3 h-40"
                    placeholder="Please enter your query..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <PrimaryButton text="send message" />
              </div>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="w-full lg:w-5/12">
            <div>
              <div className="flex justify-center">
                <Title text="Found me" />
              </div>
              <p className="mb-6">
                We would love to hear from you! Whether you have a question,
                feedback, or a partnership opportunity — I am here to help you
                make the most of your journey with me.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                    alt="phone"
                  />
                  <p>+1258 3258 5679</p>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                    alt="email"
                  />
                  <p>mehedihasan25276@gmail.com</p>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                    alt="address"
                  />
                  <p>Pairtala, Brahmanbaria, Chittagong</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex justify-evenly text-primary">
                <Link
                  href={getValidLink(socialLinks.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-8 h-8 hover:text-white transition" />
                </Link>
                <Link
                  href={getValidLink(socialLinks.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-8 h-8 hover:text-white transition" />
                </Link>
                <Link
                  href={getValidLink(socialLinks.facebook)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-8 h-8 hover:text-white transition" />
                </Link>
                <Link
                  href={getValidLink(
                    socialLinks.instagram,
                    socialLinks.facebook,
                    socialLinks.github
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-8 h-8 hover:text-white transition" />
                </Link>
                <Link
                  href={getValidLink(socialLinks.twitter, socialLinks.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-8 h-8 hover:text-white transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
