import { Card } from "@/components/ui/card"
import { Car, Shield, Briefcase, Home, Heart, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Custom Vehicles",
    description: "Over 200+ custom vehicles including imports, luxury cars, and modified rides.",
  },
  {
    icon: Shield,
    title: "Active Staff",
    description: "Professional staff team available 24/7 to ensure fair play and quality roleplay.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Economy",
    description: "Realistic economy system with legal and illegal jobs. Build your fortune your way.",
  },
  {
    icon: Home,
    title: "Housing System",
    description: "Purchase and customize apartments, houses, and businesses across the city.",
  },
  {
    icon: Heart,
    title: "Serious RP",
    description: "Whitelist server with serious roleplay standards. Quality over quantity.",
  },
  {
    icon: Gamepad2,
    title: "Custom Scripts",
    description: "Unique in-house scripts and systems you won't find on any other server.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-balance">
            {"Why Choose "}
            <span className="text-primary">{"SCRP"}</span>
            {"?"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Experience the most feature-rich and immersive roleplay server in the FiveM community."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur-sm border-primary/20 p-6 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(185,28,28,0.2)] group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-bebas tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
