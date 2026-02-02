'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaShieldAlt, FaAward, FaUsers, FaRocket, FaHeart, FaLightbulb, FaHandshake, FaGem } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt, HiUserGroup, HiTrendingUp } from 'react-icons/hi'

const tabs = [
  {
    id: 'engage',
    label: 'To Engage',
    content: `The cavernous benefits of local and foreign engagements and how it contributes to development and growth is understood by Green Beacon Organization. Thus, we seek to engage stakeholders, community members and volunteers through; informative events, fundraising, volunteerism, obligatory campaigns and projects in order to be operative and attain positive impact on society.`,
  },
  {
    id: 'educate',
    label: 'To Educate',
    content: `Our distinguished organization believes education is the passport to the future, just as the saying goes, "Tomorrow belongs to those who prepare for it, today." We seek to ensure that our projects are informative and creative both in delivery and content, to relate with all age groups. Also, online and physical venue programs / workshops will be held in order to properly disseminate vital information across with the aim of achieving development in our respective societies.`,
  },
  {
    id: 'empower',
    label: 'To Empower',
    content: `Green beacon trusts that through engaging and educating the youth in our societies, we are able to empower them. We aim to provide access to key information, opportunity and developmental schemes to motivate, inspire and bring out the best in the youth across the country to help excel their personal and professional journey.`,
  },
]

const values = [
  { 
    icon: FaGem, 
    title: 'Integrity', 
    description: 'Transparency & honesty in all we do',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    glow: 'shadow-cyan-500/50',
    delay: '0s'
  },
  { 
    icon: HiSparkles, 
    title: 'Quality Service', 
    description: 'Excellence in every initiative',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    glow: 'shadow-amber-500/50',
    delay: '0.1s'
  },
  { 
    icon: HiUserGroup, 
    title: 'Teamwork', 
    description: 'United for greater impact',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'shadow-emerald-500/50',
    delay: '0.2s'
  },
  { 
    icon: HiTrendingUp, 
    title: 'Growth', 
    description: 'Continuous improvement & learning',
    gradient: 'from-fuchsia-400 via-purple-500 to-indigo-500',
    glow: 'shadow-fuchsia-500/50',
    delay: '0.3s'
  },
]

const team = [
  {
    image: '/images/paduu1.jpg',
    name: 'Edmund Kwaku Sesu Ampadu',
    role: 'Founder & CEO',
    bio: 'Edmund is a creative business thinker and an educational activist who is actively engaged in the projections of strategies and also utilizes these strategies to effect justice-oriented change.',
    link: 'https://www.linkedin.com/in/edmund-ampadu-a72625253/',
  },
  {
    image: '/images/stone.jpg',
    name: 'Livingstone Adjei Mensah',
    role: 'Operations Officer',
    bio: 'Livingstone is a creative industrial designer equipped with innovative skills to help effect change in the society.',
    link: 'https://www.instagram.com/l_i_v_i_n_g_s_t_o_n_e/',
  },
  {
    image: '/images/mike1.jpg',
    name: 'Michael Asiedu Johnson',
    role: 'Technical Lead',
    bio: 'Michael is a seasoned software engineer and editor, who is passionate about community, service and uplifting others.',
    link: 'https://www.linkedin.com/in/michael-johnson-175471133',
  },
  {
    image: '/images/dorcas1.jpg',
    name: 'Dorcas Henrietta Larsey',
    role: 'Secretary',
    bio: 'Dorcas is a detail-oriented Administrative Assistant and Customer service representative who has a plethora of experience with managing and serving people.',
    link: 'https://www.linkedin.com/in/dorcas-henrietta-larsey-010a081a4',
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('engage')

  return (
    <>
      {/* Title Section */}
      <section className="relative">
        <Navbar />

        {/* About Us Header */}
        <div className="bg-gbo-green py-16 px-5">
          <h2 className="font-kanit text-3xl md:text-4xl text-white mb-4">About Us</h2>
          <p className="text-white md:pr-[25%] leading-relaxed">
            Green Beacon is a non-profit body in Ghana set-up in 2022 with the main goal to improve access to education in our society, impact lives with public education, to help the youth realise and revive their hidden talents.
          </p>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-8 px-[5%] md:px-[15%]">
        <h3 className="font-kanit text-2xl my-8">What we seek to achieve</h3>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gbo-green text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <p key={tab.id} className="text-gray-700 leading-relaxed">
                      {tab.content}
                    </p>
                  )
              )}
            </div>
          </div>

          <div>
            <Image
              src="/images/reach.jpg"
              alt="Community outreach"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Values Section - Dynamic & Exciting */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gbo-green/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gbo-green/20 backdrop-blur-sm border border-gbo-green/30 rounded-full text-gbo-green text-sm font-medium mb-4 animate-pulse">
              What Drives Us
            </span>
            <h3 className="font-oswald text-4xl md:text-5xl text-white mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gbo-green via-emerald-400 to-cyan-400">Values</span>
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              The principles that guide every decision we make and every life we touch
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative"
                style={{ animationDelay: value.delay }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 group-hover:duration-200`} />
                
                {/* Card */}
                <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg ${value.glow} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center`}>
                    <value.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Text */}
                  <h4 className="font-kanit text-xl text-white text-center mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm text-center group-hover:text-gray-400 transition-colors">
                    {value.description}
                  </p>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-1/2 transition-all duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-[5%] text-center">
        <h3 className="font-kanit text-2xl mb-8">Meet the team</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <Image
                src={member.image}
                alt={member.name}
                width={288}
                height={288}
                className="w-72 h-72 mx-auto rounded-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
              <Link
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-gbo-green hover:underline font-kanit text-lg"
              >
                {member.name}
              </Link>
              <small className="text-gray-500">{member.role}</small>
              <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

