import styled from 'styled-components';

export const ContactItem = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: 16px;
  :hover {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid ${p => p.theme.colors.black};
  }
`;
