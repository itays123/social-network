import { useQuery, gql } from '@apollo/client';
import useProfile from './useProfile';

const FEED_QUERY = gql`
  {
    feed {
      _id
      content
      gallery
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
  const { data, refetch } = useQuery(FEED_QUERY);
  const profile = useProfile();
  return {
    feed: data?.feed || [],
    refetch: () => {
      refetch();
      if (profile.refetch) profile.refetch();
    },
  };
}
