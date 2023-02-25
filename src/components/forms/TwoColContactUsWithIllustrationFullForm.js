import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton, PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/launching.svg";
import { useState } from 'react';
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-700`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-300`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-500 `
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 bg-blue-600`



export default ({
  subheading = "Wyoming Pack",
  heading = <>Formemos tu<span tw="text-blue-800"> LLC</span><wbr/></>,
  description = "Te guiamos paso a paso para formar tu LLC en Wyoming",
  submitButtonText = "Continuar",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const [members, setMembers] = useState([{firstName: "", lastName: ""}]);

  const handleAddMember = (e) => {
    e.preventDefault();
    setMembers([...members, {firstName: "", lastName: ""}]);
  };

  const handleMemberChange = (index, event) => {
    event.preventDefault();
    const newMembers = [...members];
    newMembers[index][event.target.name] = event.target.value;
    setMembers(newMembers);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(members);
  };
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="companyName" placeholder="Nombre de tu LLC" />
              <Input type="text" name="companyNameAlt" placeholder="Nombre alternativo" /> {/* Agregar un QuestionLabel que diga. Lo usaremos si no esta disponible */}
              <Input type="text" name="firstName" placeholder="Nombre" />
              <Input type="text" name="lastName" placeholder="Apellido" />
                 {members.map((member, index) => (
        <div key={index} className="p-6 flex flex-col gap-1" >
          <Input type="text" name={`firstName${index}`}
            value={member.firstName}
            onChange={(e) => handleMemberChange(index, e)}
            placeholder="Nombre"
          />
          <Input type="text" name={`lastName${index}`}
            value={member.lastName}
            onChange={(e) => handleMemberChange(index, e)}
            placeholder="Apellido"
          />
        </div>
      ))}
      <PrimaryButton onClick={handleAddMember}>Añadir miembro</PrimaryButton>
              <Input type="text" name="phone" placeholder="Numero de telefono" />
              <Input type="text" name="mailingAddress" placeholder="Dirección" />
              <Input type="text" name="mailingCity" placeholder="Ciudad" />
              <Input type="text" name="mailingStateForeign" placeholder="Provincia" />
              <Input type="text" name="mailingZipCode" placeholder="Codigo postal" />
              <Input type="email" name="email" placeholder="email" />
              {/*<Textarea name="message" placeholder="Your Message Here" />*/}
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
  
};
