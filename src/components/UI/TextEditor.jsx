import { useState } from 'react'
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

const Toolbar = ({ editor, ...rest }) => {
   if (!editor) return null

   return (
      <StyledToolbar {...rest}>
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
      </StyledToolbar>
   )
}

const TextEditor = ({
   initialContent,
   onChange,
   error,
   editorProps,
   toolbarProps,
}) => {
   const [isHovered, setIsHovered] = useState(false)
   const [isFocused, setIsFocused] = useState(false)

   const onUpdate = ({ editor }) => {
      onChange(editor.getHTML())
   }

   const editor = useEditor({
      content: initialContent,
      onUpdate,
      extensions: [
         StarterKit,
         Placeholder.configure({ placeholder: 'Введите описание специалиста' }),
         Underline,
      ],
   })

   const events = {
      ishovered: isHovered.toString(),
      isfocused: isFocused.toString(),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
   }

   return (
      <Box>
         <Toolbar
            editor={editor}
            error={error?.toString()}
            {...events}
            {...toolbarProps}
         />

         <StyledTextarea
            editor={editor}
            error={error?.toString()}
            {...events}
            {...editorProps}
         />
      </Box>
   )
}
export default TextEditor

const StyledToolbar = styled(Box)(({ theme, error, ishovered, isfocused }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '87px',
   borderRadius: '4px 4px 0 0',
   padding: '24px 58px',

   border: `1px solid ${
      isfocused === 'true'
         ? theme.palette.primary.darkGreen
         : error === 'true'
           ? theme.palette.tertiary.red
           : ishovered === 'true'
             ? theme.palette.secondary.lightGrey
             : theme.palette.secondary.main
   }`,

   borderBottom: '0px',

   '& > .btn': {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   '& > .is-active > svg > path': {
      fill: theme.palette.primary.darkGreen,
   },
}))

const StyledTextarea = styled(EditorContent)(
   ({ theme, error, ishovered, isfocused }) => ({
      '& > .ProseMirror': {
         borderRadius: '0 0 4px 4px',
         minHeight: '300px',
         padding: '20px',

         border: `1px solid ${
            error === 'true'
               ? theme.palette.tertiary.red
               : ishovered === 'true'
                 ? theme.palette.secondary.lightGrey
                 : theme.palette.secondary.main
         }`,

         '&.ProseMirror-focused': {
            border: `1px solid ${
               isfocused === 'true' && theme.palette.primary.darkGreen
            }`,

            outline: 'none',
         },

         '& > p.is-editor-empty:last-child::before': {
            color: '#adb5bd',
            content: 'attr(data-placeholder)',
            float: 'left',
            height: '0',
            pointerEvents: 'none',
         },

         '& > *': {
            wordBreak: 'break-word',
         },
      },
   })
)
