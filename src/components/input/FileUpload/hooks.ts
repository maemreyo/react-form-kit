import { useState, useCallback, useEffect } from 'react';
import { FileInfo } from './types';

interface UseFileUploadReturn {
  files: FileInfo[];
  uploadProgress: number;
  isUploading: boolean;
  error: string | null;
  handleFiles: (files: FileList) => void;
  uploadFiles: () => Promise<void>;
  cancelUpload: () => void;
  clearFiles: () => void;
}

interface UseFileUploadProps {
  maxFiles?: number;
  maxFileSize?: number;
  allowedTypes?: string[];
  uploadUrl?: string;
  headers?: Record<string, string>;
  onUploadComplete?: (response: any) => void;
  onUploadError?: (error: Error) => void;
  onUploadProgress?: (progress: number) => void;
}

export const useFileUpload = ({
  maxFiles = Infinity,
  maxFileSize,
  allowedTypes,
  uploadUrl,
  headers = {},
  onUploadComplete,
  onUploadError,
  onUploadProgress,
}: UseFileUploadProps): UseFileUploadReturn => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  const handleFiles = useCallback(
    (fileList: FileList) => {
      const newFiles: FileInfo[] = Array.from(fileList).map((file) => ({
        file,
        progress: 0,
        status: 'pending',
      }));

      setFiles((prev) => {
        const updatedFiles = [...prev, ...newFiles];
        if (updatedFiles.length > maxFiles) {
          setError(`Maximum ${maxFiles} files allowed`);
          return prev;
        }
        return updatedFiles;
      });
    },
    [maxFiles]
  );

  const uploadFiles = useCallback(async () => {
    if (!uploadUrl || files.length === 0) return;

    const controller = new AbortController();
    setAbortController(controller);
    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      files.forEach((fileInfo) => {
        if (fileInfo.status === 'pending') {
          formData.append('files', fileInfo.file);
        }
      });

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers,
        body: formData,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      onUploadComplete?.(result);

      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: 'completed',
          progress: 100,
        }))
      );
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        const errorMessage = err.message;
        setError(errorMessage);
        onUploadError?.(err);
      }
    } finally {
      setIsUploading(false);
      setAbortController(null);
    }
  }, [files, uploadUrl, headers, onUploadComplete, onUploadError]);

  const cancelUpload = useCallback(() => {
    if (abortController) {
      abortController.abort();
      setIsUploading(false);
    }
  }, [abortController]);

  const clearFiles = useCallback(() => {
    setFiles([]);
    setUploadProgress(0);
    setError(null);
  }, []);

  useEffect(() => {
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, []);

  return {
    files,
    uploadProgress,
    isUploading,
    error,
    handleFiles,
    uploadFiles,
    cancelUpload,
    clearFiles,
  };
};
