import Navigation from './navigation'
import Head from 'next/head'

const Container = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
      ></link>
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
)

export default Container
