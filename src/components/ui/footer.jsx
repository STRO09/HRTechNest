import { Input } from "@/components/ui/input";
import { Button } from "./button";
import Link from "next/link";

export default function Footershadcn() {
  return (
    <section className="w-full py-16 bg-zinc-900 dark:bg-zinc-900 flex items-center justify-center">
      <div className="container px-6 md:px-8 flex flex-col items-center text-center space-y-8 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
          Stay Connected
        </h2>
        <p className="text-zinc-100 md:text-lg dark:text-zinc-300">
          Subscribe to our newsletter and follow us on social media.
        </p>

        <form className="flex flex-col items-center w-full max-w-md space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 text-zinc-900 bg-white"
          />
          <Button
            type="submit"
            variant="ghost"
            className="text-white border-white px-6 py-2"
          >
            Subscribe
          </Button>
        </form>

        <div className="flex justify-center space-x-6 pt-4">
          <SocialLink href="#" ariaLabel="Facebook page" Icon={FacebookIcon} />
          <SocialLink href="#" ariaLabel="Twitter profile" Icon={TwitterIcon} />
          <SocialLink
            href="#"
            ariaLabel="Instagram profile"
            Icon={InstagramIcon}
          />
          <SocialLink
            href="#"
            ariaLabel="LinkedIn profile"
            Icon={LinkedinIcon}
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, ariaLabel, Icon }) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="text-white hover:text-zinc-400 transition"
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
