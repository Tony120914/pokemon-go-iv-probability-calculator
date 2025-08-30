import { useEffect } from "react";
import Navbar from "../Navbar.js";
import Calculator from "./home/Calculator.js";

export default function Home() {
    useEffect(()=>{
        // i don't know why i have to do this for bootstrap tooltips to work
        (async () => {
            const bootstrap = await import("bootstrap");
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        })();
    },[])

    return (
    <>
        <header className='sticky-top'>
            <Navbar />
        </header>
        <div className='container mt-3'>
            <main>
                <Calculator />
            </main>
        </div>
    </>
    )
}
