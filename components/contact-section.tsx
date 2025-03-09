import Link from "next/link"
import { Mail, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need Help?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get help via email</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Send us an email and we'll get back to you within 24 hours.</p>
              <Link href="mailto:bodapoor5@gmail.com">
                <Button variant="outline" className="w-full">
                  bodapoor5@gmail.com
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Telegram Support</CardTitle>
                <CardDescription>Get instant help via Telegram</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Contact our support team directly on Telegram for faster assistance.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="https://t.me/firstgnome" target="_blank" className="w-full">
                  <Button className="w-full">Contact @firstgnome</Button>
                </Link>
                <Link href="https://t.me/MrGnomeVPNBot" target="_blank" className="w-full">
                  <Button className="w-full">Use Telegram Bot</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

