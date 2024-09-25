import { CustomButton } from "../../custom-button";
import { Link } from "react-router-dom";

export const MenuProductions = () => {
  return (
    <ul className="ml-[300px] mt-[2px] w-54 border-t-2 border-gray-500 rounded-sm flex flex-col  absolute bg-customGray drop-d text-white">
      <div className="p-4 border-b-2 border-gray-500 flex justify-start">
        <Link to="/productions#structures">
          <CustomButton>Металлоконструкции</CustomButton>
        </Link>
      </div>
      <div className="p-4 flex justify-start">
        <Link to="/productions#restoration">
          <CustomButton>Механическая обработка</CustomButton>
        </Link>
      </div>
    </ul>
  );
};
