export type PriceingPlan = {
  level: string;

  price: string;
  services: string[];
};

export const pricingPlan: PriceingPlan[] = [
  {
    level: "free",

    price: "$0/month",
    services: [
      "4 free credits milege",
      "Basec Supports",
      "Limited Features ",
      "community acess",
    ],
  },

  {
    level: "Pro",

    price: "$30/month",
    services: [
      "unlimited credits",
      "Basec Supports",
      "Limited Features ",
      "community acess",
    ],
  },
  {
    level: "Enterprice",

    price: "$70/month",
    services: [
      "unlimited credits",
      "Basec Supports",
      "Limited Features ",
      "community acess",
      "monthly Updates",
    ],
  },
];
