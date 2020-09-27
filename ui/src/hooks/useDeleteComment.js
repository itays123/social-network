import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import useProfile from './useProfile';

const DELETE_COMMENT = gql`
  mutation DeleteComment($commentId: Int) {
    RemoveComment(commentId: $commentId) {
      Comments(first: 3) {
        _id
        content
        Author {
          name
          avatarUrl
          _id
        }
      }
    }
  }
`;

export function useDeleteComment(postAuthorId) {
  const [RemoveComment] = useMutation(DELETE_COMMENT);
  const { status, _id } = useProfile();

  return {
    allowDelete: commentAuthorId =>
      status === 200 && (_id === postAuthorId || _id === commentAuthorId),
    remove: commentId =>
      RemoveComment({ variables: { commentId: Number(commentId) } }),
  };
}
