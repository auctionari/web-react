import React from 'react';
import { Statistic } from 'antd';

import { Header, Footer, Body } from '@layout/Layout';
import styled, {
  Container,
  HeaderText,
  HeaderTextBold,
  HR,
  Styled,
} from '@style';

import 'reset.css';
import Home from '@view/Home';

const { Countdown } = Statistic;
const App = ({ className }: Styled) => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <div className={className}>
      <Header />
      {/* <HR /> */}
      <Body>
        <Container>
          <Home />

          <div className="body">
            <HeaderText>
              슈퍼스타 <HeaderTextBold>이. 지. 영</HeaderTextBold>! 등장하기까지
              <br />
              <Countdown
                className="countdown"
                value={deadline}
                format="HH시 mm분 ss초 SSS"
              />
              남음
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

  .countdown > * {
    font-size: 38px;
    display: inline;
  }
`;
