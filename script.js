// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Gestion du menu hamburger
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (event) => {
        if (!event.target.closest('header') && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    // Gestion des onglets de connexion/inscription
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetForm = tab.getAttribute('data-tab');
                
                authTabs.forEach(t => t.classList.remove('active'));
                authForms.forEach(f => f.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`${targetForm}-form`).classList.add('active');
            });
        });
    }

    // Fonction pour charger les profils sur la page de découverte
    if (document.getElementById('profiles-container')) {
        loadProfiles();
    }

    // Fonction pour initialiser la messagerie
    if (document.getElementById('chat-container')) {
        initChat();
    }

    // Fonction pour charger les histoires de retrouvailles
    if (document.getElementById('success-stories')) {
        loadSuccessStories();
    }
});

function loadProfiles() {
    // Simulation du chargement des profils
    const profilesContainer = document.getElementById('profiles-container');
    const profiles = [
        { name: 'Alice', age: 28, interests: 'Voyages, Photographie' },
        { name: 'Bob', age: 32, interests: 'Sport, Cuisine' },
        { name: 'Charlie', age: 25, interests: 'Musique, Cinéma' }
    ];

    profiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.classList.add('profile');
        profileElement.innerHTML = `
            <img src="/api/placeholder/150/150" alt="${profile.name}">
            <h3>${profile.name}, ${profile.age} ans</h3>
            <p>Intérêts : ${profile.interests}</p>
            <button class="btn">Voir le profil</button>
        `;
        profilesContainer.appendChild(profileElement);
    });
}

function initChat() {
    // Simulation de l'initialisation du chat
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Tapez votre message...';
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Envoyer';
    sendButton.classList.add('btn');

    chatWindow.appendChild(messageInput);
    chatWindow.appendChild(sendButton);

    sendButton.addEventListener('click', () => {
        if (messageInput.value.trim() !== '') {
            const messageElement = document.createElement('p');
            messageElement.textContent = messageInput.value;
            document.getElementById('messages').appendChild(messageElement);
            messageInput.value = '';
        }
    });
}

function loadSuccessStories() {
    // Simulation du chargement des histoires de retrouvailles
    const storiesContainer = document.getElementById('success-stories');
    const stories = [
        { title: "Retrouvailles après 30 ans", content: "Marie et Jean se sont retrouvés après 30 ans grâce à Mon Pote..." },
        { title: "Amis d'enfance réunis", content: "Sophie et Thomas, amis d'enfance, ont renoué contact et..." }
    ];

    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <a href="#" class="btn">Lire la suite</a>
        `;
        storiesContainer.appendChild(storyElement);
    });
}