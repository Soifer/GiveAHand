import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import TextArea from './TextArea';

const TbForm = ({
    course,
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
                //value={course.title}
                onChange={onChange}
                //error={errors.title}
                />

            <TextArea
                name="text"
                label="Text"
               // value={course.category}
                onChange={onChange}
               // error={errors.category}
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
    course: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object,
};

export default TbForm;