export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "white"},
            { value: "blue", label: "blue"},
            { value: "green", label: "green"},
            { value: "red", label: "red"},
            { value: "yellow", label: "yellow"},
            { value: "black", label: "black"},
            { value: "gray", label: "gray"},
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S"},
            { value: "M", label: "M"},
            { value: "L", label: "L"},
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "Rs.159 to Rs.399"},
            { value: "399-499", label: "Rs.399 to Rs.499"},
            { value: "499-999", label: "Rs.499 to Rs.999"},
        ],
    },
    {
        id: "availability",
        name: "Availability",
        options: [
            { value: "In Stock", label: "In Stock"},
            { value: "Out of Stock", label: "Out of Stock"},
        ],
    },
];
