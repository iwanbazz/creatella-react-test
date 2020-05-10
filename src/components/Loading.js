{
  /* Component that handle loading in between 20 ascii face */
}

import React from "react";

function Loading() {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
