import PropTypes from 'prop-types';
import { FilterField, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterField>
      <label>
        Find contact by name
        <Input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </FilterField>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
