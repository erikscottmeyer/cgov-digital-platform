import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Fieldset, TextInput } from '../../atomic';
import './TrialId.scss';

const TrialId = ({ handleUpdate }) => {
  let value = useSelector(store => store.form.tid);
  return (
    <Fieldset
      id="trialid"
      legend="Trial ID"
      helpUrl="https://www.cancer.gov/about-cancer/treatment/clinical-trials/search/help#trialid"
    >
      <TextInput
        action={e => handleUpdate(e.target.id, e.target.value)}
        value={value}
        id="tid"
        type="text"
        label="Separate multiple IDs with commas or semicolons."
      />
    </Fieldset>
  );
};

TrialId.propTypes = {
  handleUpdate: PropTypes.func,
};

export default TrialId;