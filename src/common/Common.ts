import { Styled } from '@style';

export type Traceable = {
  traceId?: string;
};

export type Component = Traceable & Styled;
