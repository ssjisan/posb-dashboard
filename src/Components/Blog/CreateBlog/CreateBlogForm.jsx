import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect } from 'react';

export default function CreateBlogForm({ content, onChange }) {
    const editor = useEditor({
        extensions: [
          StarterKit,
          Placeholder.configure({
            placeholder: 'Start typing...',
          }),
        ],
        content: content || '',
        onUpdate: ({ editor }) => {
          onChange(editor.getHTML());
        },
      });
    
      useEffect(() => {
        return () => {
          if (editor) {
            editor.destroy();
          }
        };
      }, [editor]);
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}
