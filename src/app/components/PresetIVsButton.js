
export default function PresetIVsButton({ presetIV, onClick}) {

    return (
        <button className="btn btn-outline-light" onClick={onClick}>
            <img src={presetIV.icon} className='me-2' height='25'/>
            {presetIV.text}
        </button>
    )
}
