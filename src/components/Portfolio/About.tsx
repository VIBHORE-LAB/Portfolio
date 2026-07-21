import { User } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Grid switches to 1 column on mobile, 2 columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs sm:text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                About Me
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-snug">
                Building with Purpose, <br />
                <span className="text-muted-foreground">
                  Designing with Precision
                </span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Full Stack Developer with over a year of professional experience building, scaling, and optimizing web applications. I specialize in the MERN stack, TypeScript, and modern system architectures, designing end-to-end solutions that balance complex backend logic with smooth, responsive interfaces.
              </p>
              <p>
                My approach centers on writing clean, maintainable code and solving real-world challenges—whether it's optimizing search indexing, architecting zero-shot AI classification pipelines, or building performant developer tools. I thrive in agile environments where I can translate product requirements into polished, production-ready systems.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-gradient-card p-6 sm:p-8 rounded-2xl border border-border shadow-xl">
              {/* Traffic Lights */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Code Block */}
              <div className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-code-comment">
                  // Core engineering profile
                </div>
                <div className="mt-2">
                  <span className="text-code-keyword">const</span>{" "}
                  <span className="text-code-foreground">engineer</span> = {"{"}
                </div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-code-string">"experience"</span>:{" "}
                    <span className="text-code-string">"1+ Years"</span>,
                  </div>
                  <div>
                    <span className="text-code-string">"specialties"</span>:{" "}
                    {"["}
                    <span className="text-code-string">"Full Stack"</span>,{" "}
                    <span className="text-code-string">"API Design"</span>,{" "}
                    <span className="text-code-string">"Performance Optimization"</span>
                    {"]"},
                  </div>
                  <div>
                    <span className="text-code-string">"philosophy"</span>:{" "}
                    <span className="text-code-string">"Clean code & robust architecture"</span>,
                  </div>
                  <div>
                    <span className="text-code-string">"focus"</span>:{" "}
                    <span className="text-code-string">"Scalable applications & developer tooling"</span>
                  </div>
                </div>
                <div>{"};"}</div>
              </div>
            </div>

            {/* Floating Shapes */}
            <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-primary/20 rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-primary/20 rotate-45 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
