function isPalindrome(str) {
      // Hapus semua karakter non-alphanumeric dan ubah ke huruf kecil
      const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
      const reversed = cleaned.split('').reverse().join('');
      return cleaned === reversed;
    }

    const checkBtn = document.getElementById("check-btn");
    const textInput = document.getElementById("text-input");
    const result = document.getElementById("result");

    checkBtn.addEventListener("click", function () {
      const inputValue = textInput.value;

      if (!inputValue) {
        alert("Please input a value.");
        return;
      }

      if (isPalindrome(inputValue)) {
        result.textContent = `${inputValue} is a palindrome.`;
      } else {
        result.textContent = `${inputValue} is not a palindrome.`;
      }
    });