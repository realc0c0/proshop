import Link from "next/link"
import { Download, Smartphone, Monitor, Apple } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const vpnClients = {
  android: "https://play.google.com/store/apps/details?id=uk.connectix.app",
  windows: "https://apps.irancdn.org/windows/Connectix-2.2.0.zip",
  mac: "https://apps.irancdn.org/mac/Connectix-2.2.0-Mac.zip",
}

export default function DownloadClients() {
  return (
    <section id="download" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Download VPN Clients</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get our VPN client for your device and start browsing securely in minutes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Smartphone className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Android</CardTitle>
                <CardDescription>For smartphones and tablets</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our Android client offers a seamless experience with easy one-tap connection and automatic server
                selection.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={vpnClients.android} target="_blank" className="w-full">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Monitor className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Windows</CardTitle>
                <CardDescription>For PC and laptops</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our Windows client features advanced settings, split tunneling, and automatic connection on startup.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={vpnClients.windows} target="_blank" className="w-full">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Apple className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>macOS</CardTitle>
                <CardDescription>For Mac computers</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our macOS client is optimized for performance with a native experience and menu bar controls.
              </p>
            </CardContent>
            <CardFooter>
              <Link href={vpnClients.mac} target="_blank" className="w-full">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

