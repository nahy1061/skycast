import React from 'react'

function ErrorMessage({ message }) {
  return (
    <div className="max-w-xl mx-auto bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-center text-sm sm:text-base">
      {message}
    </div>
  );
}

export default ErrorMessage;