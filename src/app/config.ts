const inputs = [
    {"label": "Wall Plate", "value": "Wall Plate"},
    {"label": "Wireless Presentation", "value": "Wireless Presentation"},
]

const outputs = [
    {"label": "Projector", "value": "Projector"},
    {"label": "TVs", "value": "TVs"},
]

const types = [
    {"label": "Audio & Video", "value": "AV"},
    {"label": "Audio Only", "value": "A"},
    {"label": "Video Only", "value": "V"},
]

const sliders = [
    {label:'Wireless Mic 1', name:'WP1-1', min:-120, max:60},
    {label:'Wireless Mic 2', name:'WP1-2', min:-120, max:60},
    {label:'Wireless Mic 3', name:'WP1-3', min:-120, max:60},
    {label:'Wireless Mic 4', name:'WP1-4', min:-120, max:60},
    {label:'Wireless Mic 5', name:'WP2-1', min:-120, max:60},
    {label:'Wireless Mic 6', name:'WP2-2', min:-120, max:60},
    {label:'Wireless Mic 7', name:'WP2-3', min:-120, max:60},
    {label:'Wireless Mic 8', name:'WP2-4', min:-120, max:60},
    {label:'Wireless Mic 9', name:'WP3-1', min:-120, max:60},
    
]

const min = -120;
const max = 60

export {inputs, outputs, types, sliders, min, max}