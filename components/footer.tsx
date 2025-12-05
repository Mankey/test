import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/images/sgrp-logo.png"
              alt="SCRP Logo"
              width={150}
              height={75}
              className="object-contain mb-4"
            />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {
                "The premier FiveM roleplay experience. Join thousands of players in the most immersive street roleplay server."
              }
            </p>
          </div>

          <div>
            <h3 className="font-bebas text-xl mb-4 tracking-wide">{"Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {"About"}
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Features"}
                </a>
              </li>
              <li>
                <a href="#join" className="text-muted-foreground hover:text-primary transition-colors">
                  {"How to Join"}
                </a>
              </li>
              <li>
                <a href="#rules" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Rules"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-xl mb-4 tracking-wide">{"Community"}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/suncrest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {"Discord"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Forums"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Support"}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {"Shop"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{"© 2025 SCRP. All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              {"Privacy Policy"}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {"Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
