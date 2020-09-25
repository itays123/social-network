import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

const POST = gql`
  mutation PostIt($gallery: [String] = [], $content: String = "") {
    NewPost(content: $content, gallery: $gallery) {
      _id
    }
  }
`;

/**
 * contains all functionality and error handling to post
 * @param {Function} refetchPosts
 * @returns {{ post(gallery: string[], content: string): void }}
 */
export function usePost(refetchPosts = () => {}) {
  const [PostIt, { error, data }] = useMutation(POST);
  useEffect(() => {
    if (!error && data?.NewPost?._id) {
      refetchPosts();
    }
  }, [data, error, refetchPosts]);
  return {
    post(gallery, content) {
      PostIt({ variables: { gallery, content } });
    },
  };
}
