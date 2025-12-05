"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [playerCount, setPlayerCount] = useState<number | null>(null)
  const [discordMembers, setDiscordMembers] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch("https://servers-frontend.fivem.net/api/servers/single/oqg7l7")
        const data = await response.json()
        setPlayerCount(data.Data?.clients || 0)
      } catch (error) {
        console.error("[v0] Failed to fetch player count:", error)
        setPlayerCount(null)
      } finally {
        setIsLoading(false)
      }
    }

    const fetchDiscordMembers = async () => {
      try {
        const response = await fetch("/api/discord-members")
        const data = await response.json()
        setDiscordMembers(data.memberCount)
      } catch (error) {
        console.error("[v0] Failed to fetch Discord members:", error)
        setDiscordMembers(null)
      }
    }

    fetchPlayerCount()
    fetchDiscordMembers()
    const interval = setInterval(() => {
      fetchPlayerCount()
      fetchDiscordMembers()
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/sgrp-banner.png" alt="SCRP Banner" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Red light effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
              {"Suncrest Roleplay"}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas tracking-wider mb-6 text-balance">
            {"Welcome to "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(185,28,28,0.8)]">{"SCRP"}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            {
              "Experience the most immersive street roleplay on FiveM. Build your empire, make connections, and dominate the city."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 group"
              asChild
            >
              <a href="https://servers.fivem.net/servers/detail/oqg7l7" target="_blank" rel="noopener noreferrer">
                {"Connect Now"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/10 font-bold text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="https://discord.gg/suncrest" target="_blank" rel="noopener noreferrer">
                {"View Discord"}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bebas text-primary mb-1">
                {isLoading ? "..." : playerCount !== null ? `${playerCount}` : "N/A"}
              </div>
              <div className="text-sm text-muted-foreground">{"Players Online"}</div>
            </div>

            <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bebas text-primary mb-1">
                {discordMembers !== null ? discordMembers.toLocaleString() : "..."}
              </div>
              <div className="text-sm text-muted-foreground">{"Discord Members"}</div>
            </div>

            <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bebas text-primary mb-1">{"99.9%"}</div>
              <div className="text-sm text-muted-foreground">{"Uptime"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
