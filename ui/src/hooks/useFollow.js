import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

const FOLLOW_USER = gql`
  mutation FollowUser($userId: Int) {
    Follow(userId: $userId) {
      isFollowing
      followerCount
    }
  }
`;

const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: Int) {
    Unfollow(userId: $userId) {
      isFollowing
      followerCount
    }
  }
`;

/**
 * handles follow and unfollow mutations
 * @param {boolean} initialIsFollowing
 * @param {number} initialFollowing
 * @param {*} userId
 * @returns {{ followerCount: number, isFollowing: boolean, toggle: Function }}
 */
export function useFollow(initialIsFollowing, initialFollowing, userId) {
  userId = Number(userId);
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [followerCount, setFollowerCount] = useState(initialFollowing);
  const [
    dispatchFollowUser,
    { data: followData, error: followClientError },
  ] = useMutation(FOLLOW_USER);
  const [
    dispatchUnfollowUser,
    { data: unfollowData, error: unfollowClientError },
  ] = useMutation(UNFOLLOW_USER);

  const updateValues = ({
    isFollowing: newIsFollowing,
    followerCount: newFollowerCount,
  }) => {
    setIsFollowing(newIsFollowing);
    setFollowerCount(newFollowerCount);
  };

  const toggleAndIncrement = () => {
    setIsFollowing(true);
    setFollowerCount(n => n + 1);
  };

  const toggleAndDecrement = () => {
    setIsFollowing(false);
    setFollowerCount(n => n - 1);
  };

  useEffect(() => {
    if (followData?.Follow) {
      updateValues(followData.Follow);
    }
  }, [followData]);

  useEffect(() => {
    if (unfollowData?.Unfollow) {
      updateValues(unfollowData.Unfollow);
    }
  }, [unfollowData]);

  useEffect(() => {
    if (followClientError) {
      toggleAndDecrement();
    }
  }, [followClientError]);

  useEffect(() => {
    if (unfollowClientError) {
      toggleAndIncrement();
    }
  }, [unfollowClientError]);

  return {
    isFollowing,
    followerCount,
    toggle: () => {
      if (!isFollowing) {
        toggleAndIncrement();
        dispatchFollowUser({ variables: { userId } });
      } else {
        toggleAndDecrement();
        dispatchUnfollowUser({ variables: { userId } });
      }
    },
  };
}
