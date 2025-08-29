import { useState } from "react";

export default function IVSelect({}) {
    const ivFloorTip = 'The guaranteed minimum IVs the Pokemon can possess, determined by the method of encounter.';
    const ivFloorId = 'iv-floor';

    return (
    <>
        <p className="text-center mt-5" id={ivFloorId} >
            IV Floor
            <i className="bi bi-info-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={ivFloorTip}></i>
        </p>
        <div className="row justify-content-center mb-1">
            <div className="col-auto mb-1">
                <Select position={0} />
            </div>
            <div className="col-auto mb-1">
                <Select position={1} />
            </div>
            <div className="col-auto mb-1">
                <Select position={2} />
            </div>
        </div>
    </>
    );
}

function Select({ position }: { position: number }) {
    const [floor, setFloor] = useState([0,0,0]);
    const [tableIcon, setTableIcon] = useState('');
    const [tableTitle, setTableTitle] = useState('');

    const options = [];
    const maxIV = 15;
    for (let i = 0; i <= maxIV; i++) {
        options.push(<option key={i} value={i} >{i}</option>);
    }

    // Allow user to customize IVs in selector and
    // change table icon and table icon to indicate customization
    function handleChange(e) {
        let floorCustom = [floor[0], floor[1], floor[2]];
        floorCustom[position] = parseInt(e.target.value);
        setFloor(floorCustom);
        setTableIcon('icons/unownQuestionMark.png');
        setTableTitle('Custom');
    }
    
    return (
        <>
            <select className='form-select' aria-label='IV floor input' value={floor[position]} onChange={handleChange}>
                {options}
            </select>
        </>
    )
  }
