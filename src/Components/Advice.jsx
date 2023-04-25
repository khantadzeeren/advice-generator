import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Advice = () => {
  const URL = "https://api.adviceslip.com/advice";
  
  const [text, setText] = useState("");
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        
        setText(json.slip);
        console.log(json.slip.id, json.slip.advice);
      });
    };
    if (text === "") {
      fetchData();
    }
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Box>
      <AdviceNumber>Advice #{text.id}</AdviceNumber>
      <Quote>{text.advice}</Quote>

      <PatternMobile width="295" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </PatternMobile>

      <PatternDesktop
        width="444"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
          <g transform="translate(212)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </PatternDesktop>

      <LogoWrapper onClick={reloadPage}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </LogoWrapper>
    </Box>
  );
};

export default Advice;
    
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 343px;
    height: 100%;
    background-color: #313a48;
    box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
    border-radius: 10px;
    padding: 40px 24px 64px 24px;
    position: relative;
    row-gap: 24px;
    @media (min-width: 375px) {
        width: 540px;
        padding: 48px;
        padding-bottom: 72px;
    }
`;

const AdviceNumber = styled.h2`
    color: #53ffaa;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 3.45714px;
    text-transform: uppercase;
        @media (min-width: 375px) {
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 4.08571px;
    }
`;

const Quote = styled.h1`
    color: #CEE3E9;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.257143px;
    @media (min-width: 375px) {
        padding-bottom: 16px;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: -0.3px;
        }
`;

const LogoWrapper = styled.div`
    width: 64px;
    height: 64px;
    background-color: #53ffaa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    &:active {
        box-shadow: 0px 0px 40px #53FFAA;
    }
`;

const PatternMobile = styled.svg`
    @media (min-width: 375px) {
        display: none;
    }
`;

const PatternDesktop = styled.svg`
    @media (max-width: 375px) {
        display: none;
    }
`