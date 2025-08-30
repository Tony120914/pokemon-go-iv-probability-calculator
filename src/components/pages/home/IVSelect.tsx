
export default function IVSelect({ivFloorId, floor, handleChange }: {ivFloorId: string, floor: number[], handleChange: (e: React.ChangeEvent<HTMLSelectElement>, position: number) => void }) {
    const ivFloorTip = 'The guaranteed minimum IVs the Pokemon can possess, determined by the method of encounter.';

    return (
    <>
        <p className="text-center mt-5" id={ivFloorId} >
            IV Floor
            <i className="bi bi-info-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={ivFloorTip}></i>
        </p>
        <div className="d-flex justify-content-center mb-1">
            <div className="d-flex gap-2">
                <Select position={0} floor={floor} handleChange={handleChange} />
                <Select position={1} floor={floor} handleChange={handleChange} />
                <Select position={2} floor={floor} handleChange={handleChange} />
            </div>
        </div>
    </>
    );
}

function Select({ position, floor, handleChange }: { position: number, floor: number[], handleChange: (e: React.ChangeEvent<HTMLSelectElement>, position: number) => void }) {
    const options = [];
    const maxIV = 15;
    for (let i = 0; i <= maxIV; i++) {
        options.push(<option key={i} value={i} >{i}</option>);
    }
    
    return (
        <>
            <select className='form-select' aria-label='IV floor input' value={floor[position]} onChange={(e) => handleChange(e, position)}>
                {options}
            </select>
        </>
    )
}
