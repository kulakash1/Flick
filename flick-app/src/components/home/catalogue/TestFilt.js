import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '500px', // explicit width
    border: '2px solid #4A5568', // explicit border color
    borderRadius: '0.75rem', // rounded-3xl
    backgroundColor: '#352D39', // your custom color
    color: state.isFocused ? 'black' : 'white',
    padding: '0.25rem', // example padding
    '&:hover': {
      borderColor: '#718096', // example hover border color
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#352D39',
    color: 'white',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#4A5568', // example Tailwind color (gray-700)
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
    color: state.isFocused ? 'black' : 'white',
    '&:hover': {
      backgroundColor: '#4A5568',
      color: 'black',
    },
  }),
};

export default function TetsFilt({ options }) {
  const formattedOptions = options.map(option => ({ label: option, value: option }));

  return (
    <div className="w-full flex justify-center">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[formattedOptions[1], formattedOptions[2]]}
        isMulti
        options={formattedOptions}
        styles={customStyles}
      />
    </div>
  );
}
