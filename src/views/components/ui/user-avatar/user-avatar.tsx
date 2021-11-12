import { FC } from 'react';
import styled from 'styled-components';

interface AvatarProps {
  text: string;
}

export const UserAvatar: FC<AvatarProps> = ({ text }) => {
  return <Avatar>{text}</Avatar>;
};

const Avatar = styled.div`
  background: gainsboro;
  padding: 5px;
  position: relative;
  display: block;
  float: left;
  border-radius: 25em;
  font-weight: 600;
  text-align: center;
  width: 20px;
  top: 0;
`;
