'use client';
import Link from "next/link"
import Image from "next/image"
import posthog from "posthog-js";

const Navbar = () => {
  const handleNavClick = (linkName: string, destination: string) => {
    posthog.capture('nav_link_clicked', {
      link_name: linkName,
      destination: destination,
      nav_section: 'main_navbar',
    });
  };

  return (
    <header>
        <nav>
            <Link href="/" onClick={() => handleNavClick('logo', '/')}>
            <Image src={'/icons/logo.png'} alt="Logo" width={24} height={24}/>
            <p>DevEvents</p>
            </Link>
            <ul>
                <Link href={'/'} onClick={() => handleNavClick('Home', '/')}>Home</Link>
                <Link href={'/'} onClick={() => handleNavClick('Events', '/')}>Events</Link>
                <Link href={'/'} onClick={() => handleNavClick('Create Events', '/')}>Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar