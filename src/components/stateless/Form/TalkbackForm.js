import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';

const TbForm = ({
    talkback,
    allAuthors,
    onSave,
    onChange,
    saving,
    errors
}) => {
    return (
        <form>
            <h1>Manage Talkback</h1>
            <TextInput
                name="title"
                label="Title"
                value={talkback.title}
                onChange={onChange}
                error={errors.title}
                />

            <TextArea
                name="text"
                label="Text"
                value={talkback.text}
                onChange={onChange}
                error={errors.text}
               />

            <input
                type="submit"
                disabled={saving}
                value={saving
                ? 'Saving...'
                : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

TbForm.propTypes = {
    talkback: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object,
};

export default TbForm;