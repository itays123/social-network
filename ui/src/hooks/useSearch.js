import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';

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
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(data?.Search || []);
  }, [data]);

  return {
    search: q => searchUser({ variables: { q } }),
    results,
    clear: () => setResults([]),
  };
}
