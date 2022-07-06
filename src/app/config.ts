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
const stepDefault = 1092;
const sliders = [
    {label:'Wall Plate Input 1', name:'WP1-1'},
    {label:'Wall Plate Input 2', name:'WP1-2'},
    {label:'Wall Plate Input 3', name:'WP1-3'},
    {label:'Wall Plate Input 4', name:'WP1-4'},
    {label:'Floor Box Input 1', name:'FB1-1'},
    {label:'Floor Box Input 2', name:'FB1-2'},
    {label:'Floor Box Input 3', name:'FB1-3'},
    {label:'Floor Box Input 4', name:'FB1-4'},
    {label:'Floor Box Input 5', name:'FB2-1'},
    {label:'Floor Box Input 6', name:'FB2-2'},
    {label:'Floor Box Input 7', name:'FB2-3'},
    {label:'Floor Box Input 8', name:'FB2-4'},
    {label:'Video', name:'Video'},
    {label:'Overall', name:'Main'},
    
]

const displays= [
    {
        name: "TV1",
        actions: [
            "On",
            "Off"
        ]
    },
    {
        name: "TV2",
        actions: [
            "On",
            "Off"
        ]
    },
    {
        name: "Projector",
        actions: [
            "On",
            "Off",
            "SceenUp",
            "ScreenDown"
        ]
    }
]



const host = "ws://192.168.1.99:54321/Data"

export {inputs, outputs, types, sliders, minDefault, maxDefault, stepDefault, host, displays}