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
 * @returns {{ post(gallery: string[], content: string): void }}
 */
export function usePost() {
  const [PostIt, { error, data }] = useMutation(POST);
  useEffect(() => {
    if (!error && data?.NewPost?._id) {
      console.log(data);
    }
  }, [data, error]);
  return {
    post(gallery, content) {
      PostIt({ variables: { gallery, content } });
    },
  };
}
