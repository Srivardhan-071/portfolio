import React from "react";
import codefeImg from "../assests/images/codefe-5.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
  const porjects = [
    {
      projectName: "CodeFE",
      porjectDiscreption:
        "CodeFE offers an immersive experience filled with exciting challenges and a playground to pratice your front-end skills.",
      projectImage: codefeImg,
      LiveDemoURL: "https://codefe.vercel.app",
      GithubURL: "https://github.com/Srivardhan12/CodeFE.git",
    },
  ];
  return (
    <div className="w-11/12 m-auto md:lg:px-10 md:lg:min-h-screen sm:w-fit">
      <h2 className="c-100 md:lg:px-8 pt-20 uppercase text-base font-semibold tracking-widest">
        Projects
      </h2>
      {porjects.map((p) => {
        return (
          <div className="md:lg:px-8 pt-10 flex lg:flex-row flex-col border-b border-slate-200 pb-10">
            <Link to={p.LiveDemoURL} target="_blank">
              <img
                src={p.projectImage}
                className="rounded-md hover:scale-105 transition md:lg:w-11/12 sm:w-full"
                alt="ProjectImg"
              />
            </Link>
            <div>
              <h3 className="c-400 text-5xl font-medium pt-6 lg:pt-0">
                {p.projectName}
              </h3>
              <p className="c-200 text-2xl font-medium py-5">
                {p.porjectDiscreption}
              </p>
              {p.LiveDemoURL ? (
                <Link
                  to={p.LiveDemoURL}
                  className="c-200 me-2 mb-2 text-sm font-semibold border-b-2"
                  target="_blank"
                >
                  Live Demo
                </Link>
              ) : (
                ""
              )}
              {p.GithubURL ? (
                <Link
                  to={p.GithubURL}
                  className="c-200 mx-3 me-2 mb-2 text-sm font-semibold border-b-2"
                  target="_blank"
                >
                  GitHub
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
