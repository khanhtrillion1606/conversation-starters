// Dữ liệu câu hỏi (Bạn có thể thêm tùy ý vào đây)
const questionBank = {
    light: [
        "Món ăn gần đây nhất khiến bạn bất ngờ là gì?",
        "Nếu được quay một vlog, bạn sẽ chọn chủ đề gì?",
        "Bạn thích đi biển hay đi núi hơn?",
        "Thói quen buổi sáng không thể thiếu của bạn là gì?",
        "Bộ phim nào bạn có thể xem đi xem lại nhiều lần?"
    ],
    deep: [
        "Điều gì là định nghĩa về sự hạnh phúc đối với bạn?",
        "Nếu ngày mai là ngày cuối cùng, bạn sẽ muốn nói lời cảm ơn tới ai?",
        "Nỗi sợ lớn nhất đã giúp bạn trưởng thành như thế nào?",
        "Giá trị cốt lõi mà bạn luôn theo đuổi trong cuộc sống là gì?",
        "Bạn muốn được mọi người nhớ đến là một người như thế nào?"
    ]
};

let questionCounter = 0; // Biến đếm số câu đã hỏi
const deck = document.getElementById('deck');
const cardDisplay = document.getElementById('card-display');
const questionText = document.getElementById('question-text');
const doneBtn = document.getElementById('done-btn');

// Hàm lấy câu hỏi ngẫu nhiên từ một mảng cụ thể
function getRandomFrom(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Logic chọn câu hỏi dựa trên quy tắc 2 nhẹ - 1 sâu
function getNextQuestion() {
    questionCounter++; // Tăng biến đếm mỗi lần bấm bài

    if (questionCounter % 3 === 0) {
        // Lần thứ 3, 6, 9... lấy câu hỏi Sâu
        console.log("Hệ thống: Chọn câu hỏi Sâu"); // Để bạn tiện theo dõi khi test
        return getRandomFrom(questionBank.deep);
    } else {
        // Lần thứ 1, 2, 4, 5... lấy câu hỏi Nhẹ
        console.log("Hệ thống: Chọn câu hỏi Nhẹ");
        return getRandomFrom(questionBank.light);
    }
}

// Sự kiện khi ấn vào bộ bài
deck.addEventListener('click', () => {
    const nextQ = getNextQuestion();
    
    // Hiệu ứng hiện câu hỏi
    questionText.innerText = nextQ;
    deck.classList.add('hidden');
    cardDisplay.classList.remove('hidden');
});

// Sự kiện quay lại bộ bài
doneBtn.addEventListener('click', () => {
    cardDisplay.classList.add('hidden');
    deck.classList.remove('hidden');
});
