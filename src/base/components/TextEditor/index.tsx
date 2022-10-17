import React, {useState} from 'react';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertToRaw, EditorState} from "draft-js";
import styles from './TextEditor.module.scss';

type TextEditorProps = {
  value?: any
  setValue?: any,
};

export const TextEditor = ({value,setValue}: TextEditorProps) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const onEditorStateChange = async (editorState: any) => {
    await setEditorState(editorState);
    // const data = convertToRaw(editorState.getCurrentContent());
    setValue("description", (editorState.getCurrentContent().getPlainText()));
  };

    return (
    <div className={styles.editor}>
      <Editor
        // editorStyle={{border: '1px solid grey', margin: 0}}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName={styles.editor_block}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default null;


