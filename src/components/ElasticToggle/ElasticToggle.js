import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  height: 100px;
  width: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-weight: 350;
  position: relative;
  /* background-color: #ecf0f3; */
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const LabelText = styled.div`
  margin-left: 16px;
`;

const Toggle = styled.div`
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
`;

const ToggleState = styled.input`
  display: none;
  :checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
  }
`;

const Indicator = styled.div`
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
`;

const ElasticToggle = ({ toggleState, setToggleState }) => {
  return (
    <ToggleWrapper>
      <Label class="label">
        <Toggle>
          <ToggleState
            type="checkbox"
            name="check"
            checked={toggleState}
            onChange={() => setToggleState((prevState) => !prevState)}
          />
          <Indicator className="indicator"></Indicator>
        </Toggle>
        <LabelText>Theme</LabelText>
      </Label>
    </ToggleWrapper>
  );
};

export default ElasticToggle;
