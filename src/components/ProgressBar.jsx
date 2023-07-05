

const ProgressBar = ({ progress, total }) => {
    const percentage = Math.floor((progress / total) * 100);
  
    return (
      <div className="progress-bar">
       
        <div
          className="progress-bar-inner"
          style={{ width: `${percentage}%` }}
        >
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    );
  };

  export default ProgressBar;


