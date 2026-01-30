import { cld } from "../lib/cloudinary";
const tesla = cld.image("Tesla1-removebg-preview_lxfewk");
const tesla1= cld.image("Tesla1_pwqoiv");
const tesla2 = cld.image("Tesla3_rfbi9d");
const tesla3 = cld.image("Tesla2_u6wyvw");
const tesla4 = cld.image("Tesla_vplche");
const tesla_v1 =cld.image("Tesla-V1-1-removebg-preview_fzkvct");
const tesla_v1_1 = cld.image("Tesla-V1-1_ueb3uy");
const tesla_v1_2 = cld.image("Tesla-V1-3_xldni1");
const tesla_v1_3 = cld.image("Tesla-V1-2_gpiczd");
const tesla_v1_4 = cld.image("Tesla-V1_ktvao0");
const tesla_v2 = cld.image("Tesla-v2-4-removebg-preview_xmorsm");
const tesla_v2_1 = cld.image("Tesla-v2-2_gtybpr");
const tesla_v2_2 = cld.image("Tesla-v2-4_q9jnok");
const tesla_v2_3 = cld.image("Tesla-v2-1_pvegps");
const tesla_v2_4 = cld.image("Tesla-v2-3_ek7kf6");

const ferari = cld.image("ferari-2-removebg-preview_fbz5e2");
const ferari1 = cld.image("ferari-4_zcv5vp");
const ferari2 = cld.image("ferari-2_o7orpj");
const ferari3 = cld.image("ferari-3_augnsk");
const ferari4 = cld.image("ferari-1_or4thf");
const ferari_v1 = cld.image("ferari-v1-2-removebg-preview_rl60ct");
const ferari_v1_1 = cld.image("ferari-v1-2_n5szbb");
const ferari_v1_2 = cld.image("ferari-v1-4_ghdvdx");
const ferari_v1_3 = cld.image("ferari-v1-1_iiqzpr");
const ferari_v1_4 = cld.image("ferari-v1-3_tbdmgi");


const BMW = cld.image("BMV-3-removebg-preview_d4dksw");
const BMW1 = cld.image("BMV-4_lwpq8i");
const BMW2 = cld.image("BMV-3_srya67");
const BMW3 = cld.image("BMV-1_vfc0bg");
const BMW4 = cld.image("BMV-2_nyp1rg");
const BMW_v1 = cld.image("Cabriolets-BMV-V1-3-removebg-preview_tnrddn");
const BMW_v1_1 = cld.image("Cabriolets-BMV-V1-1_eytmsk");
const BMW_v1_2 = cld.image("Cabriolets-BMV-V1-3_ott22u");
const BMW_v1_3 = cld.image("Cabriolets-BMV-V1-4_weah9p");
const BMW_v1_4 = cld.image("Cabriolets-BMV-V1-2_jqrhy2");

const dacia = cld.image("dacia_gris-removebg-preview_1_uasonu");
const dacia1 = cld.image("dacia_noir-removebg-preview_1_teplzd");
const dacia2 = cld.image("dacia_rouge-removebg-preview_wvk8cl");
const dacia3 = cld.image("blue_dacia-removebg-preview_p74t5p");
const dacia4 = cld.image("dacia_gris-removebg-preview_1_uasonu");
const dacia_v1 = cld.image("dacia4-removebg-preview_rvydex");
const dacia_v1_1 = cld.image("dacia4_w9o4ir");
const dacia_v1_2 = cld.image("dacia3_gbh4di");
const dacia_v1_3 = cld.image("dacia2_tcoks5");
const dacia_v1_4 = cld.image("dacia1_mzbnf0");

const toyota = cld.image("toyota3-removebg-preview_y3giqz");
const toyota1 = cld.image("toyota1_rrkvio");
const toyota2 = cld.image("toyota4_socx9n");
const toyota3 = cld.image("toyota2_tdsprl");
const toyota4 = cld.image("toyota3_qu847p");
const toyota_v1 = cld.image("toyota1_v1-removebg-preview_mw1ipy");
const toyota_v1_1 = cld.image("toyota1_v4_r15wwt");
const toyota_v1_2 = cld.image("toyota1_v3_ibbrbh");
const toyota_v1_3 = cld.image("toyota1_v1_ru24c3");
const toyota_v1_4 = cld.image("toyota1_v2_hmhggq");

