import { CSSProperties, ReactNode } from 'react';

export interface FileUploadProps {
  accept?: string | string[];
  multiple?: boolean;
  maxFileSize?: number;
  onFileChange?: (files: File[]) => void;
  onUpload?: (files: File[]) => void;
  onProgress?: (progress: number) => void;
  onComplete?: (response: any) => void;
  onError?: (error: Error) => void;
  autoUpload?: boolean;
  dragDrop?: boolean;
  preview?: boolean;
  buttonLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  validation?: {
    minSize?: number;
    maxSize?: number;
    allowedTypes?: string[];
  };
  progressIndicator?: boolean;
  cancelUpload?: boolean;
  maxFiles?: number;
  fileTypes?: string[];
  showFileSize?: boolean;
  showFileName?: boolean;
  showFileList?: boolean;
  clearFiles?: boolean;
  openFileDialog?: boolean;
  uploadUrl?: string;
  headers?: Record<string, string>;
  withCredentials?: boolean;
  method?: 'POST' | 'PUT';
  enctype?: string;
}

export interface FileInfo {
  file: File;
  preview?: string;
  progress: number;
  error?: string;
  status: 'pending' | 'uploading' | 'completed' | 'error';
}
