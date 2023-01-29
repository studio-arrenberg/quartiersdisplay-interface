export default function Wrapper({ children }) {
  return (
    <>
      <div className="inset-0 fixed bg-amber-500/10 z-20" />
      <div className="w-[1920px] h-[360px] overflow-hidden dark:text-white bg-white dark:bg-black  relative">
        {children}
      </div>
    </>
  );
}

