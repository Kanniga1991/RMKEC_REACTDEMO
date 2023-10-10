import { Voting } from "./Voting";

export function Brands() {
  const brands = [
    {
      Name: "SAMSUNG",
      Image: "https://cdn1.smartprix.com/rx-izLSMVlI0-w1200-h1200/zLSMVlI0.jpg",
      Model: "S23",
      Specs: {
        Os: "Android",
        Processor: "Samsung Exynos 2100",
        Storage: "128GB",
      },
    },
    {
      Name: "APPLE",
      Image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=90",
      Model: "I14Pro",
      Specs: {
        Os: "ioS",
        Processor: "A16 Bionic",
        Storage: "256GB",
      },
    },
    {
      Name: "ONEPLUS",
      Image: "https://d2xamzlzrdbdbn.cloudfront.net/products/41c99199-b220-4bc9-b0d3-629c7d81195922021323.jpg",
      Model: "O14",
      Specs: {
        Os: "Android",
        Processor: "AMOLED ",
        Storage: "128GB",
      },
    },
  ];
  return (
    <div className="brands">
      {/* <Voting brandname="Samsung" Model="S12"/>
          <Voting brandname="Apple" Model="I14"/>
          <Voting brandname="Oneplus" Model="O13"/>
          <Voting brandname="Redmi" Model="R13Pro"/> */}
      {brands.map((mob) => (
        <Voting
          brandname={mob.Name}
          img={mob.Image}
          model={mob.Model}
          specific={mob.Specs} />
      ))}
    </div>
  );
}
