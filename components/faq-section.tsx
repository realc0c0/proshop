"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our VPN service.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I connect to the VPN?</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Download the appropriate VPN client for your device</li>
                  <li>Install the client on your device</li>
                  <li>Enter the credentials you received after payment confirmation</li>
                  <li>Connect and enjoy secure browsing!</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How many devices can I connect simultaneously?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">The number of devices depends on your plan:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>1 Month Plan: Up to 3 devices</li>
                  <li>3 Months Plan: Up to 5 devices</li>
                  <li>6 Months Plan: Up to 10 devices</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How do I make a payment?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  You can make a payment through our Telegram bot. After selecting a plan, you'll receive payment
                  instructions including our bank account details. After making the payment, send a screenshot of your
                  receipt to the bot for verification.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What happens if I run out of data?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  If you run out of data before your plan expires, you can purchase additional data through our Telegram
                  bot. Alternatively, you can upgrade to a higher plan with more data allowance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is my connection secure?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we use industry-standard encryption protocols to ensure your connection is secure. Your data is
                  encrypted end-to-end, and we maintain a strict no-logs policy to protect your privacy.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

