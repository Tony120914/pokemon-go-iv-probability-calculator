import type { IPreset } from "./IPreset.js";

export default function EncounterSelect ({ handleClick }: { handleClick: (preset: IPreset) => void}) {
    const presets = {
        wild : {text:'Wild Encounter', icon:'assets/standard-wild.png', floor:[0,0,0]},
        weather : {text:'Wild (Weather Boosted)', icon:'assets/standard-weather.png', floor:[4,4,4]},
        research : {text:'Research', icon:'assets/standard-research.png', floor:[10,10,10]},
        egg : {text:'Egg Hatch', icon:'assets/standard-egg.png', floor:[10,10,10]},
        raid : {text:'Raid (Non-Shadow)', icon:'assets/raid.png', floor:[10,10,10]},
        raidShadow : {text:'Raid (Shadow)', icon:'assets/raid-shadow.png', floor:[6,6,6]},
        rocket : {text:'Rocket Grunt & Leader', icon:'assets/battle-rocket.png', floor:[0,0,0]},
        giovanni : {text:'Giovanni', icon:'assets/battle-giovanni.png', floor:[6,6,6]},
        gbl : {text:'Go Battle League', icon:'assets/battle-gbl.png', floor:[10,10,10]},
        gblEvent : {text:'Go Battle League (Event)', icon:'assets/battle-gbl-event.png', floor:[0,0,0]},
        tradeGoodFriends : {text:'Trade (Good Friends)', icon:'assets/trade-good-friends.png', floor:[1,1,1]},
        tradeGreatFriends : {text:'Trade (Great Friends)', icon:'assets/trade-great-friends.png', floor:[2,2,2]},
        tradeUltraFriends : {text:'Trade (Ultra Friends)', icon:'assets/trade-ultra-friends.png', floor:[3,3,3]},
        tradeBestFriends : {text:'Trade (Best Friends)', icon:'assets/trade-best-friends.png', floor:[5,5,5]},
        tradeLuckyFriends : {text:'Trade (Lucky Friends)', icon:'assets/trade-lucky-friends.png', floor:[12,12,12]},
    }
    
    return (
    <>
        <h1 className='display-6 text-center mb-3'>How is the Pokemon encountered?</h1>
        <div className="d-xl-flex justify-content-center text-center gap-2">
            <EncounterColumn title={'Standard'} divideEnd={true}
                buttons={[
                    <EncounterButton key={presets.wild.text} preset={presets.wild} handleClick={handleClick} />,
                    <EncounterButton key={presets.weather.text} preset={presets.weather} handleClick={handleClick} />,
                    <EncounterButton key={presets.research.text} preset={presets.research} handleClick={handleClick} />,
                    <EncounterButton key={presets.egg.text} preset={presets.egg} handleClick={handleClick} />
                ]}
            />
            <EncounterColumn title={'Raid'} divideEnd={true}
                buttons={[
                    <EncounterButton key={presets.raid.text} preset={presets.raid} handleClick={handleClick} />,
                    <EncounterButton key={presets.raidShadow.text} preset={presets.raidShadow} handleClick={handleClick} />
                ]}
            />

            <EncounterColumn title={'Battle'} divideEnd={true}
                buttons={[
                    <EncounterButton key={presets.rocket.text} preset={presets.rocket} handleClick={handleClick} />,
                    <EncounterButton key={presets.giovanni.text} preset={presets.giovanni} handleClick={handleClick} />,
                    <EncounterButton key={presets.gbl.text} preset={presets.gbl} handleClick={handleClick} />,
                    <EncounterButton key={presets.gblEvent.text} preset={presets.gblEvent} handleClick={handleClick} />
                ]}
            />

            <EncounterColumn title={'Trade'} divideEnd={false}
                buttons={[
                    <EncounterButton key={presets.tradeGoodFriends.text} preset={presets.tradeGoodFriends} handleClick={handleClick} />,
                    <EncounterButton key={presets.tradeGreatFriends.text} preset={presets.tradeGreatFriends} handleClick={handleClick} />,
                    <EncounterButton key={presets.tradeUltraFriends.text} preset={presets.tradeUltraFriends} handleClick={handleClick} />,
                    <EncounterButton key={presets.tradeBestFriends.text} preset={presets.tradeBestFriends} handleClick={handleClick} />,
                    <EncounterButton key={presets.tradeLuckyFriends.text} preset={presets.tradeLuckyFriends} handleClick={handleClick} />
                ]}
            />
        </div>
    </>
    );
}

function EncounterButton({ preset, handleClick }: { preset: IPreset, handleClick: (preset: IPreset) => void }) {
    return (
        <button className="btn btn-outline-light" onClick={() => handleClick(preset)}>
            <img src={preset.icon} className='me-2' height='25px' />
            {preset.text}
        </button>
    )
}

function EncounterColumn({ title, divideEnd, buttons }: { title: string, divideEnd: boolean, buttons: React.ReactElement[] }) {
    return (
    <>
        <div className="d-inline-flex flex-column gap-2">
            <span className="text-center fs-4">{title}</span>
            {buttons}
        </div>
        {divideEnd ? <hr className="d-md-none mx-auto my-3" style={{ width:'80%' }} /> : null}
    </>
    );
}
