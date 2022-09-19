export default function Wrapper({ children }) {
  return (
    <div className="w-[1920px] h-[360px] overflow-hidden bg-black relative">
      {children}
    </div>

  );
}

