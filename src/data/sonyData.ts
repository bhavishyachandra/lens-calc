export const sonyCameras = [
  {
    id: 1,
    model: "A7 IV",
    modes: [
      { name: "Photo", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "Photo >10fps", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "1080p 60fps", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "1080p 120fps", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "4K 30fps", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K 60fps", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "4K Stabilized", cropFactor: 1.6, apscLensCrop: 1.6 },
    ],
  },
  {
    id: 2,
    model: "A6700",
    modes: [
      { name: "Photo", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "1080p 60fps", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "1080p 120fps", cropFactor: 1.6, apscLensCrop: 1.6 },
      { name: "4K 30fps", cropFactor: 1.5, apscLensCrop: 1.5 },
      { name: "4K 60fps", cropFactor: 1.6, apscLensCrop: 1.6 },
      { name: "4K Stabilized", cropFactor: 1.7, apscLensCrop: 1.7 },
    ],
  },
  {
    id: 3,
    model: "A7R V",
    modes: [
      { name: "Photo", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "1080p", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K Stabilized", cropFactor: 1.6, apscLensCrop: 1.6 },
    ],
  },
  {
    id: 4,
    model: "A7CR",
    modes: [
      { name: "Photo", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "1080p", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K Stabilized", cropFactor: 1.6, apscLensCrop: 1.6 },
    ],
  },
  {
    id: 5,
    model: "A9 III",
    modes: [
      { name: "Photo", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "1080p", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K Stabilized", cropFactor: 1.6, apscLensCrop: 1.6 },
    ],
  },
  {
    id: 6,
    model: "ZV-E1",
    modes: [
      { name: "Photo", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "1080p", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K", cropFactor: 1, apscLensCrop: 1.5 },
      { name: "4K Stabilized", cropFactor: 1.6, apscLensCrop: 1.6 },
    ],
  },
];

export const sonyLenses = [
  {
    id: 1,
    model: "FE 24-70mm F2.8 GM II",
    focalRange: { min: 24, max: 70 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 2,
    model: "E 16-55mm F2.8 G",
    focalRange: { min: 16, max: 55 },
    type: "aps-c",
    cropModes: {
      fullFrame: 1.5,
      apsC: 1.5,
    },
  },
  {
    id: 3,
    model: "FE 70-200mm F2.8 GM II",
    focalRange: { min: 70, max: 200 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 4,
    model: "FE 20-70mm F4 G",
    focalRange: { min: 20, max: 70 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 5,
    model: "FE 50mm F1.4 GM",
    focalRange: { min: 50, max: 50 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 6,
    model: "E 11mm F1.8",
    focalRange: { min: 11, max: 11 },
    type: "aps-c",
    cropModes: {
      fullFrame: 1.5,
      apsC: 1.5,
    },
  },
  {
    id: 7,
    model: "FE 16-35mm F2.8 GM II",
    focalRange: { min: 16, max: 35 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 8,
    model: "E 10-20mm F4 PZ G",
    focalRange: { min: 10, max: 20 },
    type: "aps-c",
    cropModes: {
      fullFrame: 1.5,
      apsC: 1.5,
    },
  },
  {
    id: 9,
    model: "FE 24-105mm F4 G OSS",
    focalRange: { min: 24, max: 105 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 10,
    model: "FE 100-400mm F4.5-5.6 GM OSS",
    focalRange: { min: 100, max: 400 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 11,
    model: "E 18-135mm F3.5-5.6 OSS",
    focalRange: { min: 18, max: 135 },
    type: "aps-c",
    cropModes: {
      fullFrame: 1.5,
      apsC: 1.5,
    },
  },
  {
    id: 12,
    model: "FE 35mm F1.4 GM",
    focalRange: { min: 35, max: 35 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 13,
    model: "FE 85mm F1.4 GM",
    focalRange: { min: 85, max: 85 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
  {
    id: 14,
    model: "FE 14mm F1.8 GM",
    focalRange: { min: 14, max: 14 },
    type: "full-frame",
    cropModes: {
      fullFrame: 1,
      apsC: 1.5,
    },
  },
];
