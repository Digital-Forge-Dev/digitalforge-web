import "./style.css";

export const Menu = () => {
    return (
        <div className="navbar">
            <div className="button">
            <div className="text-wrapper-3">All</div>
            </div>
            <div className="button-gamedev">GameDev</div>
            <div className="button-internal">Internal Projects</div>
            <div className="button-external">External Projects</div>
            <div className="button-netsos">NetSOS</div>
        </div>
    )
}