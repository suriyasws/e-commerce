import axios from "axios";
import sofa1 from "../components/images/Default_Sofa_with_shadow_0.png";
import sofa2 from "../components/images/Default_Sofa_with_shadow_2.png";
import chair1 from "../components/images/Default_Chair_1 (1).png";
import chair2 from "../components/images/Default_Chair_1.png";
import bed1 from "../components/images/Default_Velvet_Bed_1 (1).png";
import bed2 from "../components/images/Default_Velvet_Bed_1.png";
import pot1 from "../components/images/Default_Flower_pot_0 (1).png";
import pot2 from "../components/images/Default_Velvet_Bed_1.png";

const furnitures = [
    {
        _id: 3,
        name: "Cotswod Queen",
        imageurl: bed1,
        category: "bed",
        price: 12300
    },
    {
        _id: 4,
        name: "Martson Cherry Cal",
        imageurl: bed2,
        category: "bed",
        price: 10500
    },
    {
        _id: 1,
        name: "Coaster Houston",
        imageurl: sofa1,
        category: "sofa",
        price: 8500
    },
    {
        _id: 2,
        name: "Serta Monre",
        imageurl: sofa2,
        category: "sofa",
        price: 9500
    },
    {
        _id: 5,
        name: "Eames Molded",
        imageurl: chair1,
        category: "chair",
        price: 2800
    },
    {
        _id: 6,
        name: "Harriet Dining",
        imageurl: chair2,
        category: "chair",
        price: 3130
    }
];

export { furnitures };
