import React from 'react';

function App() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h6>This Month (June)</h6>
        <ul>
          <li>How can I create a visual representation?</li>
          <li>What software or tools do I need?</li>
          {/* Add more items here */}
        </ul>
        <button className="upgrade-button">Upgrade to plus now<br />$20 per month</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h4>66chat</h4>
        </div>
        
        <div className="content-sections">
          {/* Example Section */}
          <div className="example-card">
            <h6>Example</h6>
            <p>*write step by step for research and development*</p>
            <p>*Explain how BigBag Theory in 100 words*</p>
            {/* Add more examples here */}
          </div>
          
          {/* Capabilities Section */}
          <div className="example-card">
            <h6>Capabilities</h6>
            <p>Provide information and answer questions</p>
            <p>Assist with creative writing tasks</p>
            {/* Add more capabilities here */}
          </div>

          {/* Limitation Section */}
          <div className="example-card">
            <h6>Limitation</h6>
            <p>Lack of common sense and reasoning</p>
            <p>Potential for biased or inappropriate responses</p>
            {/* Add more limitations here */}
          </div>
        </div>

        {/* Chat Footer */}
        <div className="footer">
          <input type="text" placeholder="Send a new message" />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
