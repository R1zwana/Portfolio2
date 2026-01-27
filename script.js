document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initNavigation();
    initScrollAnimations();
    fetchGitHubProjects();
});

// Navigation & Smooth Scroll
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Sticky Navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
        // Toggle icon logic here if needed, or rely on z-index
    });

    // Close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Reveal Animation
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
}

// GitHub API Integration
async function fetchGitHubProjects() {
    const username = 'R1zwana';
    const container = document.getElementById('projects-container');
    
    // Tech stack mapping for colors/classification
    const techColors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Java': '#b07219',
        'C#': '#178600'
    };

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const repos = await response.json();
        
        // Clear loading state
        container.innerHTML = '';
        
        // Filter and sort repos (prioritize ones with descriptions and known tech)
        // Note: Real filter logic would go here. For now take first 6 non-forks or specific ones
        const displayedRepos = repos
            .filter(repo => !repo.fork) // Prefer source repos
            .slice(0, 6); // Take top 6

        displayedRepos.forEach(repo => {
            const card = createProjectCard(repo, techColors);
            container.appendChild(card);
        });

        // Initialize icons for new elements
        lucide.createIcons();

    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        container.innerHTML = `
            <div class="error-state">
                <p>Could not load projects from GitHub.</p>
                <a href="https://github.com/${username}" target="_blank" class="btn btn-primary">Visit GitHub Profile</a>
            </div>
        `;
    }
}

function createProjectCard(repo, techColors) {
    const div = document.createElement('div');
    div.className = 'project-card';
    
    const language = repo.language || 'Code';
    const langColor = techColors[language] || '#8b5cf6';
    
    const description = repo.description || 'No description available for this project.';
    
    div.innerHTML = `
        <div class="project-header">
            <i data-lucide="folder" class="folder-icon"></i>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" aria-label="View Code">
                    <i data-lucide="github"></i>
                </a>
                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" aria-label="Live Demo"><i data-lucide="external-link"></i></a>` : ''}
            </div>
        </div>
        <div class="project-body">
            <h3 class="project-title">${repo.name}</h3>
            <p class="project-description">${description}</p>
            <div class="project-tech">
                <span class="tech-tag" style="color: ${langColor}">${language}</span>
                <span class="tech-tag">${formatDate(repo.updated_at)}</span>
            </div>
        </div>
    `;
    
    return div;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
