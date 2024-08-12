import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCard";

const Client = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        A small Selection of <br />
        <span className="text-purple">Recent Projects </span>
      </h1>
      <div className="flex  items-center justify-center p-4  mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div
        className="flex justify-center flex-wrap items-center gap-6 sm:gap-16 mt-14 px-10
      "
      >
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className="flex items-center gap-2 justify-center">
            <img src={img} alt={nameImg} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
