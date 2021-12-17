import Head from 'next/head';

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>This is the Ice Cream App!</h1>
      </header>
      <hr />
      {props.children}
      <hr />
      <footer>Website made by Matthew Laude 2021</footer>
    </>
  )
}

export default Layout;