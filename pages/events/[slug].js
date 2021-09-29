import Layout from "@components/Layout"
import EventMap from "@components/EventMap/EventMap";
import { API_URL } from "@config/index.js"
import Link from 'next/link';
import Image from 'next/image';
import styles from "./event.module.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventPage = ({evt}) => {

    return (
      <Layout>
        <div className={styles.event}>
          <div>
            {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
          </div>
          <h1>{evt.name}</h1>
          <ToastContainer />
          {evt.image && (
            <div>
              <Image src={evt.image.url} width={960} height={600} />
            </div>
          )}

          <h3>Performers:</h3>
          <p>{evt.performers}</p>
          <h3>Description:</h3>
          <p>{evt.description}</p>
          <h3>Venue: {evt.venue}</h3>
          <p>{evt.address}</p>

          <EventMap evt={evt} />

          <Link href="/events">
            <a>{"<"} Go back to events</a>
          </Link>
        </div>
      </Layout>
    );
}

// export const getStaticProps = async (ctx) => {

//     const res = await fetch(`${API_URL}/events?slug=${ctx.params.slug}`)
//     const events = await res.json()

//     return {
//         props:{
//             evt: events[0]
//         },
//         revalidate: 1
//     }
// }

// export const getStaticPaths = async () => {

//     const res = await fetch(`${API_URL}/events`)
//     const events = await res.json()

//     const paths = events.map(evt => {
//         return {
//             params: {slug: evt.slug}
//         }
//     })

//     return {
//         paths,
//         fallback: true
//     }
// }

export const getServerSideProps = async (ctx) => {

    const res = await fetch(`${API_URL}/events?slug=${ctx.query.slug}`)
    const events = await res.json()

    return {
        props:{
            evt: events[0]
        }
    }
}

export default EventPage
