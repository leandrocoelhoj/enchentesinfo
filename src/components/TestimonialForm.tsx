import React, { useState } from 'react';
import { Paperclip, X, Send } from 'lucide-react';

interface Attachment {
  id: string;
  name: string;
  type: string;
  preview?: string;
}

const TestimonialForm: React.FC = () => {
  const [testimonial, setTestimonial] = useState('');
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newAttachments: Attachment[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const id = `attachment-${Date.now()}-${i}`;
      
      const attachment: Attachment = {
        id,
        name: file.name,
        type: file.type,
      };

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setAttachments(current => 
            current.map(a => 
              a.id === id 
                ? { ...a, preview: e.target?.result as string } 
                : a
            )
          );
        };
        reader.readAsDataURL(file);
      }

      newAttachments.push(attachment);
    }

    setAttachments(current => [...current, ...newAttachments]);
    
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments(current => current.filter(attachment => attachment.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the submission here
    console.log('Submitted:', { testimonial, attachments });
    
    // Reset form
    setTestimonial('');
    setAttachments([]);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative bg-gray-900/90 border border-green-500/30 p-6 rounded-lg max-w-2xl mx-auto"
    >
      <h3 className="text-green-400 font-mono text-xl mb-4">Compartilhe sua experiência</h3>
      
      <div className="mb-4">
        <textarea
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          placeholder="Deixe um comentário sobre sua experiência pessoal ou feedback"
          className="w-full bg-black/50 border border-green-500/30 rounded-lg p-4 text-white placeholder:text-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500/50 resize-none h-32"
          required
        />
      </div>

      {attachments.length > 0 && (
        <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {attachments.map((attachment) => (
            <div key={attachment.id} className="relative group">
              {attachment.preview ? (
                <img 
                  src={attachment.preview} 
                  alt={attachment.name}
                  className="w-full h-20 object-cover rounded border border-green-500/30" 
                />
              ) : (
                <div className="w-full h-20 flex items-center justify-center bg-black/30 rounded border border-green-500/30 text-green-400 text-xs overflow-hidden p-2">
                  {attachment.name}
                </div>
              )}
              <button
                type="button"
                onClick={() => removeAttachment(attachment.id)}
                className="absolute -top-2 -right-2 bg-red-500/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,audio/*"
            multiple
          />
          <button
            type="button"
            onClick={handleAttachmentClick}
            className="flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <Paperclip size={18} className="mr-1" />
            <span className="text-sm">Anexar Arquivos</span>
          </button>
          <p className="text-green-500/50 text-xs mt-1">Arquivos de Imagens e Áudios são aceitos</p>
        </div>
        
        <button
          type="submit"
          className="bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 px-4 rounded flex items-center transition-colors"
        >
          <span className="mr-2">Enviar</span>
          <Send size={16} />
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm;