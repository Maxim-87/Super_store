/* eslint-disable */
import React, { ChangeEvent, useState } from 'react';

import { icons } from '../../assets/icons';

import styles from './DragDropLoader.module.scss';

type DragDropLoaderProps = {
  loadFile?: any;
  setLoadFile: (obj: any) => void;
  dragValue?: any;
  setDragValue?: (obj: any) => void;
  isDrop: boolean;
  setIsDrop: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DragDropLoader = ({
  loadFile,
  setLoadFile,
  dragValue,
  setDragValue,
  isDrop,
  setIsDrop,
}: DragDropLoaderProps) => {
  const [drag, setDrag] = useState(false);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoadFile([...loadFile, e.dataTransfer.files[0]]);
    setDrag(true);
    setIsDrop(false);
  };

  const downloadOnClick = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('downloadOnClick');
    e.target.files && setLoadFile([...loadFile, e.target.files[0]]);
    setIsDrop(false);
  };

  return (
    <div className={styles.dragDropLoader}>
      <div
        className={styles.drop_area}
        onDragStart={dragStartHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        onDrop={onDropHandler}
      >
        <label className={styles.label_input}>
          <input className={styles.input_file} type="file" onChange={downloadOnClick} />
          <img src={icons.uploaderIcon} alt="" />
        </label>
        <span className={styles.span}>
          Перетащите изображение сюда или нажмите, чтобы загрузить
        </span>
      </div>
    </div>
  );
};

export default null;
