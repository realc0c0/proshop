import VPNPlans from "@/components/vpn-plans"
import HeroSection from "@/components/hero-section"
import DownloadClients from "@/components/download-clients"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VPNPlans />
      <DownloadClients />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

