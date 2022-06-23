import  WardenLogo  from '../assets/images/Warden.png'

const LandingPage = () => {
    return (
        <div className="landingPage" style={{ textAlign: "center" }}>
            <h1>CSU Hub</h1>
            <p>
                The Hub for planning in the Caoivish Specialist Union
            </p>
            <img src={WardenLogo} />
        </div>
    );
};

export default LandingPage;