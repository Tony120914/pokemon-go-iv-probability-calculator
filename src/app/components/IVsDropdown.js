
export default function IVsDropdown({ IV, setIV }) {

    let options = []
    for (let i = 0; i <= 15; i++) {
        options.push(<option key={i} value={i} >{i}</option>);
    }
    
    return (
        <label>
            <select value={IV} onChange={e => setIV(e.target.value)}>
                {options}
            </select>
        </label>

    )
  }
