import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import useProfile from './useProfile';

const DELETE_POST = gql`
  mutation DeletePost($postId: Int) {
    RemovePost(postId: $postId) {
      _id
    }
  }
`;

/**
 * @param {Function} refetchPosts
 * @param {*} postId
 * @param {*} authorId
 * @returns {{ delete(): void, allowDelete: boolean }}
 */
export function useDeletePost(refetchPosts = () => {}, postId, authorId) {
    postId = Number(postId);
    const { status, _id } = useProfile();
    const [deletePost, { data, error }] = useMutation(DELETE_POST);
    console.log(_id, authorId);

    useEffect(() => {
        if (!error && data?.RemovePost) {
            refetchPosts();
        }
    }, [data, error, refetchPosts])

    return {
        delete: () => deletePost({ variables: { postId } }),
        allowDelete = status === 200 && _id === authorId
    }
}
