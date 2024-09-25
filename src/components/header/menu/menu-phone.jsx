import { CustomButton } from "../../custom-button";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul className="ml-4 w-[368px] border-t-2 border-gray-500 rounded-sm flex flex-col absolute bg-customGray drop-d text-white">
      <Link to="/#about-company">
        <CustomButton>
          <div className="p-4 flex justify-start active:text-customOrange">
            О компании
          </div>
        </CustomButton>
      </Link>
      <div className="border-b-2 border-gray-500 w-full" />

      <Link to="/products#sheet">
        <CustomButton>
          <div className="p-4 flex justify-start">Продукция</div>
        </CustomButton>
      </Link>
      <div className="border-b-2 border-gray-500 w-full" />

      <Link to="/productions#structures">
        <CustomButton>
          <div className="p-4 flex justify-start">Производство</div>
        </CustomButton>
      </Link>
      <div className="border-b-2 border-gray-500 w-full" />

      <Link to="/#contacts">
        <CustomButton>
          <div className="p-4 flex justify-start">Контакты</div>
        </CustomButton>
      </Link>
    </ul>
  );
};
