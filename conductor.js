elements.conductor = {
    color: "#464827",
	behavior: behaviors.WALL,
    breakInto: "metal_scrap",
    temp: 20,
    behaviorOn: [
        "XX|CR:electric|XX",
        "CR:electric|XX|HR:electric",
        "XX|CR:electric|XX",
    ],
    category: "iterator",
    insulate: elements.wire.insulate,
    conduct: elements.wire.conduct,
    noMix: elements.wire.noMix
};

elements.flux_coil = {
    color: "#273a48",
	behavior: behaviors.WALL,
    breakInto: "hillock_flux",
    temp: 7025,
    behaviorOn: [
        "XX|CR:plasma|XX",
        "CR:plasma|XX|HR:plasma",
        "XX|CR:plasma|XX",
    ],
    category: "iterator",
    insulate: elements.wire.insulate,
    conduct: elements.wire.conduct,
    noMix: elements.wire.noMix
};