
export default function IVsSelector({ IV, setIV, setTableIcon, setTableTitle }) {

    let options = []
    for (let i = 0; i <= 15; i++) {
        options.push(<option key={i} value={i} >{i}</option>);
    }

    function handleChange(e) {
        setIV(e.target.value);
        setTableIcon('unownQuestionMark.png');
        setTableTitle('Custom');
    }
    
    return (
        <label>
            <select className='form-select' aria-label='IV floor input' value={IV} onChange={handleChange}>
                {options}
            </select>
        </label>
    )
  }
