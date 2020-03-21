import React from 'react';
import { Component } from '@common';
import styled, {
  Container,
  HeaderText,
  HeaderTextBold,
  HeaderTextLight,
} from '@style';

const Header: React.FC<Component> = ({ className, traceId }) => {
  return (
    <section className={className}>
      <Container>
        <div className="menu">
          Auctionary
          <span className="lang">KO | EN</span>
        </div>

        <HeaderTextBold>우리가 뭐 하는 사람들이냐구요? </HeaderTextBold>
        <HeaderText>
          경매를 통해 공정한 거래를 추구하고, 최대 다수의 최대 행복을 꿈꾸죠.{' '}
        </HeaderText>
        <HeaderTextLight>
          옥나리와 함께 재미있는 일들을 많이 만들어봐요
          スポカハンサンスは多国語UIに対応するため、Noto
          SansとLatoを元にカスタムしたフォントです。改善を繰り返し、進化したスポカハンサンスを公開します{' '}
        </HeaderTextLight>
      </Container>
    </section>
  );
};

const SHeader = styled(Header)`
  padding-top: 30px;
  font-size: 22px;
  font-weight: 700;
  color: #363a3c;

  div.menu {
    padding: 0 0 100px 0;
  }

  span.lang {
    float: right;
    color: #a9afb3;
  }
`;

const Body: React.FC<Component> = ({ traceId, children }) => {
  return <section>{children}</section>;
};

const SBody = styled(Body)`
  font-size: 25px;
`;

const Footer: React.FC<Component> = ({ className, traceId, children }) => {
  return <section className={className}>{children}</section>;
};

const SFooter = styled(Footer)`
  margin-top: 200px;
`;

export { SHeader as Header, SBody as Body, SFooter as Footer };
