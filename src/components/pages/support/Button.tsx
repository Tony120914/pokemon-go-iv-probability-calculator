
export default function Button({ url, image, name }: { url: string, image: string, name: string }) {
    return (
        <a href={url} className={`btn btn-lg btn-outline-light`} role="button" target='_blank' aria-disabled="true">
            <img src={image} className="me-2 mb-1" height='25px'></img>
            {name}
        </a>
    );
}
