import React, { useState } from 'react';
import './index.css';

const IndexPage = () => {
  const [memoType, setMemoType] = useState('');
  const [memoTitle, setMemoTitle] = useState('');
  const [memoContent, setMemoContent] = useState('');
  const [showMemoForm, setShowMemoForm] = useState(false);

  const handleShowMemoForm = (type) => {
    setMemoType(type);
    setShowMemoForm(true);
  };

  const handleCloseMemoForm = () => {
    setShowMemoForm(false);
  };

  const handleMemoSubmit = (e) => {
    e.preventDefault();
    // 여기에 메모 등록하는 로직 추가
    alert(`등록되었습니다: ${memoType} - ${memoTitle} - ${memoContent}`);
    setShowMemoForm(false);
  };

  return (
    <div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="login.html" className="login">Login</a>
        <div className="brand">D2D</div>
      </div>

      <h2>2024년 5월</h2>

      <table id="calendar">
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {/* Calendar contents */}
        </tbody>
      </table>

      {/* Memo Form */}
      {showMemoForm && (
        <div className="memo-form">
          <span className="close-btn" onClick={handleCloseMemoForm}>&times;</span>
          <h3>{memoType}</h3>
          <form onSubmit={handleMemoSubmit}>
            <label htmlFor="memoTitle">제목:</label><br />
            <input type="text" id="memoTitle" name="memoTitle" value={memoTitle} onChange={(e) => setMemoTitle(e.target.value)} /><br />
            <label htmlFor="memoContent">내용:</label><br />
            <textarea id="memoContent" name="memoContent" rows="4" value={memoContent} onChange={(e) => setMemoContent(e.target.value)}></textarea><br />
            <input type="submit" value="등록하기" />
          </form>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
