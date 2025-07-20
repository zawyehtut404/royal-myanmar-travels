import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;