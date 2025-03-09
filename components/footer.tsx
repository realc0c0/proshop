import Link from "next/link"
import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Mr.Gnome VPN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              High-quality VPN service with fast connections, multi-device support, and 24/7 customer service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#plans" className="text-sm text-muted-foreground hover:text-primary">
                  VPN Plans
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-sm text-muted-foreground hover:text-primary">
                  Download Clients
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: bodapoor5@gmail.com</li>
              <li className="text-sm text-muted-foreground">Telegram: @firstgnome</li>
              <li>
                <Link
                  href="https://t.me/MrGnomeVPNBot"
                  target="_blank"
                  className="text-sm text-primary hover:underline"
                >
                  Telegram Bot
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mr.Gnome VPN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

