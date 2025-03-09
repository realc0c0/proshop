"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Mr.Gnome VPN
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#plans" className="text-sm font-medium hover:text-primary">
            Plans
          </Link>
          <Link href="#download" className="text-sm font-medium hover:text-primary">
            Download
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Support
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://t.me/MrGnomeVPNBot" target="_blank">
            <Button>Telegram Bot</Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link href="#plans" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Plans
            </Link>
            <Link
              href="#download"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link href="https://t.me/MrGnomeVPNBot" target="_blank" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Telegram Bot</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

