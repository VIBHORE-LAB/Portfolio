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
                A little bit of me <br />
                <span className="text-muted-foreground">
                  for the starters...
                </span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I build things for the web — sometimes for fun, sometimes for
                work, always with intention. I’m a full stack developer who
                cares about clean design, logic and smooth user experiences, and
                writing code that doesn’t make me cringe later (though sometimes
                it does). Whether it’s a slick UI or a solid backend, I like
                shipping stuff that feels good to use.
              </p>
              <p>
                When I’m not coding, you’ll probably find me doing absolutely
                nothing — unless I’m deep into some obscure history article,
                lost in a weird internet rabbit hole, or just enjoying a good
                cricket match and pretending it counts as exercise.
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
                  // My approach to development
                </div>
                <div className="mt-2">
                  <span className="text-code-keyword">const</span>{" "}
                  <span className="text-code-foreground">developer</span> = {"{"}
                </div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-code-string">"write_code"</span>:{" "}
                    <span className="text-code-keyword">true</span>,
                  </div>
                  <div>
                    <span className="text-code-string">"debug_code"</span>:{" "}
                    <span className="text-code-keyword">true</span>,
                  </div>
                  <div>
                    <span className="text-code-string">
                      "curious_mindset"
                    </span>
                    : <span className="text-code-keyword">true</span>,
                  </div>
                  <div>
                    <span className="text-code-string">
                      "breathe_and_blink"
                    </span>
                    : <span className="text-code-keyword">true</span>
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
