'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Generate array of project images
const projectImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/images/flagship/prj${i + 1}.jpg`,
  alt: `Project photo ${i + 1}`,
}))

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      {/* Title Section */}
      <section className="relative">
        <Navbar />
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-[5%] right-[5%] text-white text-3xl font-bold hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <Image
            src={selectedImage}
            alt="Full size project image"
            width={800}
            height={600}
            className="max-w-[80%] max-h-[80vh] object-contain"
          />
        </div>
      )}

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="font-kanit text-3xl text-center mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projectImages.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

