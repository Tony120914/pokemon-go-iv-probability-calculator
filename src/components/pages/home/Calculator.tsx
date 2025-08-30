import { useEffect, useState } from "react";
import EncounterSelect from "./EncounterSelect.js";
import IVSelect from "./IVSelect.js";
import type { IPreset } from "./IPreset.js";
import ProbabilityTable from "./ProbabilityTable.js";
import { useSearchParams } from "react-router";


export default function Calculator({}) {
    const [floor, setFloor] = useState([0, 0, 0]);
    const [tableIcon, setTableIcon] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const ivFloorId = 'iv-floor';
    const smallScreenSize = 768;

    let [searchParams, setSearchParams] = useSearchParams();
    const floorParam = 'floor';
    useEffect(()=>{
        const args = searchParams.get(floorParam)?.split('-')
        if (!args || args.length != 3) { setFloor([0, 0, 0]); return;}
        const floor = args.map(arg => {
            const iv = parseInt(arg);
            return (iv && iv >= 0 && iv <= 15) ? iv : 0;
        });
        setFloor(floor);
    },[])

    function handleEncounterClick(preset: IPreset) {
        const update = () => {
            setFloor(preset.floor);
            setTableIcon(preset.icon);
            setTableTitle(preset.text);
            setSearchParams([[floorParam, `${preset.floor[0]}-${preset.floor[1]}-${preset.floor[2]}`]]);
        }
        if (!document.startViewTransition) {
            update();
        }
        document.startViewTransition(() => {
            update();
        });
        
        // scroll to view if the screen is too small
        const navBarHeight = document.getElementsByTagName('header')[0]?.offsetHeight;
        const ivSelector =  document.getElementById(ivFloorId);
        if (ivSelector) { ivSelector.style.scrollMarginTop = `${navBarHeight}px`;}
        if (window.innerWidth < smallScreenSize) {
            document.getElementById(ivFloorId)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    function handleCustomChange(e: React.ChangeEvent<HTMLSelectElement>, position: number) {
        const customFloor = floor.slice();
        customFloor[position] = parseInt(e.target.value);

        const update = () => {
            setFloor(customFloor);
            setTableIcon('assets/unown-question-mark.png');
            setTableTitle('Custom');
            setSearchParams([[floorParam, `${customFloor[0]}-${customFloor[1]}-${customFloor[2]}`]]);
        }
        if (!document.startViewTransition) {
            update();
        }
        document.startViewTransition(() => {
            update();
        });
    }

    return (
        <>
            <EncounterSelect handleClick={handleEncounterClick} />
            <IVSelect ivFloorId={ivFloorId} floor={floor} handleChange={handleCustomChange} />
            <ProbabilityTable icon={tableIcon} title={tableTitle} floor={floor} />
        </>
    );
}
