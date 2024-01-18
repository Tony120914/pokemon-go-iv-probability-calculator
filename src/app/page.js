'use client';
import { useState, useEffect } from 'react';
import { Tooltip } from 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar';
import PresetIVsButton from './components/PresetIVsButton'
import IVsSelector from './components/IVsSelector'
import IVsTable from './components/IVsTable';


export default function Home() {

    // import bootstrap js
    // import bootstrap tooltips
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
    },[])

    const presetIVs = {
        wild : {text:'Wild', floor:[0,0,0], icon:'icons/wild.png'},
        weather : {text:'Wild (Weather Boosted)', floor:[4,4,4], icon:'icons/weather.png'},
        research : {text:'Research', floor:[10,10,10], icon:'icons/research.png'},
        egg : {text:'Egg Hatch', floor:[10,10,10], icon:'icons/egg.png'},
        raid : {text:'Raid (Non-Shadow)', floor:[10,10,10], icon:'icons/raid.png'},
        shadowRaid : {text:'Shadow Raid', floor:[6,6,6], icon:'icons/shadowRaid.png'},
        rocket : {text:'Rocket Grunt & Leader', floor:[0,0,0], icon:'icons/rocket.png'},
        giovanni : {text:'Giovanni', floor:[6,6,6], icon:'icons/giovanni.png'},
        pvp : {text:'Go Battle League', floor:[10,10,10], icon:'icons/pvp.png'},
        tradeGoodFriends : {text:'Trade (Good Friends)', floor:[1,1,1], icon:'icons/goodFriends.png'},
        tradeGreatFriends : {text:'Trade (Great Friends)', floor:[2,2,2], icon:'icons/greatFriends.png'},
        tradeUltraFriends : {text:'Trade (Ultra Friends)', floor:[3,3,3], icon:'icons/ultraFriends.png'},
        tradeBestFriends : {text:'Trade (Best Friends)', floor:[5,5,5], icon:'icons/bestFriends.png'},
        tradeLucky : {text:'Trade (Lucky)', floor:[12,12,12], icon:'icons/lucky.png'},
    }

    const [floor, setFloor] = useState([0,0,0]);
    const [tableIcon, setTableIcon] = useState('');
    const [tableTitle, setTableTitle] = useState('');

    // Auto-complete the selector with preset IVs after clicking button and
    // change table icon and table title to corresponding preset
    function handlePresetIVsButtonClick(presetIV) {
        setFloor(presetIV.floor);
        setTableIcon(presetIV.icon);
        setTableTitle(presetIV.text);
    }
    
    return (
        <>
            <Navbar />
            <main>
                <div>
                    <div className="container text-center">
                        <p className="text-center mt-4">How is the Pokemon encountered?</p>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.wild} onClick={() => handlePresetIVsButtonClick(presetIVs.wild)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.weather} onClick={() => handlePresetIVsButtonClick(presetIVs.weather)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.research} onClick={() => handlePresetIVsButtonClick(presetIVs.research)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.egg} onClick={() => handlePresetIVsButtonClick(presetIVs.egg)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.raid} onClick={() => handlePresetIVsButtonClick(presetIVs.raid)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.shadowRaid} onClick={() => handlePresetIVsButtonClick(presetIVs.shadowRaid)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.rocket} onClick={() => handlePresetIVsButtonClick(presetIVs.rocket)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.giovanni} onClick={() => handlePresetIVsButtonClick(presetIVs.giovanni)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.pvp} onClick={() => handlePresetIVsButtonClick(presetIVs.pvp)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.tradeGoodFriends} onClick={() => handlePresetIVsButtonClick(presetIVs.tradeGoodFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.tradeGreatFriends} onClick={() => handlePresetIVsButtonClick(presetIVs.tradeGreatFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.tradeUltraFriends} onClick={() => handlePresetIVsButtonClick(presetIVs.tradeUltraFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.tradeBestFriends} onClick={() => handlePresetIVsButtonClick(presetIVs.tradeBestFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presetIVs.tradeLucky} onClick={() => handlePresetIVsButtonClick(presetIVs.tradeLucky)} />
                            </div>
                        </div>

                        <p className="text-center mt-5">IV Floor</p>
                        <div className="row justify-content-center mb-1">
                            <div className="col-auto mb-1">
                                <IVsSelector position={0} floor={floor} setFloor={setFloor} setTableIcon={setTableIcon} setTableTitle={setTableTitle} />
                            </div>
                            <div className="col-auto mb-1">
                                <IVsSelector position={1} floor={floor} setFloor={setFloor} setTableIcon={setTableIcon} setTableTitle={setTableTitle}/>
                            </div>
                            <div className="col-auto mb-1">
                                <IVsSelector position={2} floor={floor} setFloor={setFloor} setTableIcon={setTableIcon} setTableTitle={setTableTitle}/>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-4 mb-1">
                            <div className="col-auto mb-1">
                                <img src={tableIcon} height='35'/>
                            </div>
                            <div className="col-auto mb-1">
                                <p className="text-center h3">{tableTitle}</p>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-1">
                            <IVsTable floor={floor} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
