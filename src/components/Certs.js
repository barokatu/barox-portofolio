import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import vormehomepage from "../assets/projects/vorme-homepage.png"
import vormeadmin from "../assets/projects/vorme-admin.png"
import certificatebug from "../assets/projects/certificate-bug-bounty.png"
import nyrtea from "../assets/projects/nyrtea.png"
import selarasasrilanding from "../assets/projects/selarasasri.png"
import selarasasrimarket from "../assets/projects/selarasasri-property-market.png"
import viddown from "../assets/projects/viddown-proj.png"
import cosupershopping from "../assets/projects/co-supershopping.png" 
// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects Portofolio</h1>
            <p className="font-light text-gray-400">Here are some of my Projects Portofolio (except project in contract that include promise that forbidden to publish the project)</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Vorme Homepage" img={vormehomepage} issued="8grams Tech" desc="Jul 2022" />
                <CertCard name="Vorme CMS [Admin Dashboard]" img={vormeadmin} issued="8grams Tech" desc="Jun 2022" />
                <CertCard name="Vulnerability Report on Bhinneka.com" img={certificatebug} issued="Bhinneka.com" desc="Feb 2022" />
                <CertCard name="NYRTea Landing Page" img={nyrtea} issued="UKMGO Digital" desc="Mei 2021" />
                <CertCard name="Selaras Asri Landing Page" img={selarasasrilanding} issued="UKMGO Digital" desc="Apr 2021" />
                <CertCard name="Selaras Asri Property Market" img={selarasasrimarket} issued="UKMGO Digital" desc="Apr 2021" />
                <CertCard name="Multi Platform Video Downloader [Client-Side]" img={viddown} issued="Personal Project" desc="Mar 2021" />
                <CertCard name="Receipt Order Management on Supershopping" img={cosupershopping} issued="Supershopping.id" desc="Feb 2021" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
