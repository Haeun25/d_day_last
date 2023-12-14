// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "너랑 처음 맞이했던 12월! 너가 한창 아픈 때라 철야 못 온 거 많이 아쉬워했었징 ㅋ" },
  { "number": 2, "message": "나 인생 첫 알바했던 때야.. 뭔가 우리 이제 정말 성인이라는 걸 실감할 수 있는 기회였던 듯" },
  { "number": 3, "message": "둘 다 컨디션은 안좋았지만 잘 풀고 목사님 잘 보낸 날..ㅋㅋㅋ 너가 목사님한테 나랑 결혼할 거라 했다며~~" },
  { "number": 4, "message": "우리 처음으로 평일에 룸카페 가서 엄청 오래 있던 날! 너 아픈 거 많이 나아져서 오래 놀았던 날.." },
  { "number": 5, "message": "각자 부산여행 계획짜느라 점점 실감나고 이제 설레하던 날" },
  { "number": 6, "message": "내 인생 두 번째 알바! 끝나구는 첨으로 너희 집 앞 공으로 찾아갔었다요" },
  { "number": 7, "message": "내 기준 지금까지 가장 데이트 같았던 데이트..? 진짜 오랜만에 찜질방 갔다오니까 둘 다 피부 완전 조아짐 ㄷㄷ" },
  { "number": 8, "message": "우리집 또 방문~ 와서 같이 자구 클레이도 만들었지용 ㅋㅋ 담엔 머 제대로 만들어보자.." },
  { "number": 9, "message": "정말 오랜만에 뉴젠 갔던 날! 어쩌다보니 밤에도 다시 만났넹.. 애들이랑 놀고와서 그런지 나는 너가 많이 보고싶었던 날" },
  { "number": 10, "message": "엄석주 머리한 날! 속상해해서 나두 맘이 아팠다 ㅡ.ㅡ 내 눈에는 귀엽고 멋지다구 했자낭.. 현전님이랑 저녁도 먹은 날!" },
  { "number": 11, "message": "난 너를 서울에 남겨두고 부산으로 출발~" },
  { "number": 12, "message": "그렇게 먼 곳에서 너랑 같은 추억을 공유할 수 있다는 게 참 새로웠고.. 날이 추웠던 만큼 너는 너무 따뜻해서 그렇게 나에게 오래오래 기억될 날!" },
  { "number": 13, "message": "이번엔 너를 부산에 남겨두고 난 서울에 왔구나.. 보고싶은 마음이 크다!!" },
  { "number": 14, "message": "멀리 떨어져있을수록 마음은 커진다는 말이.. 참 맞는 듯한 ㅎㅎ 그래두 오늘이면 다시 석주가 내 가까이로 돌아온닷!" },
  { "number": 15, "message": "아직 모르지만 우리는 코엑스에서 만나게 될거야! 거창한 계획은 없는 하루가 어떻게 흘러갈지.. 그리고 나는 어쩌면 마음이 복잡해져있을 수도 있는 하루. 내가 또 너를 힘들게 할까봐 두렵기도 하구낭" },
  { "number": 16, "message": "점점 " },
  { "number": 17, "message": "모두에게 행복한 24일이 될 것을 기대합니다!" },
  { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
  { "number": 19, "message": "다양한 행복이 모여 하나로 뭉쳐지는 24일!" },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
  { "number": 24, "message": "12월, 모두에게 기쁨과 행복이 넘치는 달이에요." }
];