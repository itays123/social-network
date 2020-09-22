import { useLazyQuery } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
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
  const [results, setResults] = useState([]);
  const [searchUser, { data, error }] = useLazyQuery(SEARCH_QUERY);

  useEffect(() => {
    if (data?.Search) setResults(data.Search);
  }, [data]);

  useEffect(() => {
    if (error) setResults([]);
  }, [error]);

  return {
    search: q => searchUser({ variables: { q } }),
    results,
  };
}
