import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      _id
      title
      content
      date
      Author {
        _id
        name
      }
    }
  }
`;

export default function useFeed() {
  const { data } = useQuery(FEED_QUERY);
  return { feed: data?.feed || [] };
}
