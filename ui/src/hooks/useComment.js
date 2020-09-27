import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

const COMMENT = gql`
  mutation CommentIt(content: String, postId: Int) {
    Comment(content: $content, postId: $postId) {
      _id
    }
  }
`;

export function useComment(postId) {
  postId = Number(postId);
  const [PostComment] = useMutation(COMMENT);
  return {
    comment: content => PostComment({ variables: { postId, content } }),
  };
}
