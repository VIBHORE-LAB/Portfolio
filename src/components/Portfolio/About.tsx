import { User } from "lucide-react";
const About = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                About Me
              </div>
              <h2 className="text-5xl font-bold text-foreground">
A little bit of me                <br />
                <span className="text-muted-foreground">for the starters...</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
I build things for the web — sometimes for fun, sometimes for work, always with intention. I’m a full stack developer who cares about clean design, logic and smooth user experiences, and writing code that doesn’t make me cringe later (though sometimes it does). Whether it’s a slick UI or a solid backend, I like shipping stuff that feels good to use.



              </p>
              <p>
When I’m not coding, you’ll probably find me doing absolutely nothing — unless I’m deep into some obscure history article, lost in a weird internet rabbit hole, or just enjoying a good cricket match and pretending it counts as exercise.



              </p>
            </div>
           
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative bg-gradient-card p-8 rounded-2xl border border-border shadow-xl">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
        <div className="mt-8 font-mono text-sm">
  <div className="text-code-comment">// My approach to development</div>
  <div className="mt-2">
    <span className="text-code-keyword">const</span> <span className="text-code-foreground">developer</span> = {'{'}
  </div>
  <div className="ml-4 space-y-1">
    <div><span className="text-code-string">"write_code"</span>: <span className="text-code-keyword">true</span>,</div>
    <div><span className="text-code-string">"debug_code"</span>: <span className="text-code-keyword">true</span>,</div>
    <div><span className="text-code-string">"curious_mindset"</span>: <span className="text-code-keyword">true</span>,</div>
    <div><span className="text-code-string">"breathe and blink"</span>: <span className="text-code-keyword">true</span></div>
  </div>
  <div>{'};'}</div>
</div>

            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-primary/20 rotate-45 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;