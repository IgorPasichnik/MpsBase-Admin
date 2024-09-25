export const CustomButton = ({
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="lg:hover:text-customOrange active:text-customOrange focus:outline-none transition-colors duration-300 ease-in-out cursor-pointer flex items-center justify-center"
    >
      {children}
    </button>
  );
};
