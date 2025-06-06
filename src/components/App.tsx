import React from 'react';
import GalaxyMap from './GalaxyMap';
import PlanetView from './PlanetView';
import StarSystem from './StarSystem';
import Navigation from './Navigation';
import { useState } from 'react';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState('galaxyMap');

    const renderView = () => {
        switch (currentView) {
            case 'galaxyMap':
                return <GalaxyMap />;
            case 'planetView':
                return <PlanetView />;
            case 'starSystem':
                return <StarSystem />;
            default:
                return <GalaxyMap />;
        }
    };

    return (
        <div className="app">
            <Navigation setCurrentView={setCurrentView} />
            {renderView()}
        </div>
    );
};

export default App;