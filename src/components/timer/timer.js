import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../../redux/actions';
import moment from 'moment';
import Button from '../button';
import styles from './timer.module.css';

const Timer = ( { timer, startTimer, stopTimer } ) => {

  	return (
			<div className={styles.container}>
				<div>
					<Button primary block active={timer.started} onClick= {
						() => timer.started ? stopTimer() : startTimer() 
					}>
						{timer.started ? 'Stop timer' : 'Start timer'}
					</Button>
				</div>
				<div className={styles.counter}> Learning time: {formatTime(timer.seconds)} min</div>
			</div>
  	);
};

const formatTime = (seconds) => {
	return moment().minutes(0).seconds(seconds).format('mm:ss');
}

const mapDispatchToProps = {
  startTimer,
  stopTimer
};

export default connect( 
	(state) => ({
		timer: state.timer
	}), 
	mapDispatchToProps)(Timer);
