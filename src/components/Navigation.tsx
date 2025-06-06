import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="#galaxy-map">Galaxy Map</a></li>
                <li><a href="#planet-view">Planet View</a></li>
                <li><a href="#star-system">Star System</a></li>
                <li><a href="#inventory">Inventory</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;