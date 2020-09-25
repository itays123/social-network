import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

const POST = gql`
  mutation PostIt($gallery: [String] = [], $content: String = '') {
      NewPost(content: $content, gallery: $gallery) {
          _id
      }
  }
`;

/**
 * contains all functionality and error handling to post
 * @returns {{ post(gallery: string[], content: string, callback: Function = () => {}): void }}
 */
export function usePost() {
  const [callback, setCallback] = useState(() => () => {});
  const [PostIt, { error, data }] = useMutation(POST);
  useEffect(() => {
    if (!error && data?.NewPost?._id) {
      callback(data.NewPost._id);
    }
  }, [data, error]);
  return {
    post(gallery, content, callback) {
      setCallback(callback);
      PostIt({ variables: { gallery, content } });
    },
  };
}
