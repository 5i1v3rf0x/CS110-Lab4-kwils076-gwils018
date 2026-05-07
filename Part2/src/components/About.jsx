import './About.css'
import frogImg from '../assets/frog.png'

export default function About() {
    return (
        <div>
            <div className="about-header">
                <h1>About This App</h1>
                <p>This is a Tic-Tac-Toe game that closely resembles the one from the previous lab. In this case, the game is implemented using React instead of the standard JavaScript/html.</p>
            </div>
            <br />
            <div className="team-members">
                <h2>Team Members</h2>
                <div className="team-members-list">
                    <div className="team-members-card">
                        <h3>Gavin</h3>
                        <img className="team-member-image" src={frogImg} alt="Frog Picture" />
                        <p>The one who implemented the turn logic.</p>
                    </div>
                    <div className="team-members-card">
                        <h3>Keanu</h3>
                        <img className="team-member-image" src={frogImg} alt="Frog Picture" style={{ transform: "scaleX(-1)" }} />
                        <p>The one who implemented the scoring logic.</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}