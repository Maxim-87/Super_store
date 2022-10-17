import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import styles from './SuperSelect.module.scss';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: string[]
	onChangeOption?: any
	label?: string
};

const SuperSelect: React.FC<SuperSelectPropsType> = (
	{
		options,
		onChangeOption,
		className,
		label,
		...restProps
	}
) => {

	const mappedOptions: JSX.Element[] = options ? options.map((o, i) => {
		return (
			<option
				className={styles.option}
				key={o + ' ' + i}
				value={o}
			>
				{o}
			</option>);
	}) : [];

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		onChangeOption && onChangeOption('status', e.currentTarget.value);
	};

	const finalSelectClassName = styles.select + (className ? ' ' + className : '');

	return (
		<div className={styles.selectContainer}>
			{label && <label className={styles.selectLabel}>{label}</label>}
			<select onChange={onChangeCallback}
					{...restProps}
					className={finalSelectClassName}
			>
				{mappedOptions}
			</select></div>
	);
};

export default SuperSelect;
