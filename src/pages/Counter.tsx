import { textCountState, textState } from "../store/counter";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";

function Counter() {
  const [text, setText] = useRecoilState(textState);

  const count = useRecoilValue(textCountState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Body>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
        <br />
        Count: {count}
      </S.Body>
    </S.Wrapper>
  );
}
const S = {
  Wrapper: styled.div``,
  Body: styled.div`
    padding-top: 5rem;
  `,
};

export default Counter;
