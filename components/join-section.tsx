import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Join Discord",
    description: "Connect with our community and get whitelisted.",
  },
  {
    number: "02",
    title: "Read Rules",
    description: "Familiarize yourself with our server rules and guidelines.",
  },
  {
    number: "03",
    title: "Complete Application",
    description: "Fill out your character application and wait for approval.",
  },
  {
    number: "04",
    title: "Start Playing",
    description: "Once approved, connect to the server and begin your journey.",
  },
]

export function JoinSection() {
  return (
    <section id="join" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-balance">
            {"How to "}
            <span className="text-primary">{"Join"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Follow these simple steps to start your roleplay journey on SCRP."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur-sm border-primary/20 p-6 hover:border-primary/40 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-9xl font-bebas text-primary/5 leading-none group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="text-3xl font-bebas text-primary mb-3">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 font-bebas tracking-wide">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6" asChild>
            <a href="https://discord.gg/suncrest" target="_blank" rel="noopener noreferrer">
              {"Get Started Now"}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
