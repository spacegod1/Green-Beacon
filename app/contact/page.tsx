'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const socialLinks = [
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://facebook.com/greenbeacon1', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://instagram.com/greenbeacon_', icon: FaInstagram, label: 'Instagram' },
  { href: 'mailto:greenbeacon2022@gmail.com', icon: FaEnvelope, label: 'Email' },
]

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone',
    details: ['+ (233) 554 359 911', '+ (233) 509 567 295'],
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    details: ['greenbeacon2022@gmail.com'],
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    details: ['Epirede Ln. GB - 074 - 6495', 'Community 7, Tema - Ghana'],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gbo-green via-emerald-600 to-teal-700" />
          <div className="absolute inset-0 bg-[url('/images/kids1.jpg')] bg-cover bg-center opacity-15" />
          {/* Decorative shapes */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-gbo-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-gbo-yellow text-sm font-medium mb-4">
              We&apos;d Love to Hear From You
            </span>
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-white/80 text-lg">
              Have questions about our projects or want to get involved? Reach out to us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info Column - shows second on mobile, first on desktop */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="font-kanit text-2xl md:text-3xl text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gbo-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gbo-green/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gbo-green" />
                    </div>
                    <div>
                      <h3 className="font-kanit text-lg text-gray-900">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-kanit text-lg text-gray-900 mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gbo-green/10 rounded-full flex items-center justify-center text-gbo-green hover:bg-gbo-green hover:text-white transition-all duration-300"
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column - shows first on mobile, second on desktop */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gbo-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10 text-gbo-green" />
                    </div>
                    <h3 className="font-kanit text-2xl text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-gbo-green font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbo-green/50 focus:border-gbo-green transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbo-green/50 focus:border-gbo-green transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbo-green/50 focus:border-gbo-green transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gbo-green/50 focus:border-gbo-green transition-all resize-none"
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gbo-green text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gbo-green/25 hover:shadow-xl hover:shadow-gbo-green/30"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
