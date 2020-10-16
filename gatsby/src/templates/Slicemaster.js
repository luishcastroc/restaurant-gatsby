import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import SEO from '../components/SEO';

export default function SingleSlicemasterPage({ data }) {
  const { person } = data;
  return (
    <>
      <SEO title={person.name} image={person.image.asset.src} />
      <div className="center">
        <Img fluid={person.image.asset.fluid} />
        <div>
          <h2 className="mark">{person.name}</h2>
          <p className="description">{person.description}</p>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
