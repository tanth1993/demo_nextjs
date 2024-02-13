import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { EditorConfig } from "@ckeditor/ckeditor5-core";
interface IProps {
    data?: string
    onChange?: (d: string) => void
    placeHolder?: string
    isReadOnly?: boolean
}
const editorConfiguration = (props: IProps): EditorConfig => {
    return {
        toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ],
        placeholder: props.placeHolder
    };
}

function CustomEditor(props: IProps) {
    return (
        <CKEditor
            disabled={props.isReadOnly}
            editor={Editor}
            config={editorConfiguration(props)}
            data={props?.data}
            onChange={(event, editor) => {
                props.onChange && props.onChange(editor.getData());
            }}

        />
    )
}

export default CustomEditor;