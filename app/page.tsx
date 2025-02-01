import { StaffProfiles } from "./components/staff-profiles"

export const metadata = {
  title: "BeluStaffWeb",
  description: "BeluGANG Staff Profile",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <StaffProfiles />
    </main>
  )
}

