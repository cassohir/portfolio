import React from 'react';
import {
  Container,
  Copyright
} from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright href="#" rel="author">
        Cássio Henrique Izidorio Rosa &nbsp;&copy;&nbsp; 2022
      </Copyright>
    </Container>
  );
}