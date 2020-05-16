import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import HeaderAdm from '../../../components/HeaderAdm';

export default function AdmLayout({ children }) {
  return (
    <Wrapper>
      <HeaderAdm />
      {children}
    </Wrapper>
  );
}
AdmLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
