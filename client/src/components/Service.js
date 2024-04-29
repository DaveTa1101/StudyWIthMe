import React from "react";
import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "What is study with me?",
    desc: "This is a online platform that allows you to study with other people. You can join a room and study with other people. You can also create a room and invite other people to study with you. All you have to do is create an account and you can start studying with other people. This is an non-profit platform and it is free to use created by students ",
  },
  {
    title: "How can i make the this website?",
    desc: "It started as a project for a class however, i want to use it to help other students. I am a student and i know how hard it is to study alone. I want to create a platform where students can study together. I am still working on it and i am open to suggestions. If you have any suggestions or feedback, please let me know. I would love to hear from you.",
  },
];

export function Faqs4() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            Frequently asked questions
          </Typography>
          <Typography
            className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
          >
            What is study with me and how does it work? Here are some of the most
            frequently asked questions about our platform. This should help you
            get started.
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs.map(({ title, desc }) => (
            <div key={title}>
            <Typography color="blue-gray" className="pb-6 text-[20px] font-bold">
            {title}
          </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs4;