import "./Ques.css"
export default function Ques() {
  return (
    <div>
        <div className="ques-container">
            <p className="Timer">10:00</p>
            <div className="ques-box">
                <h1>Question 1:</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi perspiciatis cupiditate voluptate eum dolor, ut quos voluptatem impedit cumque eveniet.</p>
            </div>
            <button className="next-btn" >
                Next
            </button>
        </div>
    </div>
  )
}
