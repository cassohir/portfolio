import React from 'react';
import { useTheme } from 'styled-components';

export const SendIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" >
      <path fill={theme.colors.background} d="M5.1,90.8l7.6-32.9c0.3-1.4,1.5-2.5,3-2.7l42.5-4.4c1.2-0.1,1.2-1.9,0-2.1l-42.5-4.1c-1.5-0.1-2.7-1.2-3-2.6  L5.1,9.2C4.4,6.4,7.4,4.1,10,5.4l83.1,41.6c2.5,1.3,2.5,4.9,0,6.2L10,94.6C7.4,95.9,4.4,93.6,5.1,90.8z"/>
    </svg>
  );
}