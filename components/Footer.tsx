import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://facebook.com/greenbeacon1', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://instagram.com/greenbeacon_', icon: FaInstagram, label: 'Instagram' },
  { href: 'mailto:greenbeacon2022@gmail.com', icon: FaEnvelope, label: 'Email' },
]

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <footer className="flex flex-wrap justify-between items-center py-6 my-8 border-t border-gray-200">
        <small className="text-gray-500 mb-4 md:mb-0">
          © Copyright {new Date().getFullYear()}, Green Beacon Organization
        </small>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-gbo-green hover:text-green-600 transition-colors"
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}

