import type React from "react"
import { NavLink } from "react-router"

interface NavBarI {
    back?: React.ReactElement;
}
export default function Navbar( { back: backButton }: NavBarI ) {
    return (
    <>
        <nav className="navbar navbar-expand-md bg-dark-subtle">
            <div className="container-fluid">
                {backButton}
                <Brand image={'favicon.ico'} name={'Pokemon GO IV Probability Calculator'} />
                <Buttons buttons= {[
                    <RouteButton key={'support'}
                        type={'btn-outline-danger'}
                        text={'Support Me'}
                        iconName={'bi-suit-heart-fill'}
                        to={'/support'}
                    />,
                    <LinkButton key={'source-code'}
                        type={'btn-outline-light'}
                        text={'Source Code'}
                        iconName={'bi-github'}
                        url={'https://github.com/Tony120914/pokemon-go-iv-probability-calculator'}
                    />
                ]}/>
            </div>
        </nav>
    </>
    )
}

function Brand({ image, name }: { image: string, name: string}) {
    return (
    <NavLink to='/' end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } style={{ textDecoration:'none' }} viewTransition>
        <span className="navbar-brand user-select-none d-flex align-items-center">
            <img src={image} width="40" height="40" className='.d-inline-block mx-2'/>
            {name}
        </span>
    </NavLink>
    )
}

function Buttons({ buttons }: { buttons: React.ReactElement[] }) {
    const navbarTogglerId = 'navbarButtons';
    return (
    <>
        <button className="navbar-toggler mb-2 mt-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#${navbarTogglerId}`} aria-controls={navbarTogglerId} aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={navbarTogglerId}>
            <div className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0 gap-3 user-select-none">
                {buttons}
            </div>
        </div>
    </>
    );
}

function LinkButton({ type, text, iconName, url }: { type: string, text: string, iconName: string, url: string }) {
    return (
    <a href={url} className={`btn ${type} ms-auto pt-2`} role="button" target='_blank' aria-disabled="true">
        <i className={`bi ${iconName} me-2`} style={{'fontSize':'16px'}}></i>
        {text}
    </a>
    );
}

function RouteButton({ type, text, iconName, to }: { type: string, text: string, iconName: string, to: string }) {
    return (
    <NavLink to={to} end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } className="text-end" style={{ textDecoration:'none' }} viewTransition>
        <button className={`btn ${type} ms-auto pt-2`} role="button" aria-disabled="true">
            <i className={`bi ${iconName} me-2`} style={{'fontSize':'16px'}}></i>
            {text}
        </button>
    </NavLink>
    );
}
