import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      {quote ? (
        <div className="p-8 bg-white shadow-2xl rounded-2xl max-w-md text-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            "{quote.text}"
          </p>
          <p className="text-gray-500 text-sm mb-6">- {quote.author}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            onClick={() => {
              fetch("/quotes.json")
                .then((response) => response.json())
                .then((data) => {
                  const randomIndex = Math.floor(Math.random() * data.length);
                  setQuote(data[randomIndex]);
                });
            }}
          >
            새로운 명언 보기
          </button>
        </div>
      ) : (
        <p className="text-gray-700 text-xl font-semibold">
          명언을 불러오는 중...
        </p>
      )}
    </div>
  );
}

export default App;
