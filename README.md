# Green Beacon Organization Website

A modern Next.js website for Green Beacon Organization - a non-profit body in Ghana focused on improving access to education and empowering youth in African communities.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
bun run build

# Start production server
bun run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── projects/
│   │   └── page.tsx        # Projects gallery page
│   └── support/
│       └── page.tsx        # Support/Donate page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── public/
│   ├── images/             # Static images
│   │   ├── flagship/       # Project gallery images
│   │   └── ...             # Team photos, icons, etc.
│   └── gboBrochure.pdf     # Downloadable brochure
└── ...config files
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, vision/mission, and CTA |
| `/about` | Organization info, values, and team members |
| `/projects` | Photo gallery of projects with lightbox |
| `/contact` | Contact form and contact information |
| `/support` | Donation info and volunteering opportunities |

## Brand Colors

- **Primary Green**: `#28a745`
- **Accent Yellow**: `#ffc107`

## Fonts

- **Oswald**: Hero headings
- **Kanit**: Section headings and brand text
- **Poppins**: Body text

## Contact

- **Email**: greenbeacon2022@gmail.com
- **Facebook**: [facebook.com/greenbeacon1](https://facebook.com/greenbeacon1)
- **Instagram**: [@greenbeacon_](https://instagram.com/greenbeacon_)

---

© 2022 Green Beacon Organization
