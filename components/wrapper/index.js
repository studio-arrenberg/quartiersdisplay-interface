export default function Wrapper({ children }) {
  return (
    <div className="w-[1920px] h-[360px] overflow-hidden dark:text-white bg-white dark:bg-black  relative">
      {children}
    </div>

  );
}

