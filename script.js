document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');

    const config = {
        rootMargin: '0px',
        threshold: 0.2 // Ativa o efeito quando 20% do item estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: para a animação rodar só uma vez, descomente a linha abaixo
                // observer.unobserve(entry.target);
            } else {
                // Se quiser que suma ao subir a página de volta, mantenha essa linha:
                entry.target.classList.remove('show');
            }
        });
    }, config);

    items.forEach(item => {
        observer.observe(item);
    });
});
