"use client";
import { UserRound } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import SkillBar from "@/components/shared/skillBar/SkillBar";
import Title from "@/components/shared/sectionHeader/Title";
import PrimaryButton from "@/components/shared/button/PrimaryButton";
import SecondaryTitle from "@/components/shared/sectionHeader/SecondaryTitle";

const AboutPage = () => {
  return (
    <section className="layout-padding text-white">
      {/* Section Header */}
      <SectionHeader icon={<UserRound />} title="About Me" />

      {/*=== about page content and skills === */}
      <div>
        {/* About Content */}
        <div className="content-padding">
          <div className="flex flex-col md:flex-row gap-5">
            {/* Left Column */}
            <div className="md:w-2/3">
              <SecondaryTitle text="Fullstack Developer" />
              <p className="sm:text-sm md:text-base lg:text-lg leading-relaxed mb-8">
                I am a passionate Fullstack Web Developer with a strong focus on
                building modern, scalable web applications. My journey began
                with frontend development, but I quickly expanded into backend
                technologies to build complete solutions. I enjoy working with
                tools like React, Redux, and Tailwind on the frontend, and
                Node.js, Express, and MongoDB on the backend. I am committed to
                clean code, performance, and continuously learning the latest
                technologies to deliver value through my work.
                <br />
                Currently I have done two fullstack projects where I was leading
                the team. All new technologies like Typescript, NextJs, Redux,
                MongoDB, JWT have been used. You can also explore in my project
                page.
              </p>
            </div>

            {/* Right Column */}
            <div className="md:w-1/3">
              <SecondaryTitle text="personal information" />
              <div className="space-y-3">
                <p>
                  <span className="font-semibold text-primary">Name</span> :
                  Mehedi Hasan
                </p>
                <p>
                  <span className="font-semibold text-primary">Age</span> : 26
                  Years
                </p>
                <p>
                  <span className="font-semibold text-primary">Address</span> :
                  Brahmanbaria, Chittagong{" "}
                </p>
                <p>
                  <span className="font-semibold text-primary">Email</span> :{" "}
                  <a href="mailto:mehedi@example.com">
                    mehedihasan25276@example.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-primary">Phone</span> :
                  (+880) 185 768 3573
                </p>
                <p>
                  <span className="font-semibold text-primary">Whatsapp</span>{" "}
                  01857683573
                </p>
              </div>
              <div className="mt-5
              ">
                {" "}
                <a href="/assets/resume.pdf" download>
                  <PrimaryButton text="Download resume" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-10 content-padding">
          {/* Frontend Skills */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center">
              <Title text="Frontend Skills" />
            </div>

            {/* Background Title */}
            <span className="absolute text-[80px] md:text-[100px] font-bold uppercase text-gray-800 opacity-10 -top-4 left-4 select-none pointer-events-none">
              Skill
            </span>
            <ul className="list-disc list-inside space-y-1 text-gray-300 relative z-10">
              <SkillBar skill="HTML5" percent={90} />
              <SkillBar skill="CSS3 / Tailwind CSS" percent={88} />
              <SkillBar skill="JavaScript / TypeScript" percent={85} />
              <SkillBar skill="React.js / Redux" percent={87} />
              <SkillBar skill="Next.js" percent={82} />
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center">
              <Title text="backend Skills" />
            </div>

            {/* Background Title */}
            <span className="absolute text-[80px] md:text-[100px] font-bold uppercase text-gray-800 opacity-10 -top-4 left-4 select-none pointer-events-none">
              Skill
            </span>
            <ul className="list-disc list-inside space-y-1 text-gray-300 relative z-10">
              <SkillBar skill="Node.js / Express.js" percent={90} />
              <SkillBar skill="MongoDB / Mongoose" percent={95} />
              <SkillBar skill="JWT / Security" percent={75} />
              <SkillBar skill="REST API Design" percent={100} />
              <SkillBar skill="Zod / Validation" percent={100} />
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="content-padding">
          <div className="flex flex-col items-center">
            <Title text="education" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center text-sm font-normal">
            {/* Honours Section */}
            <div>
              <SecondaryTitle text="Honours" />
              <p>Graduated, BBA in Accounting</p>
              <p>National University, Bangladesh</p>
              <p className="text-xs text-gray-400">2018 - 2024</p>
            </div>

            {/* HSC Section */}
            <div>
              <SecondaryTitle text="Higher Secondary" />
              <p>Business Studies</p>
              <p>Sirajganj Govt. College</p>
              <p className="text-xs text-gray-400">2015 - 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
