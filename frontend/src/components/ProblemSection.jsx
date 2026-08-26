import React from "react";
import { FolderX, RefreshCw, UserX, Files } from "lucide-react";

const problems = [
  {
    icon: FolderX,
    title: "Your records get lost",
    description:
      "Paper folders tear, fade, and disappear at the worst moments. A missing test result can delay treatment by days.",
  },
  {
    icon: RefreshCw,
    title: "You redo the same tests",
    description:
      "When hospitals can't see each other's work, they repeat it. You pay again in time, money, and discomfort.",
  },
  {
    icon: UserX,
    title: "You don't own any of it",
    description:
      "Your records belong to the hospital, not to you. Getting a copy takes days, phone calls, and in person visits.",
  },
  {
    icon: Files,
    title: "Each hospital starts from scratch",
    description:
      "Your history is scattered. Every new doctor sees an incomplete picture because records don't follow you.",
  },
];

const ProblemSection = () => {
  return (
    <section id="learn-more" className="py-24 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight mb-5 max-w-3xl mx-auto">
            Millions of Nigerians can't access their own medical history.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            The cost of poor health record access is paid in repeated tests,
            delayed care, and unnecessary stress every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-canvas rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
