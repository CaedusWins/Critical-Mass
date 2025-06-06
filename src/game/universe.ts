// universe.ts

export interface Planet {
    name: string;
    resources: string[];
    inhabitants: number;
    events: string[];
}

export interface StarSystem {
    name: string;
    planets: Planet[];
    coordinates: { x: number; y: number; z: number };
}

export interface Universe {
    starSystems: StarSystem[];
}

export const universe: Universe = {
    starSystems: [
        {
            name: "Alpha Centauri",
            planets: [
                {
                    name: "Proxima b",
                    resources: ["Water", "Iron", "Oxygen"],
                    inhabitants: 1000,
                    events: ["Meteor Shower", "Alien Encounter"]
                },
                {
                    name: "Alpha Centauri A b",
                    resources: ["Silicon", "Gold"],
                    inhabitants: 500,
                    events: ["Solar Flare"]
                }
            ],
            coordinates: { x: 0, y: 0, z: 0 }
        },
        {
            name: "Beta Quadrant",
            planets: [
                {
                    name: "Zeta Prime",
                    resources: ["Gas", "Minerals"],
                    inhabitants: 2000,
                    events: ["Space Pirates Attack"]
                }
            ],
            coordinates: { x: 1, y: 1, z: 1 }
        }
    ]
};