'use client';
import { useState } from 'react';
import Header from './components/Header';
import PresetIVsButton from './components/PresetIVsButton'
import IVsDropdown from './components/IVsDropdown'
import IVsTable from './components/IVsTable';

export default function Home() {

    const [ATK, setATK] = useState(0);
    const [DEF, setDEF] = useState(0);
    const [HP, setHP] = useState(0);

    function handlePresetIVsButtonClick(ATK, DEF, HP) {
        setATK(ATK);
        setDEF(DEF);
        setHP(HP);
    }
    
    return (
        <div>
            <Header />
            <main>
                <div>
                    Title: Pokemon GO IV Probability Calculator
                </div>
                <div>
                    IV Floor Presets
                    <PresetIVsButton text={'Wild 0/0/0'} onClick={() => handlePresetIVsButtonClick(0, 0, 0)} />
                    <PresetIVsButton text={'Wild (Weather Boosted) 4/4/4'} onClick={() => handlePresetIVsButtonClick(4, 4, 4)} />
                    <PresetIVsButton text={'Research 10/10/10'} onClick={() => handlePresetIVsButtonClick(10, 10, 10)} />
                    <PresetIVsButton text={'Egg Hatch 10/10/10'} onClick={() => handlePresetIVsButtonClick(10, 10, 10)} />
                    <PresetIVsButton text={'Non-Shadow Raid 10/10/10'} onClick={() => handlePresetIVsButtonClick(10, 10, 10)} />
                    <PresetIVsButton text={'Shadow Raid 6/6/6'} onClick={() => handlePresetIVsButtonClick(6, 6, 6)} />
                    <PresetIVsButton text={'Trade (Good Friends) 1/1/1'} onClick={() => handlePresetIVsButtonClick(1, 1, 1)} />
                    <PresetIVsButton text={'Trade (Great Friends) 2/2/2'} onClick={() => handlePresetIVsButtonClick(2, 2, 2)} />
                    <PresetIVsButton text={'Trade (Ultra Friends) 3/3/3'} onClick={() => handlePresetIVsButtonClick(3, 3, 3)} />
                    <PresetIVsButton text={'Trade (Best Friends) 5/5/5'} onClick={() => handlePresetIVsButtonClick(5, 5, 5)} />
                    <PresetIVsButton text={'Trade (Lucky Friends) 12/12/12'} onClick={() => handlePresetIVsButtonClick(12, 12, 12)} />
                </div>
                <div>
                    <IVsDropdown IV={ATK} setIV={setATK} />
                    <IVsDropdown IV={DEF} setIV={setDEF} />
                    <IVsDropdown IV={HP} setIV={setHP} />
                </div>
                <div>
                    <IVsTable />
                </div>
            </main>
        </div>
    )
}
