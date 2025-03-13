import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const SlickCardContainer = styled(motion.div)`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #f7f7f7;
  padding: 6rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  outline: 1px solid #ddd;
  width: 100%;
  background-color: ${props => props.theme.darkMode ? '#2f2f2f' : '#f7f7f7'};

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.titleColor};
  }

  p {
    color: #666;
    font-size: 1rem;
    color: ${props => props.textColor};
  }
`;

function SlickCard({ isInView, title, titleColor, text, textColor, children }) {
  return (
    <SlickCardContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Card titleColor={titleColor} textColor={textColor}>
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </Card>
    </SlickCardContainer>
  );
}

export default SlickCard;