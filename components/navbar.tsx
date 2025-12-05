"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Image src="/images/sgrp-logo.png" alt="SCRP Logo" width={120} height={60} className="object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              {"About"}
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              {"Features"}
            </a>
            <a href="#join" className="text-foreground hover:text-primary transition-colors font-medium">
              {"How to Join"}
            </a>
            <a
              href="https://suncrest-rp.tebex.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {"Store"}
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6" asChild>
              <a href="https://discord.gg/suncrest" target="_blank" rel="noopener noreferrer">
                {"Join Now"}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                {"About"}
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
                {"Features"}
              </a>
              <a href="#join" className="text-foreground hover:text-primary transition-colors font-medium">
                {"How to Join"}
              </a>
              <a
                href="https://suncrest-rp.tebex.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {"Store"}
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold w-full" asChild>
                <a href="https://discord.gg/suncrest" target="_blank" rel="noopener noreferrer">
                  {"Join Now"}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
