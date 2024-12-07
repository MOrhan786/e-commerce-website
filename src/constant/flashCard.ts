export interface FlashCard {
    discountBtn: boolean;
    discountPrice: number;
    trashIcon: boolean;
    heartIcon: boolean;
    eyeIcon: boolean;
    src: string;
    Heading: string;
    price: number;
    oldPrice?: number;
    star: number;
    reviews: number;
}


export const flashCard: FlashCard[]= [
    {
        discountBtn: true ,
        discountPrice: 40,
        trashIcon: true ,
        heartIcon: true ,
        eyeIcon: true ,
        src: "/image/redplaygame-img.svg",
        Heading: "HAVIT HV-G92 Gamepad" ,
        price: 120 ,
        oldPrice: 160 ,
        star: 5,
        reviews: 88
    },
    {
        discountBtn: true,
        discountPrice: 35,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,
        src: "/image/keyboard-img.svg",
        Heading: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        star: 4,
        reviews: 75
      },
      {
        discountBtn: true,
        discountPrice: 30,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,
        src: "/image/lcd-img.svg",
        Heading: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        star: 5,
        reviews: 99
      },
      {
        discountBtn: true,
        discountPrice: 25,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,
        src: "/image/chair-img.svg",
        Heading: "S-Series Comfort Chair",
        price: 375,
        oldPrice: 400,
        star: 5,
        reviews: 99
      },
      {
        discountBtn: true,
        discountPrice: 25,
        trashIcon: false,
        heartIcon: true,
        eyeIcon: true,
        src:"/image/chair-img.svg" ,
        Heading: "S-Series Comfort Chair",
        price: 375,
        oldPrice: 400,
        star: 5,
        reviews: 99
      }
]