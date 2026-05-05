import './About.css'

export default function About() {
    return (
        <div>
            <div className="about-header">
                <h1>About This App</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi minus earum consectetur sint totam, odit voluptatem temporibus delectus. Vitae minima commodi nostrum iure, numquam adipisci quisquam libero aliquid nam.</p>
            </div>
            <br />
            <div className="team-members">
                <h2>Team Members</h2>
                <div className="team-members-list">
                    <div className="team-members-card">
                        <h3>Gavin</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati praesentium quis asperiores delectus perferendis sapiente eius, cumque vitae vel voluptates corporis, autem eveniet voluptatem similique in harum eaque fugit!</p>
                    </div>
                    <div className="team-members-card">
                        <h3>Keanu</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati praesentium quis asperiores delectus perferendis sapiente eius, cumque vitae vel voluptates corporis, autem eveniet voluptatem similique in harum eaque fugit!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}