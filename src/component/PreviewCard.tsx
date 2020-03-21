import React from 'react';
import { Card } from 'antd';

import styled from '@style';
import { Component } from '@common';

const { Meta } = Card;

type Props = Component & {
  url: string;
};

const PreviewCard: React.FC<Props> = ({ url, className }) => (
  <img src={url} alt="" className={className} />
);

export default styled(PreviewCard)`
  width: 100%;
  object-fit: cover;
  height: 250px;
  padding: 0 20px 0 0;
`;
