import _fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';

const gql = String.raw;

const info = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
    slug {
      current
    }
`;

export default function useLatestData() {
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();

  useEffect(function () {
    _fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
        query {
          StoreSettings(id: "downtown"){
            name
            slicemasters{
              ${info}
            }
            hotSlices{
              ${info}
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemasters);
      });
  }, []);

  return { hotSlices, slicemasters };
}
