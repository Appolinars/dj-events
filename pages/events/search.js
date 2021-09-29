import EventItem from "@components/EventItem/EventItem";
import Layout from "@components/Layout";
import { API_URL } from "@config/index";
import { useRouter } from "next/router";
import Link from "next/link";
import QueryString from "qs";

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <Layout title="Search results">
        <Link href='/events'><a>Go back</a></Link>
      <h1>Search results for {router.query.term} </h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const query = QueryString.stringify({
    _where: {
      _or: [
        { name_contains: ctx.query.term },
        { performers_contains: ctx.query.term },
        { description_contains: ctx.query.term },
        { venue_contains: ctx.query.term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};
