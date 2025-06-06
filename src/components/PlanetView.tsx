import React from 'react';

interface PlanetViewProps {
    planet: {
        name: string;
        resources: string[];
        inhabitants: string[];
        events: string[];
    };
}

const PlanetView: React.FC<PlanetViewProps> = ({ planet }) => {
    return (
        <div className="planet-view">
            <h1>{planet.name}</h1>
            <h2>Resources</h2>
            <ul>
                {planet.resources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                ))}
            </ul>
            <h2>Inhabitants</h2>
            <ul>
                {planet.inhabitants.map((inhabitant, index) => (
                    <li key={index}>{inhabitant}</li>
                ))}
            </ul>
            <h2>Events</h2>
            <ul>
                {planet.events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlanetView;