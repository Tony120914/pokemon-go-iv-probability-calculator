
export default function IVsSelector({ position, floor, setFloor, setTableIcon, setTableTitle }) {

    let options = []
    for (let i = 0; i <= 15; i++) {
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
