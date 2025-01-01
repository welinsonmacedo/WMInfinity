import React from 'react';
import { ProgressBarContainer, ProgressBarFill } from './EvolutionStyle';

export const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill style={{ width: `${progress}%` }} />
    </ProgressBarContainer>
  );
};
