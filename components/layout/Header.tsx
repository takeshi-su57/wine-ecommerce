import Container from 'styles/layout';
import { TitleHeader } from 'styles/layout/Header';

const Header = () => {
  return (
    <Container.Header>
      <TitleHeader data-cy="home_page_title">Hello World</TitleHeader>
    </Container.Header>
  );
};

export default Header;
