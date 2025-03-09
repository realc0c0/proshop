import Link from "next/link"
import { Shield, Lock, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fast, Secure, Reliable</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Secure Your Online Presence with Mr.Gnome VPN
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience high-speed connections, multi-device support, and complete privacy with our premium VPN
              service.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#plans">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  View Plans
                </Button>
              </Link>
              <Link href="https://t.me/MrGnomeVPNBot" target="_blank">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Telegram Bot
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Secure Browsing</h3>
                <p className="text-sm text-center text-muted-foreground">
                  End-to-end encryption for all your online activities
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">High Speed</h3>
                <p className="text-sm text-center text-muted-foreground">Optimized servers for maximum performance</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Privacy First</h3>
                <p className="text-sm text-center text-muted-foreground">No logs policy to protect your privacy</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 shadow-sm">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Global Access</h3>
                <p className="text-sm text-center text-muted-foreground">Access content from anywhere in the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

