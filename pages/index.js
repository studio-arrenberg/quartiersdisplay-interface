import { useState, useEffect, useRef } from "react";
import useSWR, { mutate } from "swr";
import Content from "/components/content";
import Fallback from "/components/fallback";
import Wrapper from "/components/wrapper";

async function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export default function Home() {
  const location = process.env.NEXT_PUBLIC_LOCATION_STRING;
  const api_endpoint = process.env.NEXT_PUBLIC_QUARTIERSPLATTFORM_API_ENDPOINT;
  const { data } = useSWR(api_endpoint ? api_endpoint : null, fetcher);

  console.log("data", data);

  if (!api_endpoint)
    return (
      <Fallback title="Keine Daten" message="Kein API Endpoint Angegeben" />
    );
  if (!data) return <Fallback title="Loading" message="Daten werden geladen" />;

  return (
    <Wrapper location={location}>
      <Content content={data.content} />
    </Wrapper>
  );
}
