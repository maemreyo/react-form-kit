import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import {
  StyledContainer,
  StyledDropZone,
  StyledFileInput,
  StyledFileList,
  StyledFileItem,
  StyledProgressBar,
  StyledButton,
  StyledPreview,
  StyledError,
} from './styled';
import { FileUploadProps, FileInfo } from './types';
import { formatFileSize, validateFile } from './utils';

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept = '',
      multiple = false,
      maxFileSize = Infinity,
      onFileChange,
      onUpload,
      onProgress,
      onComplete,
      onError,
      autoUpload = true,
      dragDrop = false,
      preview = false,
      buttonLabel = 'Choose File',
      disabled = false,
      readOnly = false,
      className,
      style,
      ariaLabel = 'File Upload',
      validation = {},
      progressIndicator = true,
      cancelUpload = false,
      maxFiles = Infinity,
      fileTypes = [],
      showFileSize = false,
      showFileName = true,
      showFileList = true,
      clearFiles = false,
      openFileDialog = true,
      uploadUrl = '',
      headers = {},
      withCredentials = false,
      method = 'POST',
      enctype = 'multipart/form-data',
    },
    ref
  ) => {
    const [files, setFiles] = useState<FileInfo[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const handleFileSelect = useCallback(
      (selectedFiles: FileList) => {
        const newFiles: FileInfo[] = Array.from(selectedFiles).map((file) => ({
          file,
          progress: 0,
          status: 'pending',
        }));

        // Validate files
        for (const fileInfo of newFiles) {
          const validationError = validateFile(fileInfo.file, {
            maxSize: maxFileSize,
            allowedTypes: fileTypes,
            ...validation,
          });

          if (validationError) {
            fileInfo.error = validationError;
            fileInfo.status = 'error';
          }
        }

        setFiles((prev) => [...prev, ...newFiles].slice(0, maxFiles));
        onFileChange?.(newFiles.map((f) => f.file));

        if (autoUpload && uploadUrl) {
          uploadFiles(newFiles);
        }
      },
      [
        maxFileSize,
        fileTypes,
        validation,
        maxFiles,
        autoUpload,
        uploadUrl,
        onFileChange,
      ]
    );

    const uploadFiles = async (filesToUpload: FileInfo[]) => {
      if (!uploadUrl) return;

      const formData = new FormData();
      filesToUpload.forEach((fileInfo) => {
        if (fileInfo.status === 'pending') {
          formData.append('files', fileInfo.file);
        }
      });

      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch(uploadUrl, {
          method,
          headers,
          body: formData,
          credentials: withCredentials ? 'include' : 'same-origin',
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        const result = await response.json();
        onComplete?.(result);

        setFiles((prev) =>
          prev.map((file) => ({
            ...file,
            status: 'completed',
            progress: 100,
          }))
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          onError?.(err);
        }
      }
    };

    const handleDrop = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (!disabled && !readOnly) {
          handleFileSelect(e.dataTransfer.files);
        }
      },
      [disabled, readOnly, handleFileSelect]
    );

    const handleDragOver = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!disabled && !readOnly) {
          setIsDragging(true);
        }
      },
      [disabled, readOnly]
    );

    const handleDragLeave = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
      },
      []
    );

    const handleCancelUpload = useCallback(() => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    }, []);

    const handleClearFiles = useCallback(() => {
      setFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, []);

    const handleButtonClick = useCallback(() => {
      if (openFileDialog && fileInputRef.current && !disabled && !readOnly) {
        fileInputRef.current.click();
      }
    }, [openFileDialog, disabled, readOnly]);

    useEffect(() => {
      return () => {
        // Cleanup previews
        files.forEach((fileInfo) => {
          if (fileInfo.preview) {
            URL.revokeObjectURL(fileInfo.preview);
          }
        });
        // Cancel any ongoing uploads
        handleCancelUpload();
      };
    }, [files]);

    return (
      <ThemeProvider theme={theme}>
        <StyledContainer
          ref={ref}
          className={className}
          style={style}
          $disabled={disabled}
        >
          {dragDrop && (
            <StyledDropZone
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              $isDragging={isDragging}
              $disabled={disabled}
            >
              {isDragging
                ? 'Drop files here'
                : 'Drag files here or click to upload'}
            </StyledDropZone>
          )}

          <StyledFileInput
            ref={fileInputRef}
            type="file"
            accept={Array.isArray(accept) ? accept.join(',') : accept}
            multiple={multiple}
            onChange={(e) => handleFileSelect(e.target.files!)}
            disabled={disabled || readOnly}
            aria-label={ariaLabel}
          />

          {!dragDrop && (
            <StyledButton
              type="button"
              onClick={handleButtonClick}
              disabled={disabled || readOnly}
            >
              {buttonLabel}
            </StyledButton>
          )}

          {error && <StyledError>{error}</StyledError>}

          {showFileList && files.length > 0 && (
            <StyledFileList>
              {files.map((fileInfo, index) => (
                <StyledFileItem key={index}>
                  {preview && fileInfo.file.type.startsWith('image/') && (
                    <StyledPreview
                      src={URL.createObjectURL(fileInfo.file)}
                      alt={fileInfo.file.name}
                    />
                  )}
                  {showFileName && <span>{fileInfo.file.name}</span>}
                  {showFileSize && (
                    <span>({formatFileSize(fileInfo.file.size)})</span>
                  )}
                  {progressIndicator && fileInfo.status === 'uploading' && (
                    <StyledProgressBar $progress={fileInfo.progress} />
                  )}
                  {fileInfo.error && (
                    <StyledError>{fileInfo.error}</StyledError>
                  )}
                </StyledFileItem>
              ))}
            </StyledFileList>
          )}

          {cancelUpload && (
            <StyledButton
              type="button"
              onClick={handleCancelUpload}
              disabled={disabled || readOnly}
            >
              Cancel Upload
            </StyledButton>
          )}

          {clearFiles && files.length > 0 && (
            <StyledButton
              type="button"
              onClick={handleClearFiles}
              disabled={disabled || readOnly}
            >
              Clear Files
            </StyledButton>
          )}
        </StyledContainer>
      </ThemeProvider>
    );
  }
);

FileUpload.displayName = 'FileUpload';
