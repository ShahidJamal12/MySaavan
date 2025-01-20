import NavBar from "../SideComponents/NavBar"
import LeftSection from "../SideComponents/LeftSection"
import RightSection from "../SideComponents/RightSection"
const LandingPage = () => {
  return (
    <main className="bg-slate-50">
      <NavBar/>
      <div className="w-screen flex justify-center items-start relative top-16">
        <LeftSection/>
        <RightSection/>
      </div>
    </main>
  )
}

export default LandingPage