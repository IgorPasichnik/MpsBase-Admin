import { CustomButton } from "../../custom-button";
import { Link } from "react-router-dom";

export const MenuProducts = () => {
  return (
    <ul className="ml-36 mt-[2px] w-54 border-t-2 border-gray-500 rounded-sm flex flex-col  absolute bg-customGray drop-d text-white">
      <div className="p-4 border-b-2 border-gray-500 flex justify-start">
        <Link to="/products#sheet">
          <CustomButton>Листовой прокат</CustomButton>
        </Link>
      </div>
      <div className="p-4 border-b-2 border-gray-500 flex justify-start">
        <Link to="/products#variety">
          <CustomButton>Сортовой прокат</CustomButton>
        </Link>
      </div>
      <div className="p-4 flex justify-start">
        <Link to="/products#pipe">
          <CustomButton>Трубная продукция</CustomButton>
        </Link>
      </div>
    </ul>
  );
};
