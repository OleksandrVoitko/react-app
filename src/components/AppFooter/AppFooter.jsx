import { Footer, Heart, LinkToGitHub, TextSmall } from './AppFooter.styled';

const AppFooter = () => {
  return (
    <Footer>
      <TextSmall>
        &copy; {new Date().getFullYear()} Developed with{' '}
        <Heart role="img" aria-label="heart">
          ❤
        </Heart>{' '}
        by{' '}
        <LinkToGitHub
          href="https://github.com/OleksandrVoitko"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
        >
          <span>OleksandrVoitko</span>
        </LinkToGitHub>
      </TextSmall>
    </Footer>
  );
};

export default AppFooter;
