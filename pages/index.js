// import Image from "next/image";

export default function Home() {

  const location = process.env.NEXT_PUBLIC_LOCATION_STRING

  return (
    <div>
      <h1>Hallo Welt</h1>
      <p>Ich bin ein quartiersdisplay</p>
      <p>{location ? location : null}</p>
    </div>
  );
}
