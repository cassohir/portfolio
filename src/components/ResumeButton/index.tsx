import React from 'react';
import { ResumeIcon } from '../Svgs';
import { Container, Content, Download } from './styles';

interface ResumeButtonProps {
  themeMode: boolean;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ 
  themeMode 
}) => {
  return (
    <Download 
      href="https://drive.google.com/file/d/11tt6HLxz_aZyYjck4pHSy6I5lUSTUfEo/view?usp=sharing"
      target="_blank"
      rel="noopener"
    >
      <Container themeMode={themeMode}>
        <Content>
          <ResumeIcon />Currículo
        </Content>
      </Container>
    </Download>
  );
}