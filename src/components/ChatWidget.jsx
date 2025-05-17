import React, { useState } from 'react';

const mockResponses = {
  'how do i sell my license?': 'Just upload your license, we’ll handle the rest!',
  'is it safe?': 'Yes, all transactions are secure and encrypted.'
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    const userMessage = input.toLowerCase();
    const reply = mockResponses[userMessage] || 'Sorry, I didn’t understand that.';
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-4">
      {open && (
        <div className="card shadow" style={{ width: '300px' }}>
          <div className="card-header bg-primary text-white">Chat with us</div>
          <div className="card-body" style={{ height: '250px', overflowY: 'auto' }}>
            {messages.map((msg, i) => (
              <div key={i} className="mb-2">
                <strong>{msg.from === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="card-footer">
            <input
              className="form-control mb-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
            />
            <button onClick={sendMessage} className="btn btn-sm btn-primary w-100">Send</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="btn btn-primary rounded-circle shadow">
        💬
      </button>
    </div>
  );
};

export default ChatWidget;
