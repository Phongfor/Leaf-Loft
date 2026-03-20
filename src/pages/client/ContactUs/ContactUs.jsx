import Header from "@/components/common/Header/Header";
import ContactCardList from "./components/ContactCardList/ContactCardList";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import Footer from "@/components/common/Footer/Footer";
import CommonQuestions from "./components/CommonQuestions/CommonQuestions";


function ContactUs() {
    return (
       <>
       <Header/>
        <div className='min-h-screen bg-[#f0f0eb] px-6 py-16'>
            <div className='max-w-4xl mx-auto flex flex-col gap-12 mt-12'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    <ContactHero />
                    <ContactForm />
                </div>

                <CommonQuestions/>

                <ContactCardList />

            </div>
        </div>
       <Footer/>
       </>
    );
}

export default ContactUs;