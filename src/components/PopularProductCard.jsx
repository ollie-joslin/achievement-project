import { star } from "../assets/icons";

const PopularProductCard = ({
  imgURL,
  name,
  rating,
  link,
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:justify-center max-sm:items-center">
      <a
        href={link}
        className="w-[280px] h-[280px]"
      >
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] cursor-pointer"
        />
      </a>

      <div className="mt-3 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-montserrat truncate">
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
