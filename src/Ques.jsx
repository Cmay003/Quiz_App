import "./Ques.css";

export default function Ques() {
  return (
    <div>
        <p className="Timer">10:00</p>
        <div className="ques-container">
            <div className="ques-box">
                <h1>Question 1:</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi perspiciatis cupiditate voluptate eum dolor, ut quos voluptatem impedit cumque eveniet.</p>
            </div>
            
            {/* Options grid */}
            <div className="options-container">
                <button className="option-btn">Option 1</button>
                <button className="option-btn">Option 2</button>
                <button className="option-btn">Option 3</button>
                <button className="option-btn">Option 4</button>
            </div>
            
            <button className="next-btn">Next</button>
        </div>
    </div>
  );
}
