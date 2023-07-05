import { LandingFooter } from "@/components/organisms/LandingFooter"
import { Navbar } from "./Navbar"

export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <Navbar/>
      {children}
      <LandingFooter/>
      </>
    )
  }
  