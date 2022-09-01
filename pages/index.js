import { useState, useEffect, useRef } from "react";
import useSWR, { mutate } from "swr";
import Posts from "/components/posts";
import Fallback from "/components/fallback";

async function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export default function Home() {
  const location = process.env.NEXT_PUBLIC_LOCATION_STRING;
  const api_endpoint = process.env.NEXT_PUBLIC_QUARTIERSPLATTFORM_API_ENDPOINT;
  const { data } = useSWR(api_endpoint ? api_endpoint : null, fetcher);
  const { data: events } = useSWR(api_endpoint ? `${api_endpoint}/wp/v2/veranstaltungen` : null, fetcher);

  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);

  const getImageForPost = async (postId) => {
    if (!postId) return null;

    const req = await fetch(`${api_endpoint}/wp/v2/media/${postId}`);
    const img = await req.json();
    return img.source_url;
  };

  if (load && data && events) {
    events.forEach(async (event, index) => {
      const url = await getImageForPost(event.featured_media);
      setPosts((prev) => {
        const newStatus = [...prev];
        newStatus[index] = {
          title: event.title.rendered,
          imageUrl: url,
        };
        return newStatus;
      });
    });
    console.log("data", posts);
    setLoad(false);
  }

  if (!api_endpoint) return <Fallback title="Keine Daten" message="Kein API Endpoint Angegeben" />;
  if (!data) return <Fallback title="Loading" message="Daten werden geladen" />;
  if (!events) return <Fallback title="Events loading" message="Veranstaltungen werden geladen" />;
  if (posts.length === 0) return <Fallback title="Keine Posts" message="Es gibt leider keine Posts" />;

  return (
    <div>
        <Posts posts={posts} />
    </div>
  );
}
