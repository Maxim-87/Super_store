import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from 'react';
import styles from './InputSearch.module.scss';
import {useDispatch} from "react-redux";
import {searchProductAction} from "../../store/Search/actions";

export const InputSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')

  const handleSubmit = (e: any) => {
       e.preventDefault()
    console.log('handleSubmit', value)
  }

  useEffect(() => {
    dispatch(searchProductAction(value))
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.input}>
      <h3> My search </h3>
      <div className={styles.input_group}>
        <form onChange={handleSubmit}>
          <input
            className={styles.input_form}
            type="text"
          onChange={handleChange}/>
        </form>
        <span className={styles.input_button}>
              <button className={styles.button_default}>
                <span className={styles.icon_search}>

                </span>
              </button>
        </span>
      </div>
      Search
    </div>
  );
};

export default null;