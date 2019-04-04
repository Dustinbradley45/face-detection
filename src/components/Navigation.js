import React from "react";

const Navigation = ({ onSignOut, isSignedIn, onRegister }) => {
    return (


        <React.Fragment>
        {
                isSignedIn === true ?
                    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                        <p className="f3 link dim black underline pa3 pointer" onClick={onSignOut}>Sign Out</p>
                    </nav>
                    :
                    <div style={{display:"flex", justifyContent: "flex-end"}}>
                        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                            <p className="f3 link dim black underline pa3 pointer" onClick={onRegister}>Register</p>
                        </nav>
                        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                            <p className="f3 link dim black underline pa3 pointer" onClick={onSignOut}>Sign Out</p>
                            </nav>
                    </div>
            }
        </React.Fragment>

    
    )
}

export default Navigation;