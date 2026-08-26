import React from "react";

const BenefitsSection = ({ eyebrow, title, subtitle, people }) => {
  return (
    <section className="py-28 px-4 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-ink-soft font-semibold mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4 max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {people.map((person, index) => {
            const Icon = person.icon;

            return (
              <div
                key={index}
                className="bg-canvas border border-hairline rounded-2xl p-7 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-ink-soft">
                    {person.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink tracking-tight">
                  {person.name}
                </h3>
                <p className="text-sm text-ink-soft mb-4">
                  {person.subtitle}
                </p>

                <p className="text-sm text-ink-soft leading-relaxed mb-6">
                  {person.bio}
                </p>

                <div className="mt-auto rounded-xl bg-primary/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-1.5">
                    What Karevo gives {person.pronoun}
                  </p>
                  <p className="text-sm text-ink leading-relaxed">
                    {person.gift}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
