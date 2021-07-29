const menu=document.querySelector('div.menu');
const ten=document.createElement('img');
ten.className="ten";
ten.src='https://sachhay24h.com/uploads/280758799_logo_sachhay24h_sachhaynendocreviewsachhay.png';
menu.appendChild(ten);
const home=document.createElement('button');
home.innerText='Home';
menu.appendChild(home);
const more=document.createElement('button');
more.innerText='More'
menu.appendChild(more);
const about=document.createElement('button');
about.innerText='About us';
menu.appendChild(about);
const hr=document.createElement('hr')
menu.appendChild(hr);

const detail=document.querySelector('div.detail');
const stlkn=document.createElement('button');
stlkn.innerText='Sách tâm lý- Kĩ năng';
stlkn.className='stlkn';
detail.appendChild(stlkn)

const review=document.createElement('p');
review.innerText='Review sách Đắc Nhân Tâm - Dale Carnegie';
review.className='review';
detail.appendChild(review);

const review1=document.createElement('p');
review1.innerText='Đối nhân xử thế không phải xuất phát từ bản năng của con người mà mỗi chúng ta đều phải quan sát, nhìn nhận những tình huống để rút ra được những kinh nghiệm cho riêng mình. Đắc nhân tâm chính là một quyển sách mà bạn cần có để biết cách chinh phục người đối diện khi giao tiếp. Vậy Dale Carnegie đã mang đến những giá trị nào giúp Đắc nhân tâm trở thành quyển sách hàng đầu thế giới?'
detail.appendChild(review1)

const writer=document.createElement('p');
writer.innerText='Đôi nét về tác giả Dale Carnegie';
writer.className='writer';
detail.appendChild(writer);

const tacgia=document.createElement('img');
tacgia.className='tacgia';
tacgia.src='https://sachhay24h.com/uploads/images/dac-nhan-tam-1.jpg';
detail.appendChild(tacgia)

const writer1=document.createElement('p');
writer1.innerText='Dale Carnegie sinh ngày 24/11/1888 tại Missouri, Mỹ trong một hoàn cảnh khó khăn. Nhờ vào những nổ lực vượt lên hoàn cảnh, cuối cùng ông đã trở thành một nhà thuyết trình nổi tiếng tại Mỹ. Và đồng thời cũng là một nhà văn sở hữu nhiều quyển sách chinh phục được đọc giả trên toàn thế giới. Trong đó, có quyển sách Đắc nhân tâm.Trước khi mất vào 1/1/1955, ông đã để lại tên tuổi trong hàng loạt các quyển sách như: Đắc nhân tâm, Quẳng gánh lo đi và vui sống, Lincoln người chưa biết, The Leader In You, The Quick and Easy Way to Effective Speaking, … Các quyển sách của ông chủ yếu xoay quanh các vấn đề về nghệ thuật giao tiếp, về các kỹ năng trước đám đông, về kỹ năng bán hàng, … cũng như những tố chất để chúng ta có thể thành công trong hoạt động đối nhân xử thế hằng ngày.';
detail.appendChild(writer1)

const sach=document.createElement('p');
sach.innerText='Nội dung sách Đắc nhân tâm';
sach.className='writer'
detail.appendChild(sach);

const sach1=document.createElement('p');
sach1.innerText='Từ những điều đơn giản nhất, từ những câu nói tưởng như vô thưởng vô phạt của chúng ta nhưng đôi khi đã vi phạm một số nguyên tắc trong giao tiếp. Và điều đó vô tình gây ấn tượng xấu cho người đối diện.Ở phần nội dung đầu tiên này, Đắc nhân tâm đã chỉ rõ ra rằng: sự chỉ trích đối với người khác là một điều cấm kỵ. Thay vào đó, bạn cần nhìn nhận sự việc một cách tích cực hơn, và dùng những lời khen ngợi. Lời khen ngợi không quá khó để nói ra, nhưng hầu như ít ai áp dụng. Bên cạnh đó “cảm ơn” cũng là một cụm từ đơn giản nhưng hiệu quả trong hoạt động giao tiếp gắn kết con người với nhau nhiều hơn.';
detail.appendChild(sach1);

const video=document.createElement('iframe');
video.className='video';
video.src='https://www.youtube.com/embed/Rniy1-Yw9VU';
detail.appendChild(video);