"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ExpediaBanner } from "@/components/expedia-banner"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await submitContactForm(formData)

    if (result.success) {
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      alert("Failed to submit form. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Contact Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Have a question or need assistance? We're here to help!
              </p>
            </div>

            <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted/50 border border-border rounded-md p-4 text-sm text-muted-foreground">
                      This form is protected by reCAPTCHA and the Google Privacy Policy applies.
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Thank You!</h2>
                  <p className="text-muted-foreground">
                    Your form has been submitted successfully. You will be contacted within 7 working days.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another Message
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
