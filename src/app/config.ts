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
const min = 48059;
const max = 57889;
const step = 546;
const sliders = [
    {label:'Wall Plate Input 1', name:'WP1-1', min: min, max: max, step: step},
    {label:'Wall Plate Input 2', name:'WP1-2', min: min, max: max, step: step},
    {label:'Wall Plate Input 3', name:'WP1-3', min: min, max: max, step: step},
    {label:'Wall Plate Input 4', name:'WP1-4', min: min, max: max, step: step},
    {label:'Floor Box Input 1', name:'FB1-1', min: min, max: max, step: step},
    {label:'Floor Box Input 2', name:'FB1-2', min: min, max: max, step: step},
    {label:'Floor Box Input 3', name:'FB1-3', min: min, max: max, step: step},
    {label:'Floor Box Input 4', name:'FB1-4', min: min, max: max, step: step},
    {label:'Video', name:'Video', min: min, max: max, step: step},
    {label:'Overall', name:'Main', min: min, max: max, step: step},
    
]



const host = "ws://192.168.1.99:54321/Data"

export {inputs, outputs, types, sliders, min, max, step, host}