 /* ---------- FAQ DROPDOWNS ---------- */
 const faqItems = document.querySelectorAll('.faq-list li');

 faqItems.forEach(item => {
     const question = item.querySelector('.question');
     const answer = item.querySelector('.answer');
 
     question.addEventListener('click', () => {
         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
     });
 });