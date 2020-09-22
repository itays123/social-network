import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const SEARCH_QUERY = gql`
  query SearchUsers($q: String) {
    Search(q: $q) {
      _id
      name
      isFollowing
      avatarUrl
    }
  }
`;

export function useSearch() {
  const [searchUser, { data }] = useLazyQuery(SEARCH_QUERY);
  return {
    search: q => searchUser({ variables: { q } }),
    results: data?.Search || [],
  };
}
