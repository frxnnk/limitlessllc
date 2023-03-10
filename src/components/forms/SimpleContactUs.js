import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-blue-900 text-white rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  
  input,textarea {
    ${tw`w-full bg-transparent text-white text-base font-medium tracking-wide border-b-2 py-2 text-white hocus:border-indigo-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-white`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-blue-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-blue-700 hocus:-translate-y-px hocus:shadow-xl`;
const DropdownStyle = tw.select`w-full bg-transparent text-white text-base font-medium tracking-wide border-b-2 py-2 text-white hocus:border-indigo-400 focus:outline-none transition duration-200`;
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <div>
      <select value={selectedOption} onChange={handleSelect}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-blue-500 fill-current w-24`

export default () => {
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">  {/*id="contactUs"*/}
            <h2>Contanos sobre vos :)</h2>
            <form  action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Nombre</Label>
                    <Input id="name-input" type="text" name="name" placeholder="" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Apellido</Label>
                    <Input id="name-input" type="text" name="name" placeholder="" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                      <Label htmlFor="email-input">Nacionalidad</Label>
                      <DropdownStyle>
                        <Dropdown />
                      </DropdownStyle>
                  </InputContainer>
                  <TextArea name="message" placeholder="Dejanos tu mensaje" />
                </Column>
              </TwoColumn>
              <TwoColumn>
              <Column>
                <InputContainer>
                      <Label htmlFor="input">Provincia</Label>
                      <Input id="name-input" type="text" name="name" placeholder="" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="input">Ciudad</Label>
                      <Input id="name-input" type="text" name="name" placeholder="" />
                  </InputContainer>
                  <InputContainer>
                      <Label htmlFor="input">Calle</Label>
                      <Input id="name-input" type="text" name="name" placeholder="" />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit" value="Submit">Enviar</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
