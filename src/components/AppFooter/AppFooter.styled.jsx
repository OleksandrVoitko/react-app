import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 40px 0;
`;

export const TextSmall = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #4c527d;
`;

export const Heart = styled.span`
  margin: 0 5px;

  animation: heartbeat 2500ms infinite linear;

  cursor: default;

  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
`;

export const LinkToGitHub = styled.a`
  margin: 0 5px;

  color: currentColor;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: orangered;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
