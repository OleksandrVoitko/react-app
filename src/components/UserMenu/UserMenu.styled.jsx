import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0px;
`;
export const WraperAvatarDiv = styled.div`
  width: 32px;
  margin-right: 10px;
`;

export const AvatarImg = styled.img`
  width: 100%;
  border-radius: 50%;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* cursor: pointer; */

  /* &:hover,
  &:focus {
    opacity: 0.8;

    transition: opacity opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  } */
`;

export const WelcomSpan = styled.span`
  margin-right: 10px;
`;

export const NameSpan = styled.span`
  font-weight: 500;
`;
