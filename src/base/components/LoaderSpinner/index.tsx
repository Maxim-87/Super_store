import React from 'react';
import cx from 'classnames';

import styles from './LoaderSpinner.module.scss';

interface LoaderSpinnerProps {
  className?: string;
}

const LoaderSpinner = ({ className }: LoaderSpinnerProps) => (
	<div className={cx(styles.loader_spinner, className)}>
		<svg className={styles.spinner} viewBox="0 0 50 50">
			<circle className={styles.spinner__path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
		</svg>
	</div>
);

LoaderSpinner.defaultProps = {
	className: '',
};

export default LoaderSpinner;
