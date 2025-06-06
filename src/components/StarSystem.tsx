import React from 'react';
import { Planet } from '../types';

interface StarSystemProps {
    name: string;
    planets: Planet[];
}

const StarSystem: React.FC<StarSystemProps> = ({ name, planets }) => {
    return (
        <div className="star-system">
            <h2>{name}</h2>
            <ul>
                {planets.map((planet) => (
                    <li key={planet.id}>
                        {planet.name} - {planet.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StarSystem;