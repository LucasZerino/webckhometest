import React from 'react'
import Layout from '../components/layout/index'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../sections/hero/Hero'
import AboutOne from '../sections/about/AboutOne'
import ServicesOne from '../sections/services/ServicesOne.js'
import TestimonialsThree from '../sections/testimonials/TestimonialsThree.js'
import ContactCreative from '../sections/contact/ContactCreative.js'
import ClientsOne from '../sections/clients/ClientsOne'




class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div id='home'>
        <Helmet>
        <title>{site.meta.title}</title>
        <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['home', 'sobre nos', 'serviços', 'avaliações', 'contato']}
        >
        <Hero />
        <AboutOne/>
        <ServicesOne />
        <TestimonialsThree />
        <ClientsOne />  
        <ContactCreative />
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`