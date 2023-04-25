import { useEffect } from 'react';
import useSWRImmutable from 'swr/immutable'
import Content from "/components/content/index.js";
import Fallback from "/components/fallback";
import Wrapper from "/components/wrapper";
import DemoData from "/lib/demo.json"
import FallBackData from "/lib/fallback.json"

async function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export default function Home() {
  const location = process.env.NEXT_PUBLIC_LOCATION_STRING;
  const api_endpoint = process.env.NEXT_PUBLIC_QUARTIERSPLATTFORM_API_ENDPOINT;

  let { data, mutate } = useSWRImmutable(api_endpoint , fetcher, {
    fallbackData: FallBackData
  });

  if (process.env.NEXT_PUBLIC_QUARTIERSPLATTFORM_API_ENDPOINT == undefined) {
    data = DemoData;
  }

  console.log("data", data);

  useEffect(() => {
    // force reload page
    setTimeout(() => {
      window.location.reload(); 
    }, 1000 * 60 * 8); // every 8 hours
  })

  if (!data) return <Wrapper><Fallback title="Loading" message="Daten werden geladen" /></Wrapper>;

  return (
    <Wrapper location={location}>
      <Content content={data.content} meta={data.meta} mutate={mutate} />
    </Wrapper>
  );
}
