import BackButton from "../BackButton.js";
import Navbar from "../Navbar.js";
import Button from "./support/Button.js";
import Gratitude from "./support/Gratitude.js";
import Option from "./support/Option.js";

export default function Support({ }) {
    return (
    <>
        <header className='sticky-top'>
            <Navbar backButton={<BackButton to='/'/>} />
        </header>
        <div className='container mt-3'>
            <main className="text-center">
                <Gratitude />
                <Option title={'Donate'} icon={'bi-heart'}
                    buttons={[
                        <Button key={'patreon'}
                            url={'https://patreon.com/ToekneeL'}
                            name="Patreon"
                            image={'assets/patreon-logo.svg'}
                        />,
                        <Button key={'ko-fi'}
                            url={'https://ko-fi.com/toeknee'}
                            name="Ko-fi"
                            image={'assets/ko-fi-logo.svg'}
                        />
                    ]}
                />
                <hr className="mx-auto my-4" />
                <Option title={'Check out my Discord bot!'} icon={'bi-discord'}
                    buttons={[
                        <Button key={'beldum-bot'}
                            url={"https://tony120914.github.io/beldum-bot-site/"}
                            name="Beldum-Bot"
                            image={"assets/shiny-beldum-bw.gif"}
                        />
                    ]}
                />
            </main>
        </div>
    </>
    );
}