const mercedec = cld.image("mercedec3-removebg-preview_uhdglo");
const mercedec1 = cld.image("mercedec3_xwdpcd");
const mercedec2 = cld.image("mercedec1_h63www");
const mercedec3 = cld.image("mercedec2_ppklms");
const mercedec4 = cld.image("mercedec4_ngwrcn");

const mercedec_v1 = cld.image("mercedec_v1-removebg-preview_orny6k");
const mercedec_v1_1 = cld.image("mercedec_v3_cjlhyi");
const mercedec_v1_2 = cld.image("mercedec_v2_xx9lhr");
const mercedec_v1_3 = cld.image("mercedec_v4_sk5tsl");
const mercedec_v1_4 = cld.image("mercedec_v1_tkcyvb");


const Cars = [
  {
    id: 1,
    title: "Tesla Cybertruck",
    category: "Tesla",
    price: "$79,990",

    rating: 4.8,
    reviewsCount: 124,
    availability: "In stock",

    description: "All-electric pickup with futuristic design.",

    properties: {
      motor: "Dual Motor AWD",
      range: "547 km",
      acceleration: "0–100 km/h in 4.1s",
      autonomy: "Electric",
      batteryCapacity: "123 kWh",
      fastCharge: "25 min",
    },

    image: tesla,
    images: [
      { id: 1, src: tesla1 },
      { id: 2, src: tesla2 },
      { id: 3, src: tesla3 },
      { id: 4, src: tesla4 },
    ],
  },
  {
    id: 11,
    title: "Toyota Land Cruiser Prado",
    category: "Toyota",
    price: "$48,000",
    rating: 4.8,
    reviewsCount: 142,
    availability: "Available",
    description:
      "SUV 4x4 robuste et confortable, idéal pour les longs trajets et le tout-terrain, réputé pour sa fiabilité.",

    properties: {
      motor: "2.8L Turbo Diesel / 2.7L Petrol (selon version)",
      range: "N/A",
      acceleration: "0–100 km/h in ~10.8s",
      autonomy: "Off-road 4WD systems (Multi-Terrain / Crawl Control)",
      batteryCapacity: "N/A",
      fastCharge: "N/A",
    },

    image: toyota_v1,
    images: [
      { id: 1, src: toyota_v1_1 },
      { id: 2, src: toyota_v1_2 },
      { id: 3, src: toyota_v1_3 },
      { id: 4, src: toyota_v1_4 },
    ],
  },

  {
    id: 2,
    title: "Tesla Robotaxi",
    category: "Tesla",
    price: "$35,000",
    rating: 4.7,
    reviewsCount: 124,
    availability: "Pre-order",
    description:
      "Autonomous electric vehicle designed for urban transportation and ride-hailing services.",

    properties: {
      motor: "Single Motor RWD",
      range: "400 km",
      acceleration: "0–100 km/h in 5.5s",
      autonomy: "Full Self-Driving",
      batteryCapacity: "75 kWh",
      fastCharge: "20 min",
    },

    image: tesla_v1,
    images: [
      { id: 1, src: tesla_v1_1 },
      { id: 2, src: tesla_v1_2 },
      { id: 3, src: tesla_v1_3 },
      { id: 4, src: tesla_v1_4 },
    ],
  },

  {
    id: 4,
    title: "Ferrari Roma",
    category: "ferrari",
    price: "$222,620",

    rating: 4.9,
    reviewsCount: 89,
    availability: "Limited availability",

    description:
      "Elegant grand touring sports car combining luxury, performance, and Italian design.",

    properties: {
      motor: "V8 Twin-Turbo",
      power: "620 hp",
      acceleration: "0–100 km/h in 3.4s",
      topSpeed: "320 km/h",
      capacity: "123 kWh",
      fastCharge: "25 min",
    },
    image: ferari,
    images: [
      { id: 1, src: ferari1 },
      { id: 2, src: ferari2 },
      { id: 3, src: ferari3 },
      { id: 4, src: ferari4 },
    ],
  },
  {
    id: 5,
    title: "Ferrari LaFerrari",
    category: "ferrari",
    price: "$1,420,000",

    rating: 5.0,
    reviewsCount: 52,
    availability: "Sold out",

    description:
      "Iconic Ferrari hypercar combining a naturally aspirated V12 engine with hybrid technology for extreme performance.",

    properties: {
      motor: "V12 Hybrid (HY-KERS)",
      power: "950 hp",
      acceleration: "0–100 km/h in 2.6s",
      topSpeed: "350+ km/h",
      capacity: "2.3 kWh",
      type: "Lithium-ion (HY-KERS)",
    },

    image: ferari_v1,
    images: [
      { id: 1, src: ferari_v1_1 },
      { id: 2, src: ferari_v1_2 },
      { id: 3, src: ferari_v1_3 },
      { id: 4, src: ferari_v1_4 },
    ],
  },

  {
    id: 6,
    title: "BMW i8 Roadster",
    category: "BMW",
    price: "$90,000",
    rating: 4.7,
    reviewsCount: 124,
    availability: "Used / Discontinued",
    description:
      "Plug-in hybrid sports roadster with futuristic design, scissor-style doors, and strong performance with efficient hybrid tech.",

    properties: {
      motor: "1.5L Turbo + Electric (Plug-in Hybrid AWD)",
      range: "≈ 50 km (electric) / ≈ 500+ km (total)",
      acceleration: "0–100 km/h in ≈ 4.6s",
      autonomy: "Hybrid + Electric modes",
      batteryCapacity: "≈ 11.6 kWh",
      fastCharge: "≈ 3–4 h (AC charging)",
    },

    image: BMW_v1,
    images: [
      { id: 1, src: BMW_v1_2 },
      { id: 2, src: BMW_v1_1 },
      { id: 3, src: BMW_v1_3 },
      { id: 4, src: BMW_v1_4 },
    ],
  },

  {
    id: 7,
    title: "BMW iX1",
    category: "BMW",
    price: "$55,000",
    rating: 4.6,
    reviewsCount: 98,
    availability: "Available",
    description:
      "Compact electric SUV with modern BMW design, premium interior, and efficient range for daily and long-distance driving.",

    properties: {
      motor: "Dual Motor AWD (xDrive)",
      range: "440 km",
      acceleration: "0–100 km/h in 5.6s",
      autonomy: "Driving Assistant (ADAS)",
      batteryCapacity: "64.7 kWh",
      fastCharge: "29 min (10–80%)",
    },

    image: BMW,
    images: [
      { id: 1, src: BMW1 },
      { id: 2, src: BMW2 },
      { id: 3, src: BMW3 },
      { id: 4, src: BMW4 },
    ],
  },

  {
    id: 8,
    title: "Dacia Duster",
    category: "Dacia",
    price: "$18,900",
    rating: 4.5,
    reviewsCount: 156,
    availability: "Available",
    description:
      "SUV robuste et économique, idéal pour la ville et les routes difficiles, avec un excellent rapport qualité/prix.",

    properties: {
      motor: "1.5 dCi / 1.3 TCe (selon version)",
      power: "90–150 hp",
      acceleration: "0–100 km/h in ~10.5s",
      topSpeed: "~180 km/h",
      capacity: "50 L (fuel tank)",
      fastCharge: "N/A",
    },

    image: dacia,
    images: [
      { id: 1, src: dacia1 },
      { id: 2, src: dacia2 },
      { id: 3, src: dacia3 },
      { id: 4, src: dacia4 },
    ],
  },
  {
    id: 9,
    title: "Dacia Logan",
    category: "Dacia",
    price: "$14,500",
    rating: 4.4,
    reviewsCount: 210,
    availability: "Available",
    description:
      "Berline fiable et économique, idéale pour la ville et les trajets quotidiens, avec un excellent rapport qualité/prix.",

    properties: {
      motor: "1.0 TCe / 1.5 dCi (selon version)",
      range: "N/A",
      acceleration: "0–100 km/h in ~11.5s",
      autonomy: "Standard driving (no autonomous mode)",
      batteryCapacity: "N/A",
      fastCharge: "N/A",
    },

    image: dacia_v1,
    images: [
      { id: 1, src: dacia_v1_1 },
      { id: 2, src: dacia_v1_2 },
      { id: 3, src: dacia_v1_3 },
      { id: 4, src: dacia_v1_4 },
    ],
  },
  {
    id: 10,
    title: "Toyota RAV4",
    category: "Toyota",
    price: "$32,500",
    rating: 4.7,
    reviewsCount: 180,
    availability: "Available",
    description:
      "SUV spacieux et fiable, parfait pour la ville et les longs trajets, avec une excellente consommation et un confort moderne.",

    properties: {
      motor: "2.5L Hybrid AWD (selon version)",
      range: "N/A",
      acceleration: "0–100 km/h in ~8.1s",
      autonomy: "Toyota Safety Sense (ADAS)",
      batteryCapacity: "N/A",
      fastCharge: "N/A",
    },

    image: toyota,
    images: [
      { id: 1, src: toyota1 },
      { id: 2, src: toyota2 },
      { id: 3, src: toyota3 },
      { id: 4, src: toyota4 },
    ],
  },
  {
    id: 3,
    title: "Tesla Model Y",
    category: "Tesla",
    price: "$59,990",

    rating: 4.7,
    reviewsCount: 210,
    availability: "In stock",

    description:
      "All-electric compact SUV with modern design and advanced autopilot features.",

    properties: {
      motor: "Dual Motor AWD",
      range: "533 km",
      acceleration: "0–100 km/h in 5.0s",
      autonomy: "Electric",
      capacity: "82 kWh",
      fastCharge: "22 min",
    },

    image: tesla_v2,
    images: [
      { id: 1, src: tesla_v2_1 },
      { id: 2, src: tesla_v2_2 },
      { id: 3, src: tesla_v2_3 },
      { id: 4, src: tesla_v2_4 },
    ],
  },
  {
    id: 12,
    title: "Mercedes-Benz G-Class (G-Wagon)",
    category: "Mercedes",
    price: "$140,000",
    rating: 4.9,
    reviewsCount: 96,
    availability: "Limited availability",
    description:
      "SUV iconique et luxueux, très performant en tout-terrain, avec un design intemporel et une finition premium.",

    properties: {
      motor: "V8 Biturbo / Inline-6 (selon version)",
      range: "N/A",
      acceleration: "0–100 km/h in ~4.5s (selon version)",
      autonomy: "Advanced driver assistance (ADAS)",
      batteryCapacity: "N/A",
      fastCharge: "N/A",
    },

    image: mercedec,
    images: [
      { id: 1, src: mercedec1 },
      { id: 2, src: mercedec2 },
      { id: 3, src: mercedec3 },
      { id: 4, src: mercedec4 },
    ],
  },
  {
    id: 13,
    title: "Mercedes-Benz GLC",
    category: "Mercedes",
    price: "$58,000",
    rating: 4.7,
    reviewsCount: 132,
    availability: "Available",
    description:
      "SUV premium élégant et confortable, parfait pour la ville et les longs trajets, avec technologies modernes et finition haut de gamme.",

    properties: {
      motor: "2.0L Turbo (Mild Hybrid) / Diesel (selon version)",
      range: "N/A",
      acceleration: "0–100 km/h in ~6.2s (selon version)",
      autonomy: "Mercedes-Benz Driver Assistance (ADAS)",
      batteryCapacity: "N/A",
      fastCharge: "N/A",
    },

    image: mercedec_v1,
    images: [
      { id: 1, src: mercedec_v1_1 },
      { id: 2, src: mercedec_v1_2 },
      { id: 3, src: mercedec_v1_3 },
      { id: 4, src: mercedec_v1_4 },
    ],
  },
];


export default Cars;