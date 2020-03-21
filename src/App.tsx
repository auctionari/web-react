import React from 'react';
import { Button } from 'antd';

import { Header, Footer, Body } from '@layout/Layout';
import styled, {
  Container,
  HeaderText,
  HeaderTextBold,
  HR,
  Styled,
} from '@style';

import 'reset.css';

const App = ({ className }: Styled) => {
  return (
    <div className={className}>
      <Header />
      <HR />
      <Body>
        <Container>
          <div className="body">
            <HeaderText>
              아, 깜빡할 뻔 했군요.
              <br />
              소개합니다, 슈퍼스타 <HeaderTextBold>이. 지. 영</HeaderTextBold>!
            </HeaderText>
          </div>
        </Container>
      </Body>

      <Footer>
        <Container> powered by jaeeunna </Container>
      </Footer>
    </div>
  );
};

export default styled(App)`
  * {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', sans-serif, serif;
  }

  display: flex;
  flex-direction: column;

  div.body {
    line-height: 0.5;
  }
`;
