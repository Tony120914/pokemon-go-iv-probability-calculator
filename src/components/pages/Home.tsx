import { useEffect } from "react";
import Navbar from "../Navbar.js";
import EncounterSelect from "./home/EncounterSelect.js";
import IVSelect from "./home/IVSelect.js";

export default function Home() {

    // don't know why i have to do this for bootstrap tooltips to work
    useEffect(()=>{
        async function importBootstrap() {
            const bootstrap = await import("bootstrap/dist/js/bootstrap");
            // import { Tooltip } from 'bootstrap/dist/js/bootstrap';
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        }
        importBootstrap();
    },[])
    return (
    <>
        <header className='sticky-top'>
            <Navbar />
        </header>
        <div className='container-fluid mt-3'>
            <main>
                <EncounterSelect />
                <IVSelect />
            </main>
        </div>
    </>
    )
}
