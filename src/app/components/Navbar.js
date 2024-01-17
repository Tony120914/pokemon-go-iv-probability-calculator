
export default function Navbar({  }) {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary mb-2">
                <div className="container-fluid">
                    <NavbarBrand name={'Pokemon GO IV Probability Calculator'} />
                    <NavbarToggler target={'navbarSupportedContent'} />
                    <NavbarButtons id={'navbarSupportedContent'} buttons= {[
                        <a href='https://ko-fi.com/E1E06BU7C' target='_blank' key='kofi' className="ms-auto"><img height='36' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>,
                        <a href="https://github.com/Tony120914/pokemon-go-iv-probability-calculator" target='_blank' key='source code' className="btn btn-outline-light ms-auto" role="button" aria-disabled="true">Source Code</a>
                    ]}/>
                </div>
            </nav>
        </>
    )
}

function NavbarBrand({ name }) {
    return (
        <a className="navbar-brand" href=''>{name}</a>
    )
}

function NavbarToggler({ target }) {
    return (
        <button className="navbar-toggler mb-2 mt-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#${target}`} aria-controls={target} aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}

function NavbarButtons({ id, buttons }) {
    return (
        <div className="collapse navbar-collapse" id={id}>
            <div className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0 gap-2 user-select-none">
                {buttons}
            </div>
        </div>
    )
}