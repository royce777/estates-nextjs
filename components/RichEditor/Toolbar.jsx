"use client";
import { List } from "lucide-react";
import { Box } from "@chakra-ui/react";
import {
  Heading1,
  Heading2,
  Heading3,
  Code,
  Bold,
  Italic,
  Strikethrough,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Highlighter,
  Upload,
} from "lucide-react";
import { ListOrdered } from "lucide-react";
import ToolbarIconButton from './ToolbarIconButton'

export default function Toolbar({ editor }) {
  if (!editor) return null;

  const Options = [
    {
      icon: <Heading1/>,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2/>,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3/>,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Bold/>,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <Italic/>,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <Strikethrough/>,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <AlignLeft/>,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter/>,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight/>,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <List/>,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered/>,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
    {
      icon: <Code/>,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive("code"),
    },
    {
      icon: <Highlighter/>,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
    },
  ];

  return (
    <Box padding="4" maxWidth="800px" margin="auto">
      {Options.map((option, i) => (
        <ToolbarIconButton
          key={i}
          size="sm"
          isActive={option.pressed}
          onToggle={option.onClick}
          icon={option.icon}
        >
        </ToolbarIconButton>
      ))}
    </Box>
  );
}
