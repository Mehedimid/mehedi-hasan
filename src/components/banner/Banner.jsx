"use client";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Banner = () => {
  return (
    <section className="relative w-full h-[100vh] md:h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background image */}
      <Image
        src="https://watson.cosmosthemes.com/dark/wp-content/uploads/2021/05/home-bg-1.jpg"
        alt="Mehedi Hasan"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${playfair.className} uppercase`}
        >
          Mehedi <span className="text-primary">Hasan</span>
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 mb-6 font-semibold">
          <Typewriter
          options={{
            strings: [
              'Full Stack Developer',
              'Mern Stack Developer',
              'React & Next.js Expert',
              'MongoDB expert',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/Mehedimid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-white text-gray-300" size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mehedimid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-white text-gray-300" size={28} />
          </Link>
          <Link
            href="https://web.facebook.com/mehedimid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-white text-gray-300" size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
