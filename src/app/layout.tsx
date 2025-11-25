import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./globals.css";

export interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

export const mySocialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sajidhasan007",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sajid007/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/sajidhasan1997/",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Sajid Hasan | Software Engineer & React Developer",
  description:
    "Md Sajid Hasan - Software Engineer & Web Developer specializing in the React ecosystem. Explore my projects and portfolio.",
  keywords: [
    "Md Sajid Hasan",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "Best developers in bangladesh",
    "Best React Developer in Bangladesh",
    "সাজিদ হাসান",
    "মো: সাজিদ হাসান",
    "কাপাসিয়া",
    "গাজীপুর",
    "Most Handsome boy in Kapasia",
    "Most hadsome boy in Gazipur",
    "Most Honest man in kapasia gazipur",
  ],
  authors: [{ name: "Md Sajid Hasan" }],

  openGraph: {
    title: "Md Sajid Hasan | Software Engineer & React Developer",
    description:
      "Explore the portfolio and projects of Md Sajid Hasan, a professional software engineer and React developer.",
    url: "https://mdsajidhasan.com",
    type: "website",
    images: [
      {
        url: "/sajid_hasan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Sajid Hasan | Software Engineer & React Developer",
    description: "Explore my portfolio and projects in the React ecosystem.",
    images: ["/sajid_hasan.jpg"],
  },
  icons: {
    icon: "/sajid_hasan.jpg",
    apple: "/sajid_hasan.jpg",
    shortcut: "/sajid_hasan.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex text-white">
        <div className="bg-black w-12 h-screen sticky top-0 hidden md:block">
        </div>
        <div className="w-full bg-[#232323]">
          <div className="w-full h-12 flex justify-between items-center p-2 sticky z-50 top-0 bg-[#1a1818]/80">
            <div className="flex gap-2">
              {mySocialLinks.map((item: SocialLink) => (
                <Link
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  className="text-2xl hover:text-primary"
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            <Link href={"/CV_Sajid_Hasan.pdf"} target="_blank">
              <div className="px-4 py-2 rounded-lg text-primary border border-primary hover:bg-primary hover:text-black ">
                My Resume
              </div>
            </Link>
          </div>
          <main className="main-container">{children}</main>
          <div className="mt-28 text-white"></div>
        </div>
      </div>
      </body>
    </html>
  );
}


