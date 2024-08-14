function list_add() {
    // 입력 필드와 아이템 리스트 가져오기
    const subjectInput = document.getElementById('subject');
    const itemList = document.getElementById('itemlist');
    
    // 입력값 가져오기
    const subjectText = subjectInput.value.trim();
    
    // 입력값이 비어있지 않은지 확인
    if (subjectText === '') {
        alert('할 일을 입력하세요.');
        return;
    }
    
    // 새로운 리스트 아이템 생성
    const listItem = document.createElement('li');
    listItem.textContent = subjectText;
    
    
    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete-button'); // Add CSS class
    deleteButton.onclick = function() {
        itemList.removeChild(listItem);
    };
    
    // 리스트 아이템에 삭제 버튼 추가
    listItem.appendChild(deleteButton);
    
    // 리스트에 아이템 추가
    itemList.appendChild(listItem);
    
    // 입력 필드 초기화
    subjectInput.value = '';
}


