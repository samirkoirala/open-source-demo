// Fetch and display contributors
async function loadContributors() {
    const contributorsGrid = document.getElementById('contributors-grid');
    const contributorCount = document.getElementById('contributor-count');

    try {
        // Show loading state
        contributorsGrid.innerHTML = '<div class="loading">Loading contributors</div>';

        // Fetch contributors data
        const response = await fetch('contributors.json');
        const data = await response.json();
        const contributors = data.contributors;

        // Update contributor count
        contributorCount.textContent = contributors.length;

        // Clear loading state
        contributorsGrid.innerHTML = '';

        // Create contributor cards
        contributors.forEach(contributor => {
            const card = createContributorCard(contributor);
            contributorsGrid.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading contributors:', error);
        contributorsGrid.innerHTML = '<p class="error">Failed to load contributors. Please try again later.</p>';
    }
}

// Create a contributor card element
function createContributorCard(contributor) {
    const card = document.createElement('div');
    card.className = 'contributor-card';

    // Build social links HTML
    let socialLinksHTML = '';
    if (contributor.github) {
        socialLinksHTML += `<a href="https://github.com/${contributor.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`;
    }
    if (contributor.twitter) {
        socialLinksHTML += `<a href="https://twitter.com/${contributor.twitter}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>`;
    }
    if (contributor.linkedin) {
        socialLinksHTML += `<a href="https://linkedin.com/in/${contributor.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
    }
    if (contributor.website) {
        socialLinksHTML += `<a href="${contributor.website}" target="_blank" title="Website"><i class="fas fa-globe"></i></a>`;
    }

    // Build contributions badges HTML
    let contributionsHTML = '';
    if (contributor.contributions && contributor.contributions.length > 0) {
        contributionsHTML = contributor.contributions.map(contribution => 
            `<span class="contribution-badge">${contribution}</span>`
        ).join('');
    }

    card.innerHTML = `
        <div class="contributor-header">
            <img src="${contributor.avatar || 'https://via.placeholder.com/80'}" alt="${contributor.name}" class="avatar">
            <div class="contributor-info">
                <h3>${contributor.name}</h3>
                <span class="role">${contributor.role || 'Contributor'}</span>
            </div>
        </div>
        <p class="bio">${contributor.bio || 'No bio provided.'}</p>
        ${contributionsHTML ? `<div class="contributions">${contributionsHTML}</div>` : ''}
        ${socialLinksHTML ? `<div class="social-links">${socialLinksHTML}</div>` : ''}
    `;

    return card;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadContributors();
    initThemeToggle();
});

// Dark mode toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}
