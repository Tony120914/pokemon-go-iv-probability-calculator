import { NavLink } from "react-router";

export default function BackButton({ to }: { to: string }) {
    return (
        <NavLink to={to} end onClick={() => window.scrollTo({top:0, behavior:'smooth'}) } style={{ textDecoration:'none' }} viewTransition>
            <i className="bi bi-arrow-left mx-2" style={{'fontSize':'40px'}}></i>
        </NavLink>
    );
}
