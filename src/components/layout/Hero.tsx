import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <h1>Eveything is better with pizza</h1>
      <p>
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life
      </p>
      <Image src="/images/pizza.png" alt="pizza" width={135} height={135} />
    </section>
  );
};

export default Hero;
