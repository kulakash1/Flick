import React from 'react';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = (filterWidth, filterHeight) => ({
  control: (provided, state) => ({
    ...provided,
    width: filterWidth,
    height: filterHeight,
    border: '1px solid #FFFFFF',
    borderRadius: '0.75rem',
    backgroundColor: '#352D39',
    color: state.isFocused ? 'black' : 'white',
    padding: '0.25rem',
    '&:hover': {
      borderColor: '#718096',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#352D39',
    color: 'white',
    border: '1px solid #FFFFFF',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#4A5568',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'black' : 'white',
  }),
  input: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'black' : 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#4A5568' : '#352D39',
    color: state.isFocused ? '#718096' : 'white',
    '&:hover': {
      backgroundColor: '#4A5568',
      color: 'white',
    },
  }),
});

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <div style={{ padding: '0 5px', cursor: 'pointer' }}>✖</div>
    </components.ClearIndicator>
  );
};

export default function FilterSelection({ options, filterHeight, filterWidth, placeholderData }) {
  return (
    <div className="w-full flex justify-center">
      <Select
        closeMenuOnSelect={false}
        components={{ ...animatedComponents, ClearIndicator }}
        isMulti={false}
        options={options} // Use options directly if already in { value, label } format
        styles={customStyles(filterWidth, filterHeight)}
        placeholder={`Choose ${placeholderData}`}
        isClearable
      />
    </div>
  );
}
