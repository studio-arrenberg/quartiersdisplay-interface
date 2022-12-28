import useSWRImmutable from 'swr/immutable'
import Content from "/components/content/index.js";
import Fallback from "/components/fallback";
import Wrapper from "/components/wrapper";

async function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export default function Home() {
  const location = process.env.NEXT_PUBLIC_LOCATION_STRING;
  const api_endpoint = process.env.NEXT_PUBLIC_QUARTIERSPLATTFORM_API_ENDPOINT;

  const { data, mutate } = useSWRImmutable(api_endpoint ? api_endpoint : null, fetcher);

  console.log("data", data);

  if (!api_endpoint)
    return (
      <Wrapper><Fallback title="Keine Daten" message="Kein API Endpoint Angegeben" /></Wrapper>
    );
  if (!data) return <Wrapper><Fallback title="Loading" message="Daten werden geladen" /></Wrapper>;

  return (
    <Wrapper location={location}>
      <Content content={data.content} meta={data.meta} mutate={mutate} />
    </Wrapper>
  );
}
