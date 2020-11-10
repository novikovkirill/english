import React from 'react';
import cn from 'classnames';
import styles from './input.module.css';
import { connect } from 'react-redux';
import { checkWord } from '../../redux/actions';

class Input extends React.Component {

    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
      const { no_display, children } = this.props;

      return (
        <input
          className={cn(styles.input, {
            [styles.no_display]: no_display,
          })}
          placeholder = 'Enter translation'
          onKeyDown = { this.handleKeyDown }
          ref = { this.inputRef }
        >
          {children}
        </input>
      );
    }

    checkAndClear = () => {
        const { checkWord } = this.props;
        const node = this.inputRef.current;
        checkWord(node.value);
        node.value = '';
    }

    handleKeyDown (event) {
        if (event.key === 'Enter'){
          this.checkAndClear();
        }
    }

}

export default connect(null, { checkWord } )(Input);