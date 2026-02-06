// Dữ liệu câu hỏi (Bạn có thể thêm tùy ý vào đây)
const questionBank = {
    light: [
        "Nếu tiền bạc không còn là vấn đề trên thế giới này, bạn sẽ dùng thời gian của mình để làm gì?",
        "Một ngày 'hoàn hảo' đối với bạn trông như thế nào?",
        "Nếu bạn bị người ngoài hành tinh đưa đi mất, bạn sẽ muốn những người còn ở lại nhớ đến bạn vì điều gì?",
        "Có điều gì bạn đang làm chỉ để khiến bố mẹ hoặc xã hội tự hào, thay vì làm vì chính bạn không?",
        "Khoảnh khắc nào gần đây nhất bạn cảm thấy thời gian như ngừng trôi vì bạn quá hạnh phúc?",
        "Điều gì có thể khiến bạn mỉm cười ngay lập tức kể cả khi bạn đang có một ngày tồi tệ nhất?",
        "Thất bại khi cố gắng làm điều mình yêu, hay thành công ở một điều mình không thích?",
        "Bạn định nghĩa thế nào là một cuộc đời 'lãng phí'?",
        "Có điều gì mà bạn sẽ không bao giờ thỏa hiệp, dù trong bất kỳ hoàn cảnh nào không?",
        "Điều gì có thể khiến bạn đánh mất niềm tin hoàn toàn vào một người mà bạn từng rất kính trọng?",
        "Điều gì ở xã hội hiện nay khiến bạn cảm thấy lo lắng nhất, và điều gì khiến bạn hy vọng nhất?",
        "Biến cố nào trong quá khứ đã nhào nặn nên con người của bạn ngày hôm nay?",
        "Bạn tin rằng chúng ta có số phận định sẵn, hay chúng ta hoàn toàn tự viết nên kịch bản đời mình?",
        "Sai lầm lớn nhất mà bạn từng mắc phải đã dạy cho bạn bài học gì về cuộc sống?",
        "Bạn quan niệm thế nào là một mối quan hệ 'tự do' trong sự gắn kết?",
        "Điều gì là 'không thể tha thứ' đối với bạn trong tình yêu?",
        "Biết trước thời điểm một mối quan hệ sẽ kết thúc có phải là một điều may mắn hay không?", 
    ],
    deep: [
        "Bạn có sở thích nào mà người khác thường thấy kỳ lạ hoặc khó hiểu không?",
        "Nếu bây giờ có một khóa học miễn phí về bất kỳ kỹ năng nào, bạn sẽ đăng ký học gì ngay lập tức",
        "Có điều gì bạn luôn muốn làm nhưng bấy lâu nay vẫn chưa có cơ hội (hoặc dũng cảm) để thử không?",
        "Nếu mỗi tuần có thêm một ngày Chủ Nhật, bạn sẽ dành trọn vẹn nó cho việc gì?",
        "Cuốn sách hoặc bộ phim nào đã làm thay đổi cách bạn suy nghĩ về một vấn đề gì đó?",
        "Có nhân vật hư cấu nào (trong truyện hoặc phim) mà bạn cảm thấy họ có những đam mê và sở thích giống hệt mình không?",
        "Bạn thích tận hưởng sở thích của mình một mình trong không gian riêng tư, hay thích tham gia vào một cộng đồng những người có cùng đam mê?",
        "Món quà tuyệt vời nhất liên quan đến sở thích mà bạn từng nhận được là gì? Tại sao nó lại ý nghĩa đến thế?",
        "Món ăn nào là 'comfort food' của bạn? Kiểu như cứ mỗi khi buồn hay mệt, chỉ cần ăn món đó là thấy đời đẹp trở lại ấy.",
        "Bạn cảm thấy mình tự tin nhất khi diện trang phục màu gì?",
        "Nếu cuộc đời bạn là một bộ phim, bài hát nào sẽ được chọn làm nhạc phim cho phần mở đầu?",
        "Có một trích dẫn hay một câu nói nào trong sách mà bạn coi là 'châm ngôn sống' của mình không?",
        "Nhạc không lời để tập trung hay nhạc Pop để hát theo?",
        "Làm việc tại quán cà phê ồn ào hay Thư viện yên tĩnh?",
        "Lên kế hoạch chi tiết cho chuyến đi hay Cứ đi rồi tính sau?",
        "Matcha hay Cafe?",
        "Ăn vỉa hè vui vẻ hay Nhà hàng sang trọng, yên tĩnh?",
        "Nấu ăn cho người khác hay Được người khác nấu cho ăn?",
        "Biết trước tương lai hay Quay lại quá khứ?",
        "Sống ở một thành phố không bao giờ ngủ hay một ngôi nhà nhỏ trên thảo nguyên?"            
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
