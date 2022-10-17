import React, { ChangeEvent } from 'react';
import cx from 'classnames';

import styles from './Uploader.module.scss';

interface UploaderProps {
  className?: string;
  text?: string,
	// eslint-disable-next-line no-unused-vars
	downloadOnClick: (e: ChangeEvent<HTMLInputElement>) => void;

}

export const Uploader = ({
	className, text, downloadOnClick,
}: UploaderProps) => (
	<div className={cx(styles.uploader, className)}>
		<label className={styles.label_input}>
			<input
				className={styles.input_file}
				type="file"
				accept=".png,.jpg,.jpeg,.svg"
				onChange={downloadOnClick}
			/>
			<span>
				{text}
			</span>
		</label>
	</div>
);

export default null;
