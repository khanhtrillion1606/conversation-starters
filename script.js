// CẤU HÌNH CÂU HỎI TẠI ĐÂY
const questions = [
    "Điều gì làm bạn cảm thấy hạnh phúc nhất trong tuần này?",
    "Nếu có thể du lịch đến bất kỳ đâu ngay bây giờ, bạn sẽ đi đâu?",
    "Kỷ niệm đáng nhớ nhất thời thơ ấu của bạn là gì?",
    "Bạn thích dành ngày nghỉ của mình như thế nào?",
    "Một cuốn sách hoặc bộ phim đã thay đổi cách nhìn của bạn về cuộc sống?",
    "Nếu bạn có một siêu năng lực, bạn muốn đó là gì?"
    // Bạn có thể thêm bao nhiêu tùy thích, ngăn cách bởi dấu phẩy
];

const deck = document.getElementById('deck');
const cardDisplay = document.getElementById('card-display');
const questionText = document.getElementById('question-text');
const doneBtn = document.getElementById('done-btn');

// Hàm chọn ngẫu nhiên câu hỏi
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Sự kiện khi ấn vào bộ bài
deck.addEventListener('click', () => {
    const randomQ = getRandomQuestion();
    questionText.innerText = randomQ;
    
    // Ẩn bộ bài, hiện câu hỏi
    deck.classList.add('hidden');
    cardDisplay.classList.remove('hidden');
});

// Sự kiện khi ấn nút "Đã trả lời"
doneBtn.addEventListener('click', () => {
    // Ẩn câu hỏi, hiện lại bộ bài
    cardDisplay.classList.add('hidden');
    deck.classList.remove('hidden');
});
