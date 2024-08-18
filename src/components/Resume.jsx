import React from "react";
import ResumeInfo from "./ResumeInfo";

const data = [
  {
    year: "2007 present",
    title: "Freelance teacher",
    location: "Wroclaw,Poland",
    responsibilities:
      "Develop and deliver English language lessons Plan and prepare lesson materials and resources that align with the curriculum and student needs. Deliver engaging and interactive lessons that incorporate a variety of teaching methods and techniques to cater to different learning styles. Assess student progress: Regularly evaluate students language proficiency levels and track their progress. Provide constructive feedback and guidance to help students overcome challenges and achieve their language learning goals. I built my own school landing page as a side project using bootstrap.",
  },

  {
    year: "Jan 2019-2023",
    title: "English Language Teacher,Brochow School of English",
    location: "Wroclaw,Poland",
    responsibilities:
      "Teaching Business English and General English courses to groups of adults at various levels in class and online. Have in‐depth experience in course planning and implementation. Preparing students for various English exams. Running short intensive courses. Organizing games and learning activities for students. Using video and audio to create interest in the lesson and to get students talking. I built the school website as a side project using Materialize CSS",
  },
  {
    year: "Jan 2013- Jan 2019",
    title: "English Language Teacher,Speak UP, School of English",
    location: "Wroclaw,Poland",
    responsibilities:
      "Teaching Business English and General English courses to groups of adults at various levels in class and online. I provided lessons to students, using various teaching methods and techniques. Showed the grammar rules, introduced new vocabulary,facilitated discussions, conducted listening and speaking activities, and provided guidance and feedback to students.",
  },
];

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl pb-10 font-bold text-center text-[#001b5e] font-[Raleway]">
        Resume
      </h1>

      {data.map((item, idx) => (
        <ResumeInfo
          key={idx}
          year={item.year}
          title={item.title}
          location={item.location}
          responsibilities={item.responsibilities}
        />
      ))}
    </div>
  );
};

export default Resume;
