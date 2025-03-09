"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VPNPlan {
  id: string
  name: string
  details: string
  price: string
  features?: string[]
}

export default function VPNPlans() {
  const [plans, setPlans] = useState<VPNPlan[]>([
    {
      id: "1m_30gb",
      name: "1 Month - 30GB",
      details: "30GB Traffic, 1 Month Duration, 3 Devices",
      price: "42,000",
      features: ["30GB Data Traffic", "1 Month Duration", "Connect up to 3 Devices", "24/7 Support", "Secure Browsing"],
    },
    {
      id: "3m_100gb",
      name: "3 Months - 100GB",
      details: "100GB Traffic, 3 Months Duration, 5 Devices",
      price: "110,000",
      features: [
        "100GB Data Traffic",
        "3 Months Duration",
        "Connect up to 5 Devices",
        "24/7 Support",
        "Secure Browsing",
        "Priority Support",
      ],
    },
    {
      id: "6m_unlimited",
      name: "6 Months Unlimited",
      details: "Unlimited Traffic, 6 Months Duration, 10 Devices",
      price: "200,000",
      features: [
        "Unlimited Data Traffic",
        "6 Months Duration",
        "Connect up to 10 Devices",
        "24/7 Support",
        "Secure Browsing",
        "Priority Support",
        "Dedicated IP (Optional)",
      ],
    },
  ])

  // Uncomment this to fetch from API when ready
  /*
  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await fetch('/api/configs')
        if (response.ok) {
          const data = await response.json()
          setPlans(data)
        }
      } catch (error) {
        console.error('Error fetching VPN plans:', error)
      }
    }
    
    fetchPlans()
  }, [])
  */

  return (
    <section id="plans" className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your VPN Plan</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the perfect plan for your needs with flexible options for traffic, duration, and devices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan) => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.details}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">Toman</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="https://t.me/MrGnomeVPNBot" target="_blank" className="w-full">
                  <Button className="w-full">Order Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

