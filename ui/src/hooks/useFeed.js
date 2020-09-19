import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      _id
      content
      date {
        formatted
      }
      Author {
        _id
        name
        avatarUrl
      }
      likes
      isLiked
    }
  }
`;

export default function useFeed() {
  const { data } = useQuery(FEED_QUERY);
  return { feed: data?.feed || [] };
}
