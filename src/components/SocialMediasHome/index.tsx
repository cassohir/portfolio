import React from 'react';
import { 
  GitHubIcon,
  TelegramIcon,
  LinkdlnIcon
} from '../Svgs';
import { Container, Icons, Link } from './styles';

export const SocialMediasHome: React.FC = () => {
  return (
    <Container>
      <Icons>
        <Link 
          target="_blank" 
          rel="noopener"
          href="https://www.linkedin.com/in/c%C3%A1ssio-henrique-456320193/"
        >
          <LinkdlnIcon title="Linkdln Logo"/>
        </Link>
        <Link 
          target="_blank" 
          href="https://github.com/cassohir"
          rel="noopener"
        >
          <GitHubIcon title="GitHub Logo"/>
        </Link>
        <Link 
          target="_blank"   
          href="https://t.me/cassio_izidorio"
          rel="noopener"
        >
          <TelegramIcon title="Telegram Logo"/>
        </Link>
      </Icons>
    </Container>
  );
}