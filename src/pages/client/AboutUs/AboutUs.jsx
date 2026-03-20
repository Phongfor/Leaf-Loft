import Header from "@/components/common/Header/Header";
import AboutCTA from "./components/AboutCTA/AboutCTA";
import AboutHero from "./components/AboutHero/AboutHero";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import OurStory from "./components/OurStory/OurStory";
import OurValues from "./components/OurValues/OurValues";
import Footer from "@/components/common/Footer/Footer";


function AboutUs() {
    return (
        <>
        <Header/>
        <main className='bg-[#f6f8f5] text-gray-900 mt-12'>
            <AboutHero />
            <OurStory />
            <OurValues />
            <MeetTheTeam />
            <AboutCTA />
        </main>
        <Footer/>
        </>
    );
}

export default AboutUs;