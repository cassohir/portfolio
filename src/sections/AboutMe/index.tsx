import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import Typed from 'typed.js';
import { ResumeButton } from '../../components/ResumeButton';
import { Container, 
  Content, 
  Image, 
  TextContainer, 
  TitleContainer,
  Title, 
  TitleDynamic,
  DescriptionContainer,
  Divider,
  Description,
  Qualifications
} from './styles';
import { TimeLine } from '../../components/TimeLine';
import { Anchor } from '../../components/Anchor';

interface AboutMeProps {
  themeMode: boolean;
}

export const AboutMe: React.FC<AboutMeProps> = ({ themeMode }) => {
  const uri = "/assets/eu.png";
  const el = useRef<any>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desenvolvedor Front-End", 
        "Desenvolvedor Mobile", 
        "Desenvolvedor Back-End", 
        "Desenvolvedor Full-Stack",
        "Freelancer",
        "Técnico em eletrônica"
      ], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <Anchor id="about" />
      <ScrollReveal 
        origin="top"
        distance="3rem"
      >
        <SectionText 
          title="Sobre mim"
          subTitle="quem eu sou"
        />
        <ScrollReveal
        origin="top"
        distance="3rem"
        delay={1000}
        >
        <Content>
            <Image
              src={uri}
              alt="Foto de Cássio Henrique"
            />
            <TextContainer>
              <TitleContainer>
                <Title>Eu sou &nbsp;</Title>
                <TitleDynamic ref={el}></TitleDynamic>
              </TitleContainer>
              <DescriptionContainer>
                <Divider />
                <Description>
                  Atualmente sou Programador em desenvolvimento Web com React e estou em busca de adquirir experiências e aumentar meus conhecimentos na área. <br/>
                  Estou cursando Engenharia de Produção na UFMG e fiz curso técnico integrado de eletrônica no COLTEC.<br/>
                  Meu foco atual é o ReactJs na versão Web, mas também estudo React Native no ambiente mobile.
                </Description>
              </DescriptionContainer>
              <ResumeButton themeMode={themeMode} />
            </TextContainer>
        </Content>
      </ScrollReveal>
      </ScrollReveal>
      <ScrollReveal 
        origin="top"
        distance="3rem"
      >
        <Qualifications>
          <SectionText 
            title="Qualificação"
            subTitle="minha jornada"
          />
          <ScrollReveal
            origin="top"
            distance="3rem"
            delay={1000}
          >
            <TimeLine />
          </ScrollReveal>
          </Qualifications>
      </ScrollReveal>
    </Container>
  );
}