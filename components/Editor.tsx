import {FC, useEffect} from "react";
import EditorJS from '@editorjs/editorjs';




export const Editor:FC = () => {

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи'
    });
    console.log(editor)
    return () => {
      editor.isReady.then(() => {
        editor.destroy()
      })
        .catch(e => console.log('ERROR editor cleanup', e))
    }
  }, [])

  return (
    <div style={{minHeight: 50, width: '100%', border: '1px solid grey'}} id="editor" >+</div>
  )
}

