topics = [
    {
        name: 'Structures',
        link: 'structure.html'
    },
    {
        name: 'Bitwise',
        link: 'bitwise.html'
    },
    {
        name: 'Pointer',
        link: 'pointer.html'
    }
]

assignmentButtonElement = document.querySelector('.button-menu-container');
assignmentHtml = '';

topics.forEach((topic) => {
    assignmentHtml += `
        <div class="assignment-link-button">
            <a class="assignment-link-section" href="${topic.link}">
                ${topic.name}
            </a>
        </div>
    `;
});

assignmentButtonElement.innerHTML = assignmentHtml;