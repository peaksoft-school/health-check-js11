import { Box, styled } from '@mui/material'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import {
   BoldIcon,
   BulletIcon,
   ItalicIcon,
   OrderedIcon,
   UnderlineIcon,
} from '../../assets/icons'

const Toolbar = ({ editor }) => {
   if (!editor) return null

   return (
      <StyledWrapper>
         <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active btn' : 'btn'}
            aria-label="bold"
         >
            <BoldIcon />
         </button>

         <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active btn' : 'btn'}
            aria-label="italic"
         >
            <ItalicIcon />
         </button>

         <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active btn' : 'btn'}
            aria-label="underline"
         >
            <UnderlineIcon />
         </button>

         <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active btn' : 'btn'}
            aria-label="bulletList"
         >
            <BulletIcon />
         </button>

         <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active btn' : 'btn'}
            aria-label="orderedList"
         >
            <OrderedIcon />
         </button>
      </StyledWrapper>
   )
}

const TextEditor = ({ onChange }) => {
   const onUpdate = ({ editor }) => onChange(editor.getHTML())

   const editor = useEditor({
      content: ``,
      onUpdate,
      extensions: [
         StarterKit,
         Placeholder.configure({ placeholder: 'Введите описание специалиста' }),
         Underline,
      ],
   })

   return (
      <>
         <Toolbar editor={editor} />

         <StyledTexteria>
            <EditorContent editor={editor} />
         </StyledTexteria>
      </>
   )
}
export default TextEditor

const StyledWrapper = styled(Box)(() => ({
   width: '812px',
   height: '68px',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   borderRadius: '4px',
   paddingLeft: '50px',
   border: '1px solid grey',
   borderBottom: 'none',

   '.btn': {
      width: '28px',
      height: '28',
      marginRight: '80px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
   },

   '.is-active': {
      background: 'rgb(197 197 197)',
      height: '30px',
      width: '30px',
   },
}))

const StyledTexteria = styled(Box)(({ theme }) => ({
   borderRadius: '4px',
   borderColor: `1px solid ${theme.palette.secondary.main}`,

   '& > div > .ProseMirror': {
      border: 'none',
      minHeight: '300px',
      padding: '20px',

      '& > p.is-editor-empty:last-child::before': {
         color: '#adb5bd',
         content: 'attr(data-placeholder)',
         float: 'left',
         height: '0',
         pointerEvents: 'none',
      },
   },
}))
