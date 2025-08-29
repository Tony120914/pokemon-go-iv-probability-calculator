import { useState } from "react";
import EncounterSelect from "./EncounterSelect.js";
import IVSelect from "./IVSelect.js";
import type { IPreset } from "./IPreset.js";
import ProbabilityTable from "./ProbabilityTable.js";


export default function Calculator({}) {
    const [floor, setFloor] = useState([0, 0, 0]);
    const [tableIcon, setTableIcon] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const ivFloorId = 'iv-floor';
    const smallScreenSize = 768;

    function handleEncounterClick(preset: IPreset) {
        setFloor(preset.floor);
        setTableIcon(preset.icon);
        setTableTitle(preset.text);

        if (window.innerWidth < smallScreenSize) {
            document.getElementById(ivFloorId)?.scrollIntoView();
        }
    }

    function handleCustomChange(e: React.ChangeEvent<HTMLSelectElement>, position: number) {
        const customFloor = floor.slice();
        customFloor[position] = parseInt(e.target.value);
        setFloor(customFloor);
        setTableIcon('assets/unown-question-mark.png');
        setTableTitle('Custom');
    }

    return (
        <>
            <EncounterSelect handleClick={handleEncounterClick} />
            <IVSelect ivFloorId={ivFloorId} floor={floor} handleChange={handleCustomChange} />
            <ProbabilityTable icon={tableIcon} title={tableTitle} floor={floor} />
        </>
    );
}
