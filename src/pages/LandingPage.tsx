import WardenLogo from '../assets/images/Warden.png'

const LandingPage = () => {
    return (
        <div className="landingPage" style={{ textAlign: "center" }}>
            <div>
                <h1>CSU Hub</h1>
                <img src={WardenLogo} />
            </div>

            <div style={{}}>
                <a href="/login" style={{color:"white",textDecoration: "none"}}><h1>Login</h1></a>
            </div>
        </div>
    );
};

export default LandingPage;