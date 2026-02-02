'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaHandHoldingHeart, FaUsers, FaBullhorn, FaUniversity, FaMobileAlt, FaCopy, FaArrowRight } from 'react-icons/fa'

export default function SupportPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gbo-green via-emerald-600 to-teal-700" />
          <div className="absolute inset-0 bg-[url('/images/kids1.jpg')] bg-cover bg-center opacity-20" />
          {/* Decorative shapes - contained within bounds */}
          <div className="absolute top-20 right-0 w-64 h-64 bg-gbo-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="text-center max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-gbo-yellow text-sm font-medium mb-6">
              Make a Difference Today
            </span>
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Your Support Changes Lives
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              &quot;If there be any truer measure of a man than by what he does, it must be by what he gives.&quot;
              <span className="block mt-2 text-gbo-yellow font-medium">― Robert South</span>
            </p>
          </div>
        </div>

        {/* Wave divider - hidden on mobile, visible on md+ */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[80px] block">
            <path d="M0 100C240 100 360 30 600 30C840 30 960 70 1200 70C1320 70 1400 90 1440 100V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 px-6 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-kanit text-3xl md:text-4xl text-gray-900 mb-4">Ways You Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Green Beacon Organization depends on the generosity of supporters like you to fund projects and transform African communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Donate Card */}
            <div className="group relative bg-gradient-to-br from-gbo-green to-emerald-600 rounded-2xl p-8 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaHandHoldingHeart className="w-8 h-8" />
                </div>
                <h3 className="font-kanit text-2xl mb-3">Make a Donation</h3>
                <p className="text-white/80 mb-6">
                  Every contribution unlocks potential and provides educational resources to communities in need.
                </p>
                <a href="#donate" className="inline-flex items-center gap-2 text-gbo-yellow font-semibold hover:gap-3 transition-all">
                  Donate Now <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gbo-green/30 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gbo-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-gbo-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gbo-green/20 transition-all">
                  <FaUsers className="w-8 h-8 text-gbo-green" />
                </div>
                <h3 className="font-kanit text-2xl text-gray-900 mb-3">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our team of passionate individuals making real impact in communities across Ghana.
                </p>
                <a href="#volunteer" className="inline-flex items-center gap-2 text-gbo-green font-semibold hover:gap-3 transition-all">
                  Join Us <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Fundraise Card */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-gbo-yellow/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gbo-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-gbo-yellow/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gbo-yellow/30 transition-all">
                  <FaBullhorn className="w-8 h-8 text-gbo-yellow" />
                </div>
                <h3 className="font-kanit text-2xl text-gray-900 mb-3">Fundraise</h3>
                <p className="text-gray-600 mb-6">
                  Organize events or activities to raise funds and spread awareness for our mission.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
                  Get Started <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section id="donate" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gbo-green/10 rounded-full text-gbo-green text-sm font-medium mb-4">
              Secure & Easy
            </span>
            <h2 className="font-kanit text-3xl md:text-4xl text-gray-900 mb-4">Donation Methods</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose your preferred method to support our mission. Every donation, big or small, makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Transfer Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-gbo-green to-emerald-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaUniversity className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-kanit text-xl text-white">Bank Transfer</h3>
                    <p className="text-white/70 text-sm">Direct bank deposit</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Bank</span>
                  <span className="font-semibold text-gray-900">Access Bank GH</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Branch</span>
                  <span className="font-semibold text-gray-900">Community 1</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Account Name</span>
                  <span className="font-semibold text-gray-900 text-right">Green Beacon Organization</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Account No.</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-gbo-green text-lg">1026000004038</span>
                    <button 
                      className="p-1.5 text-gray-400 hover:text-gbo-green hover:bg-gbo-green/10 rounded transition-colors"
                      title="Copy account number"
                      onClick={() => navigator.clipboard.writeText('1026000004038')}
                    >
                      <FaCopy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500">Swift Code</span>
                  <span className="font-mono font-semibold text-gray-900">ABNGGHAC</span>
                </div>
              </div>
            </div>

            {/* Mobile Money Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaMobileAlt className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-kanit text-xl text-white">Mobile Money</h3>
                    <p className="text-white/70 text-sm">MTN Ghana</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Type</span>
                  <span className="font-semibold text-gray-900">Merchant Account</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Network</span>
                  <span className="font-semibold text-yellow-600">MTN GH</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Account Name</span>
                  <span className="font-semibold text-gray-900 text-right">Green Beacon Organization</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500">Number</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-yellow-600 text-lg">054 070 3122</span>
                    <button 
                      className="p-1.5 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded transition-colors"
                      title="Copy number"
                      onClick={() => navigator.clipboard.writeText('0540703122')}
                    >
                      <FaCopy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500 text-center">
                    Dial <span className="font-mono font-semibold">*170#</span> and select &quot;MoMo Pay&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="relative py-24 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[url('/images/reach.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 md:w-96 h-64 md:h-96 bg-gbo-green/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 md:w-96 h-64 md:h-96 bg-gbo-yellow/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-gbo-yellow text-sm font-medium mb-6">
            Join Our Team
          </span>
          <h2 className="font-kanit text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Become a Volunteer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Green Beacon welcomes both local and international individuals with the willingness, energy, and skills to join our mission. Help us run projects and initiatives that touch lives and create lasting impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-gbo-green/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-gbo-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Flexible Hours</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-gbo-green/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-gbo-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Make Real Impact</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-gbo-green/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-gbo-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Join a Community</span>
            </div>
          </div>

          <Link
            href="https://forms.gle/npwumH9xu9QyssCaA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gbo-yellow text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-all hover:scale-105 shadow-xl text-lg"
          >
            Apply to Volunteer
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/support-us.png"
            alt="Support illustration"
            width={200}
            height={150}
            className="mx-auto mb-8 opacity-80"
          />
          <h3 className="font-kanit text-2xl md:text-3xl text-gray-900 mb-4">
            Together, We Can Do More
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every act of generosity—whether time, talent, or treasure—brings us closer to a world where every African youth has access to quality education and opportunities to thrive.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
