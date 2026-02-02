import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/kids1.jpg"
            alt="Children learning"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="absolute top-[38%] left-0 px-[8%]">
          <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl text-white font-bold pb-5">
            Bringing hope to the future
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gboBrochure.pdf"
              download="gboBrochure"
              className="btn-secondary"
            >
              Get our brochure
            </Link>
            <Link href="/support" className="btn-primary">
              Support Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-[10%] text-center">
        <div className="my-5 mx-2.5">
          <h4 className="font-kanit text-xl md:text-2xl">
            We are <span className="text-gbo-green">Green Beacon</span>
          </h4>
          <p className="mt-2">
            Join us on our mission to bring to reality the change we want to see in our everyday lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Vision Card */}
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="h-1 bg-gbo-green mb-4 -mx-6 -mt-6 rounded-t-lg"></div>
            <h5 className="font-kanit text-lg mb-3">Our Vision</h5>
            <p className="text-gray-600 mb-4">
              We envisage a world where African communities contribute to global innovation and development.
            </p>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="h-1 bg-gbo-yellow mb-4 -mx-6 -mt-6 rounded-t-lg"></div>
            <h5 className="font-kanit text-lg mb-3">Our Mission</h5>
            <p className="text-gray-600 mb-4">
              To positively impact the lives of the youth in African societies.
            </p>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="bg-gbo-green py-16 px-[10%]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/volunteer.png"
              alt="Volunteer illustration"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="text-white space-y-4">
            <p>
              Challenge yourself, get campaigning, volunteer with us and let us set the trajectory of our generation and the next for the better. We can&apos;t do this without you.
            </p>
            <p>
              However you want to make a difference, we have the tips, ideas and resources you need to get started today.
            </p>
            <p>
              A donation from you could unlock the potential of entire communities with access to educational material and resources.
            </p>
            <p>
              It is people like you that help change the world everyday.
            </p>
            <Link href="/support" className="btn-dark w-full text-center block mt-6">
              Support Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

