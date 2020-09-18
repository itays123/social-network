import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

const LIKE_POST = gql`
  mutation LikePost($postId: Int) {
    Like(postId: $postId) {
      isLiked
      likes
    }
  }
`;

const UNLIKE_POST = gql`
  mutation UnlikePost($postId: Int) {
    Unlike(postId: $postId) {
      isLiked
      likes
    }
  }
`;

/**
 * handles like and unlike mutations
 * @param {boolean} initialValue
 * @param {number} initialLikes
 * @param {*} postId
 * @returns {{ likes: number, isLiked: bookean, toggle: Function }}
 */
export function useLike(initialIsLiked, initialLikes, postId) {
  postId = Number(postId);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [
    dispatchLikePost,
    { data: likeData, error: likeClientError },
  ] = useMutation(LIKE_POST);
  const [
    dispatchUnlikePost,
    { data: unlikeData, error: unlikeClientError },
  ] = useMutation(UNLIKE_POST);

  const updateValues = ({ isLiked: newIsLiked, likes: newLikes }) => {
    setIsLiked(() => newIsLiked);
    setLikes(() => newLikes);
  };

  const toggleAndIncrement = () => {
    setIsLiked(true);
    setLikes(n => n + 1);
  };

  const toggleAndDecrement = () => {
    setIsLiked(false);
    setLikes(n => n - 1);
  };

  useEffect(() => {
    if (likeData?.Like) {
      updateValues(likeData.Like);
    }
  }, [likeData]);

  useEffect(() => {
    if (unlikeData?.Like) {
      updateValues(unlikeData.Like);
    }
  }, [unlikeData]);

  useEffect(() => {
    if (likeClientError) {
      toggleAndDecrement();
    }
  }, [likeClientError]);

  useEffect(() => {
    if (unlikeClientError) {
      toggleAndIncrement();
    }
  }, [unlikeClientError]);

  return {
    isLiked,
    likes,
    toggle: () => {
      if (!isLiked) {
        toggleAndIncrement();
        dispatchLikePost({ variables: { postId } });
      } else {
        toggleAndDecrement();
        dispatchUnlikePost({ variables: { postId } });
      }
    },
  };
}
