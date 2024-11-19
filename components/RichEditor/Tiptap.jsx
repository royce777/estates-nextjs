'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Toolbar from './Toolbar'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { Heading as TipTapHeading } from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";
import { Box } from '@chakra-ui/react';


const Tiptap = ({ name, placeholder, handleUpdate, initialValue = "" }) => {


  const Heading = TipTapHeading.extend({
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level);
      const level = hasLevel ? node.attrs.level : this.options.levels[0];

      return [
        `h${level}`,
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
          class: `h${node.attrs.level}-style`,
        }),
        0,
      ];
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "chakra-ui-ordered-list",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "chakra-ui-unordered-list",
        },
      }),
      Highlight,
    ],
    content: initialValue,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      console.log(content);
    },
    onBlur: ({ editor, event }) => {
      const content = editor.getHTML();
      console.log(name)
      const res = { target: { name: name, value: content } }
      handleUpdate(res);
    },
    immediatelyRender: false,
  })

  return (
    <Box
      height="300px"
      className="editor-content"
      css={{
        '.h1-style': {
          fontSize: '2rem',
          fontWeight: 'bold',
        },
        '.h2-style': {
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
        '.h3-style': {
          fontSize: '1.3rem',
          fontWeight: 'bold',
        },
        '.chakra-ui-unordered-list': {
          listStyleType: 'disc', // for ordered lists
          marginLeft: '1rem',
        },
        '.chakra-ui-ordered-list': {
          listStyleType: 'decimal', // for ordered lists
          marginLeft: '1rem',
        },
        '.ProseMirror': {
          minHeight: '220px',
          maxHeight: '220px',
          overflowY: 'scroll',
          outline: '1px solid #000000',
          borderRadius: '5px',
          padding: '5px'
        },
        '.ProseMirror:focus': {
          outline: '2px solid #000000',
        }
      }}
    >
      <Toolbar editor={editor}/>
      <Box
        height="250px"
        overflowY="auto"
        borderRadius="2"
      >
        <EditorContent 
          editor={editor}
          style={{
            padding: '10px'
        }}
        />
      </Box>
    </Box>
  ) 
}

export default Tiptap;

