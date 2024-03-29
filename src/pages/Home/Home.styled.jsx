import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BleackSpan = styled.span`
  color: #4c527d;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #4c527d;
`;

export const IconWraper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.span`
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC1klEQVRoQ+2Z21XbQBCG/7ULCKkgTgUxFcR0YCrAl7wHKvBQQeA9Fu4AqCCkgogKcCqIU4C1OaONOLYl7e5IstY+B73wwMwy385l/10UjvxTRx4/3gBCZ7A8AyPqQ3XeOQPUyTMWtHLa7ckgD8CBd3APhZ7n34wxp1NP28bN8gATehEEbwJSOMN3emo8Oo8F8wBT0h5+2yYHBsD17K79TQSNK0R0IwZvwKGohJ6g8Fm2tn7E/Hoo82nGuqiEFgAuRMtrrBDRe5FPQ8ZFGSAozMTrr3GKBcViv5oOeYAvNIDGD/G6gfqg6Bw4QRd/KgAsEdFHsV9Nh+KTeEIxFD6J1w5QRsUA09kNoL6KAQKcByUAxCPxXgjwG2v029ZF5WJumgo03wPtL9YYHMYUyrZ9Sr7nQbDgjQwr+1iVdvHLWUYB6n4zJvuNbEJ2WaExRpRmKthnB5hamznoPSDbMfed2H4mnGNOD8G239oDWVQ2acEiLkk10DIUhDsDHJm9F2Kscdb2/PcvIbYcUQ9dvJTussYCEY1DZMEvAyYLl1D4ZoEIcivzB3CXEhBgrMoATCnxpaVcYrQMIQPgLNjPBlNhWhGi2bWzJ0bEd487aAwAPCDBrVRPyQFMKY2gcGcNkBs7wVXpdDLB882vv7UOj2aFGFqxClghUTEsr3/VAEwmfMQej9hxblfLgrftiMYSCc5316oO4A+xXVJVgn8Fyz/f1AMQQWAJpQjQl7mycTbLfwONn4iI++X1qw9geqLaU4xv4Jnd3gB8G1sa8K79XgGM5OBLEKvTD3VjLfTfO4CBOEFXU6VXDRd1KwBZEEaG86htLhutAmQgRgSS4IWjPA9BALKy6oBBeIT6PtXkQYIBbIbCMgQpjPzp8iAAMhhWth3wC+DQ+x8qBS/gzRxkrunh83tu+gR9KPSh0Ut/bpabxjMSDHfv34cD4ANZYPMGUHHjGnM7+gz8A29K+DHRISQ9AAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: 50px;
  height: 50px;
  width: 50px;
  display: inline-block;

  animation-name: trin;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes trin {
    from {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    20%,
    32%,
    44%,
    56%,
    68% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    23%,
    35%,
    47%,
    59%,
    71% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    26%,
    38%,
    50%,
    62%,
    74% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    29%,
    41%,
    53%,
    65%,
    77% {
      transform: rotate3d(0, 0, 1, -15deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
`;
