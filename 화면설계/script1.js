document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessageContainer = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const submitButton = form.querySelector('button');
        const loadingText = document.createElement('span');

        if (!username || !password) {
            errorMessageContainer.textContent = '사용자 이름과 비밀번호를 입력해 주세요.';
            return;
        }

        errorMessageContainer.textContent = '';
        submitButton.disabled = true;

        loadingText.textContent = '로그인 중...';
        loadingText.classList.add('loading-text'); 
        form.appendChild(loadingText);

        fetch('/your-login-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Network response was not ok');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.open('https://www.naver.com/');
            } else {
                errorMessageContainer.textContent = '로그인에 실패했습니다. 다시 시도해 주세요.';
            }
        })
        .catch(error => {
            console.error('로그인 요청 중 오류 발생:', error);
            errorMessageContainer.textContent = '로그인 요청 중 오류가 발생했습니다. 다시 시도해 주세요.';
        })
        .finally(() => {
            submitButton.disabled = false; 
            loadingText.remove(); 
        });
    });
});