import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const CHANGE_AVATAR = gql`
  mutation ChangeAvatar($url: String) {
    SetAvatarUrl(url: $url) {
      avatarUrl
    }
  }
`;

/**
 * @param {string} initialAvatar
 * @returns {{ delete(): void, change(url: string): void, avatarUrl: string }}
 */
export function useChangeAvatar(initialAvatar) {
  const [changeAvatarUrl, { data }] = useMutation(CHANGE_AVATAR);
  const [deleted, setDeleted] = useState(false);
  const avatarUrl = data?.SetAvatarUrl?.avatarUrl;

  return {
    delete: () => {
      changeAvatarUrl({ variables: { url: '' } });
      setDeleted(true);
    },
    change: url => changeAvatarUrl({ variables: { url } }),
    avatarUrl: deleted ? '' : avatarUrl || initialAvatar,
  };
}
