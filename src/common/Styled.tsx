import styled from 'styled-components';

export type Styled = {
  className?: string;
};

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

export const HeaderText = styled.span`
  word-break: break-all;
  line-height: 1.6;
  color: #363a3c;
  font-size: 38px;
  font-weight: 400;
`;

export const HeaderTextBold = styled(HeaderText)`
  font-weight: 700;
`;

export const HeaderTextLight = styled(HeaderText)`
  font-weight: 100;
`;

export const HR = styled.hr`
  height: 1px;
  margin: 30px auto;
  background: #e1e4e6;
  display: block;
  border: none;
  width: 100%;
  box-sizing: content-box;
  color: #363a3c;

  &:before {
    content: ' ';
    display: table;
    box-sizing: border-box;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

export default styled;
