"use client";

import SocialLinks from "@/app/_components/SocialLinks";
import { Col, Row } from "antd";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <Row gutter={40}>
      <Col span={12}>
        <div className="p-2 bg-white border-0 rounded-lg">
          <div
            className="rounded-lg h-[400px] w-full overflow-hidden"
            style={{
              backgroundImage: "url(/images/personal_photo.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </Col>
      <Col span={12}>
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center mb-5">
            <h1 className="text-4xl font-semibold">MD. Biplob Molla</h1>
            <div className="h-full w-1 bg-black mt-1 mx-2"></div>
            <div className="text-4xl font-semibold">
              <Typewriter
                words={[
                  "Web Developer",
                  "Fullstack",
                  "MERN",
                  "Nextjs",
                  "Typescript",
                ]}
                loop={true}
              />
            </div>
          </div>
          <p className="text-lg text-justify">
            Greetings, I am a full-stack website developer specializing in the
            MERN (MongoDB, Express.js, React.js, Node.js) stack. With a solid
            foundation built on two years of professional experience, I have
            successfully collaborated with 2-3 startups, bringing their digital
            visions to life. My expertise lies in crafting seamless,
            user-centric web applications that not only meet but exceed client
            expectations. I am passionate about leveraging cutting-edge
            technologies to deliver robust solutions, ensuring a smooth and
            engaging online experience for users. Let's transform your digital
            ideas into reality.
          </p>
          <div className="flex flex-col items-center mt-5">
            <h2 className="text-xl font-bold mt-2">Find me on</h2>
            <SocialLinks />
            <div className="flex gap-1 text-lg font-bold items-center">
              <p>-</p>
              <p className="">or</p>
              <p>-</p>
            </div>
            <span className="text-lg">ahmedtamim317@gmail.com</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
