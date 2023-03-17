import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderForm = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Headerul = styled.ul`
    list-style: none;
`

const Header = () => {
  return (
    <HeaderForm>
        <Headerul>
          <li><Link to={"/info"} style={{ textDecoration: 'none' }}>일일 박스오피스</Link></li>
          <li></li>
        </Headerul>
      
    </HeaderForm>
  );
};

export default Header;
