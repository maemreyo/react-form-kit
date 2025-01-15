interface ValidationOptions {
  maxSize?: number;
  minSize?: number;
  allowedTypes?: string[];
}

export const validateFile = (
  file: File,
  options: ValidationOptions
): string | null => {
  const { maxSize, minSize, allowedTypes } = options;

  if (maxSize && file.size > maxSize) {
    return `File size exceeds ${formatFileSize(maxSize)}`;
  }

  if (minSize && file.size < minSize) {
    return `File size must be at least ${formatFileSize(minSize)}`;
  }

  if (allowedTypes && allowedTypes.length > 0) {
    const fileType = file.type || '';
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    const isAllowed = allowedTypes.some((type) => {
      if (type.startsWith('.')) {
        return fileExtension === type.slice(1);
      }
      return fileType === type || fileType.startsWith(`${type}/`);
    });

    if (!isAllowed) {
      return `File type not allowed. Accepted types: ${allowedTypes.join(', ')}`;
    }
  }

  return null;
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const getFileTypeIcon = (file: File): string => {
  const fileType = file.type || '';
  const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

  // Return appropriate icon based on file type/extension
  if (fileType.startsWith('image/')) {
    return '🖼️';
  } else if (fileType.startsWith('video/')) {
    return '🎥';
  } else if (fileType.startsWith('audio/')) {
    return '🎵';
  } else if (['pdf'].includes(fileExtension)) {
    return '📄';
  } else if (['doc', 'docx'].includes(fileExtension)) {
    return '📝';
  } else if (['xls', 'xlsx'].includes(fileExtension)) {
    return '📊';
  } else if (['zip', 'rar', '7z'].includes(fileExtension)) {
    return '📦';
  }

  return '📄';
};
