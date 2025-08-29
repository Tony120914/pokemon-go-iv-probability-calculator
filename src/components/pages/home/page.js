'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import PresetIVsButton from './PresetIVsButton'
import IVsSelector from './IVsSelector'
import IVsTable from './IVsTable';


export default function Home() {

    // import bootstrap js
    // import bootstrap tooltips
    useEffect(()=>{
        async function importBootstrap() {
            const bootstrap = await import("bootstrap/dist/js/bootstrap");
            // import { Tooltip } from 'bootstrap/dist/js/bootstrap';
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        }
        importBootstrap();
    },[])

    const presets = {
        wild : {text:'Wild', icon:'icons/standard-wild.png', floor:[0,0,0]},
        weather : {text:'Wild (Weather Boosted)', icon:'icons/standard-weather.png', floor:[4,4,4]},
        research : {text:'Research', icon:'icons/standard-research.png', floor:[10,10,10]},
        egg : {text:'Egg Hatch', icon:'icons/standard-egg.png', floor:[10,10,10]},
        raid : {text:'Raid (Non-Shadow)', icon:'icons/raid.png', floor:[10,10,10]},
        shadowRaid : {text:'Raid (Shadow)', icon:'icons/raid-shadow.png', floor:[6,6,6]},
        rocket : {text:'Rocket Grunt & Leader', icon:'icons/battle-rocket.png', floor:[0,0,0]},
        giovanni : {text:'Giovanni', icon:'icons/battle-giovanni.png', floor:[6,6,6]},
        gbl : {text:'Go Battle League', icon:'icons/battle-gbl.png', floor:[10,10,10]},
        gblEvent : {text:'Go Battle League (Event)', icon:'icons/battle-gbl-event.png', floor:[0,0,0]},
        tradeGoodFriends : {text:'Trade (Good Friends)', icon:'icons/trade-good-friends.png', floor:[1,1,1]},
        tradeGreatFriends : {text:'Trade (Great Friends)', icon:'icons/trade-great-friends.png', floor:[2,2,2]},
        tradeUltraFriends : {text:'Trade (Ultra Friends)', icon:'icons/trade-ultra-friends.png', floor:[3,3,3]},
        tradeBestFriends : {text:'Trade (Best Friends)', icon:'icons/trade-best-friends.png', floor:[5,5,5]},
        tradeLucky : {text:'Trade (Lucky Friends)', icon:'icons/trade-lucky-friends.png', floor:[12,12,12]},
    }

    const ivFloorTip = 'The guaranteed minimum IVs the Pokemon can possess, determined by the method of encounter.';
    const ivFloorId = 'iv-floor';

    const [floor, setFloor] = useState([0,0,0]);
    const [tableIcon, setTableIcon] = useState('');
    const [tableTitle, setTableTitle] = useState('');

    // Auto-complete the selector with preset IVs after clicking button and
    // change table icon and table title to corresponding preset
    // scroll down to view IV floor and table for smaller screens
    function handlePresetIVsButtonClick(presetIV) {
        const smallScreenSize = 768;

        setFloor(presetIV.floor);
        setTableIcon(presetIV.icon);
        setTableTitle(presetIV.text);

        if (window.innerWidth < smallScreenSize) {
            document.getElementById(ivFloorId).scrollIntoView();
        }
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
                                <PresetIVsButton presetIV={presets.wild} onClick={() => handlePresetIVsButtonClick(presets.wild)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.weather} onClick={() => handlePresetIVsButtonClick(presets.weather)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.research} onClick={() => handlePresetIVsButtonClick(presets.research)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.egg} onClick={() => handlePresetIVsButtonClick(presets.egg)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.raid} onClick={() => handlePresetIVsButtonClick(presets.raid)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.shadowRaid} onClick={() => handlePresetIVsButtonClick(presets.shadowRaid)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.rocket} onClick={() => handlePresetIVsButtonClick(presets.rocket)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.giovanni} onClick={() => handlePresetIVsButtonClick(presets.giovanni)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.gbl} onClick={() => handlePresetIVsButtonClick(presets.gbl)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.gblEvent} onClick={() => handlePresetIVsButtonClick(presets.gblEvent)} />
                            </div>
                        </div>
                        <div className="row justify-content-md-center mb-1">
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.tradeGoodFriends} onClick={() => handlePresetIVsButtonClick(presets.tradeGoodFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.tradeGreatFriends} onClick={() => handlePresetIVsButtonClick(presets.tradeGreatFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.tradeUltraFriends} onClick={() => handlePresetIVsButtonClick(presets.tradeUltraFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.tradeBestFriends} onClick={() => handlePresetIVsButtonClick(presets.tradeBestFriends)} />
                            </div>
                            <div className="col-md-auto mb-1">
                                <PresetIVsButton presetIV={presets.tradeLucky} onClick={() => handlePresetIVsButtonClick(presets.tradeLucky)} />
                            </div>
                        </div>

                        <p className="text-center mt-5" id={ivFloorId} >
                            IV Floor
                            <i className="bi bi-info-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={ivFloorTip}></i>
                        </p>
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
