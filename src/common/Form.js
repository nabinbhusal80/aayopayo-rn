import React, { Component } from 'react';
import { Form } from 'native-base';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from './Input';
import Button from './Button';
import RadioGroup from './RadioGroup';
import Selection from './Selection';
import DatePicker from './DatePicker';
import CheckBox from './CheckBox';
import TextArea from './TextArea';

class CustomForm extends Component  {

  state = {};

  renderFormElementHandler = (content, idx) => {
    switch (content.element) {
      case 'input':
        return <Input content={content} key={idx} {...this.props} />;
      case 'button':
        return <Button content={content} key={idx} {...this.props} />;
      case 'radio-group':
        return <RadioGroup content={content} key={idx} {...this.props} />;
      case 'selection':
        return <Selection content={content} key={idx} {...this.props} />;
      case 'date-picker':
        return <DatePicker content={content} key={idx} {...this.props} />;
      case 'checkbox':
        return <CheckBox content={content} key={idx} {...this.props} />;
      case 'text-area':
        return <TextArea content={content} key={idx} {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    const { contents } = this.props;
    // console.log('contens in Form', contents);
    return (
      <KeyboardAwareScrollView>
        <Form>
          {contents.map((content, idx) => this.renderFormElementHandler(content, idx))}
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CustomForm;
CustomForm.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any).isRequired,
};
