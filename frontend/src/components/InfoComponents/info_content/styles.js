import styled from "styled-components";
import JCRainbow from "../../../assets/infoPageRainbow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  height: 72vh;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${JCRainbow});
  background-size: cover;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 93%;
  top: -20px;
  @media (max-width: 1024px) {
    top: 0px;
  }
`;

export const NavButton = styled(FontAwesomeIcon)`
  background: #fff;
  border-radius: 100%;
  border: none;
  color: var(--cor-01);
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  aspect-ratio: 1/1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 768px;
  background-color: #ffffff;
  padding: 28px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  gap: 24px;
  & #title {
    font-size: 24px;
    height: 66px;
    @media (max-width: 1024px) {
    font-size: 21px;
    height: 50px;
  }
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-grow: 1;
  border: none;
  background: #f2f6f9;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  height: 50px;
  padding: 0 16px;
  outline: 1px solid #27669c;

  &:placeholder-shown {
    outline: none;
  }
  color: #27669c;

  &:focus {
    outline: none;
  }
  @media (max-width: 1024px) {
    font-size: 1rem;
    width: 100%;
    flex-direction: column;
    height: 45px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  background-color: #f2f6f9;

  color: #27669c;
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
  font-size: 18px;
  resize: none;
  outline: 1px solid #27669c;
  &:placeholder-shown {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  width: 33%;
  height: 50px;
  background-color: #fff;
  color: #27669c;
  font-size: 18px;
  border: 1px solid #81a5c5;
  border-radius: 30px;
  cursor: pointer;
  padding-left: 22px;
  @media (max-width: 1024px) {
    width: 40%
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
  @media (max-width: 425px) {
    padding-left: 10px;
    height: 38px;
  }
`;

export const ArrowCircle = styled.div`
  background: #034c8c20;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  aspect-ratio: 1 / 1;
  width: 48px;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 425px) {
    width: 36px;
  }
`;

export const IconArrow = styled(FontAwesomeIcon)`
  color: #034c8c;
  font-weight: bold;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
`;
