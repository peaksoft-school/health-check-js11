import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const MyEditor = () => {
   const toolbarOptions = {
      options: ['inline', 'list'],
      inline: {
         options: ['bold', 'italic', 'underline'],
      },
      list: {
         options: ['unordered', 'ordered'],
      },
   }

   return (
      <Editor
         toolbar={toolbarOptions}
         localization={{
            locale: 'ko',
         }}
         wrapperClassName="wrapper"
         toolbarClassName="tool-bar"
         editorClassName="text-editor"
      />
   )
}

export default MyEditor
