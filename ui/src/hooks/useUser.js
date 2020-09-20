import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
  query UserQuery($userId: String!) {
    User(_id: $userId) {
      name
      followerCount
      followingCount
      avatarUrl
      created {
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
  }
`;

export default function useUser(userId) {
  const { data, loading } = useQuery(USER_QUERY, { variables: { userId } });
  const isFound = loading ? true : data?.User.length > 0 ? true : false;
  const user = data?.User?.[0] || {};
  return { ...user, isFound };
}
