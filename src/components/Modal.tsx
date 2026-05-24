'use client';
import { useEffect, useRef, useCallback, type ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: 'md' | 'lg';
}

export default function Modal({ isOpen, onClose, children, size = 'md' }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      // Focus the panel on open for keyboard navigation
      panelRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative w-full ${
          size === 'lg' ? 'max-w-2xl' : 'max-w-lg'
        } bg-[#fafaf8] rounded-sm shadow-2xl outline-none animate-modal-in`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#6b6b6b] hover:text-[#b89b4a] transition-colors duration-300 z-10"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}