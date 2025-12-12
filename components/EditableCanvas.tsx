import React from 'react';
import { Rnd } from 'react-rnd';
import { CanvasElement } from '../types';
import { X } from 'lucide-react';

interface Props {
  elements: CanvasElement[];
  setElements: React.Dispatch<React.SetStateAction<CanvasElement[]>>;
  containerWidth: number;
  containerHeight: number;
  onRemove: (id: string) => void;
}

export const EditableCanvas: React.FC<Props> = ({ elements, setElements, containerWidth, containerHeight, onRemove }) => {
  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    setElements(prev => prev.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {elements.map(el => (
        <Rnd
          key={el.id}
          size={{ width: el.width, height: el.height }}
          position={{ x: el.x, y: el.y }}
          onDragStop={(e, d) => updateElement(el.id, { x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => {
            updateElement(el.id, {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...position,
            });
          }}
          bounds="parent"
          className="pointer-events-auto border-2 border-dashed border-transparent hover:border-blue-400 group"
          cancel=".nodrag"
        >
          <div className="relative w-full h-full">
            {/* Remove Button - visible on hover */}
            <button 
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-auto shadow-sm hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(el.id);
              }}
            >
              <X size={12} />
            </button>

            {/* Editable Content */}
            <div
              contentEditable
              suppressContentEditableWarning
              className="w-full h-full outline-none p-1 font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-sans overflow-hidden nodrag cursor-text"
              style={{ 
                fontSize: `${el.fontSize || 24}px`, 
                lineHeight: '1.2',
                color: el.color || 'white'
              }}
              onBlur={(e) => updateElement(el.id, { content: e.currentTarget.innerText })}
            >
              {el.content}
            </div>
          </div>
        </Rnd>
      ))}
    </div>
  );
};