import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Location = (props) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              props.getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton
              onClick={() => {
                setInputMode(false);
              }}
            >
              X
            </CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <City
        onClick={() => {
          setInputMode(true);
        }}
      >
        {props.city}
      </City>
      <Country>{props.country}</Country>
    </Container>
  );
};

export default Location;

const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;
const InputField = styled.input`
  padding: 5px;
  background: transparent;
  border: none;
  color: white;
  width: 80px;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  color: white;
  padding: 5px;
  border: none;
  background: #394e70;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
`;
const CancelButton = styled.span`
  display: flex;
  font-size: 0.8rem;
  position: absolute;
  background: #557fc2;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  cursor: pointer;
  top: -8px;
  right: -10px;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.2rem;
`;
