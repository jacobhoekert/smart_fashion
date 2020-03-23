import React from 'react';
import '../styles/progress_bar.scss';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${props.percentage}%` }}></div>
    </div>
  )
}

export default ProgressBar;