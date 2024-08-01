export const AnimateBtn = ({ children, classList }) => {
  return (
    <div
      className={
        "group relative flex h-auto w-auto cursor-pointer items-center overflow-hidden " +
        classList
      }
    >
      <span className="block px-6 py-1.5 leading-[100%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[130%]">
        {children}
      </span>
      <span className="absolute px-6 py-1.5 left-0 translate-y-[140%] rotate-[20deg] transition-transform duration-300 ease-in-out group-hover:translate-y-[0] group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};
