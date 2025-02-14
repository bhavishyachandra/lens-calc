export const sonyCameras = [
    {
        id: 1,
        model: "A7 IV",
        modes: [
            { name: "Full Frame", cropFactor: 1 },
            { name: "APS-C/Super 35mm", cropFactor: 1.5 },
            { name: "4K Active Stabilization", cropFactor: 1.6 }
        ]
    },
    {
        id: 2,
        model: "A6700",
        modes: [
            { name: "APS-C", cropFactor: 1.5 },
            { name: "4K Active Stabilization", cropFactor: 1.7 }
        ]
    }
];

export const sonyLenses = [
    {
        id: 1,
        model: "FE 24-70mm F2.8 GM II",
        focalRange: { min: 24, max: 70 },
        type: "full-frame"
    },
    {
        id: 2,
        model: "E 16-55mm F2.8 G",
        focalRange: { min: 16, max: 55 },
        type: "aps-c"
    },
    {
        id: 3,
        model: "FE 70-200mm F2.8 GM II",
        focalRange: { min: 70, max: 200 },
        type: "full-frame"
    }
]; 