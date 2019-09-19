import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  > div:first-child {
    :first-child {
      margin: 50px 0;
    }
    display: flex;
    > span {
      font-size: 32px;
      font-weight: bold;
      margin-right: auto;
    }
    > button {
      margin-left: 15px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  > span {
    width: 100%;
    margin: 25px 0;
    font-size: 18px;
  }
  > div {
    display: flex;
    width: 100%;
    > span {
      display: flex;
      align-items: flex-end;
      color: #fff7;
      margin-right: 25px;
      > span {
        margin-left: 5px;
        font-size: 16px;
      }
    }
  }
`;

export const Img = styled.picture`
  background-image: url(${({ src }) => src || ''});
  width: 100%;
  border-radius: 5px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
