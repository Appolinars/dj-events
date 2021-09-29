import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Showcase from './Showcase/Showcase';
import { useRouter } from 'next/dist/client/router';


const Layout = ({title, keywords, description, children}) => {

  const router = useRouter()

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        {router.pathname === "/" && <Showcase />}
        <div className="container">{children}</div>
        <Footer />
      </div>
    );
}

Layout.defaultProps = {
    title: "DJ Events | Find the hottest parties",
    description: "Find the latest DJ",
    keywords: "Music, DJ, events"
}

export default Layout
