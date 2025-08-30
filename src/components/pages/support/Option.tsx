
export default function Option({ title, icon, buttons }: { title: string, icon: string, buttons: React.ReactElement[] }) {
    return (
    <>
        <h1 className='display-6 my-3'>
            <i className={`bi ${icon} me-2`}></i>
            {title}
        </h1>
        <div className="d-inline-flex flex-column justify-content-center gap-2">
            {buttons}
        </div>
    </>
    );
}
