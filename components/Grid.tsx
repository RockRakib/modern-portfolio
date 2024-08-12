import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";

const Grid = () => {
  return (
    <div id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              className={className}
              title={title}
              description={description}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </div>
  );
};

export default Grid;
