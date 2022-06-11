import Container from 'styles/layout';
import { TitleHeader } from 'styles/layout/Header';

const Header = () => {
  return (
    <Container.Header>
      <TitleHeader data-cy="header_logo">Wine</TitleHeader>
    </Container.Header>
  );
};

export default Header;
