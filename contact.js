const copyBtn = document.querySelectorAll('.copy-btn');

copyBtn.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-copy-target');
        const textToCopy = document.getElementById(targetId).textContent;
        const originalText = this.innerHTML;

        navigator.clipboard.writeText(textToCopy).then(() => {
            this.innerHTML = "Copied! <i class='fa-regular fa-clipboard copy-icon'></i>";

            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1200);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});