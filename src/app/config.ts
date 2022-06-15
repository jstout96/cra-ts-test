const inputs = [
    {"text": "Wall Plate", "key": "Wall Plate"},
    {"text": "Wireless Presentation", "key": "Wireless Presentation"},
]

const outputs = [
    {"text": "Projector", "key": "Projector"},
    {"text": "TVs", "key": "TVs"},
]

const types = [
    {"text": "Audio & Video", "key": "AV"},
    {"text": "Audio Only", "key": "A"},
    {"text": "Video Only", "key": "V"},
]
const minDefault = 0;
const maxDefault = 65535;
const stepDefault = 546;
const sliders = [
    {label:'Wall Plate Input 1', name:'WP1-1'},
    {label:'Wall Plate Input 2', name:'WP1-2'},
    {label:'Wall Plate Input 3', name:'WP1-3'},
    {label:'Wall Plate Input 4', name:'WP1-4'},
    {label:'Floor Box Input 1', name:'FB1-1'},
    {label:'Floor Box Input 2', name:'FB1-2'},
    {label:'Floor Box Input 3', name:'FB1-3'},
    {label:'Floor Box Input 4', name:'FB1-4'},
    {label:'Video', name:'Video'},
    {label:'Overall', name:'Main'},
    
]



const host = "ws://192.168.1.99:54321/Data"

export {inputs, outputs, types, sliders, minDefault, maxDefault, stepDefault, host}