import Head from 'next/head';
import Alert from '../components/_/alert';
import Container from '../components/_/container';
import Footer from '../components/_/footer';
import Header from '../components/_/header';
import Meta from '../components/_/meta';
import Navigation from '../components/_/navigation';

export default function BaseLayout({ children }) {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>Artifactory</title>
        <Meta />
      </Head>

      <div className="bg-primary-2" id="app">
        {/* ALERT */}
        <Alert />

        {/* Navigation Component */}
        <Navigation />

        {/* HEADER */}
        <Header>
          {/* HEADER - LOGO */}
          {/* HEADER - CONTACT */}
        </Header>
        {/* MAIN */}
        <Container>{children}</Container>
        <Footer>
          {/* FOOTER - MORE INFO */}
          {/* FOOTER - SITEMAP */}
        </Footer>
      </div>
    </>
  );
}
