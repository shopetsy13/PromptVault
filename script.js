const promptsData = [
    // Portraits
    { category: "Portraits", text: "Hyper-realistic cinematic portrait of an elderly sea captain with a weathered face, piercing blue eyes, intense depth of field, golden hour lighting, 8k resolution, photorealistic skin texture, shot on 85mm lens." },
    { category: "Portraits", text: "Studio portrait of a cyberpunk woman with glowing holographic freckles, vibrant neon pink hair, soft studio lighting, sharp focus, fashion magazine style, octane render." },
    { category: "Portraits", text: "A majestic Native American warrior looking off into the distance, dramatic volumetric lighting, intricate feather headdress, ultra-detailed skin features, cinematic color grading." },
    { category: "Portraits", text: "An ethereal portrait of an African queen adorned with intricate gold filigree jewelry, glowing ambient light, high fashion aesthetic, hyper-detailed skin texture." },
    { category: "Portraits", text: "Close-up portrait of a astronaut with a reflective helmet visor showing a swirling galaxy, emotional gaze, soft ambient blue and orange light, photorealistic." },
    { category: "Portraits", text: "A futuristic cyborg monk meditating, intricate golden mechanical implants, peaceful atmosphere, rim lighting, 8k resolution, unreal engine 5 render." },
    { category: "Portraits", text: "Vintage 1920s jazz singer under a moody spotlight, dramatic shadows, glowing saxophone, film grain style, high-contrast black and white photography." },
    { category: "Portraits", text: "A close-up shot of a fairy queen with glowing iridescent butterfly wings, freckles made of stardust, magical bokeh background, macro photography." },
    { category: "Portraits", text: "A portrait of a rugged mountain climber standing at Everest's peak, frost on beard, sun glare through icy goggles, epic atmosphere." },
    { category: "Portraits", text: "A mysterious Victorian noblewoman with glowing emerald eyes holding an ornate lace fan, dark gothic atmosphere, Rembrandt lighting." },

    // Cyberpunk & Sci-Fi
    { category: "Cyberpunk", text: "Futuristic Neo-Tokyo city street at midnight in heavy rain, neon signs reflecting off wet pavement, flying hovercars, moody blue and purple neon glow, wide angle shot." },
    { category: "Cyberpunk", text: "A giant mecha robot standing in a abandoned mist-covered desert warehouse, rusted metallic plates, atmospheric haze, volumetric sunlight rays breaking through roof." },
    { category: "Cyberpunk", text: "Interior of a sleek sci-fi spaceship cockpit looking out into a glowing warp speed tunnel, neon dashboard interfaces, detailed photorealistic render." },
    { category: "Cyberpunk", text: "A futuristic hacker room filled with holographic monitors, neon cables, dark ambiance, glowing code reflection on glasses, ultra detailed." },
    { category: "Cyberpunk", text: "An underground cyberpunk street market with glowing food stalls, android vendors, futuristic street signs, rich atmosphere, cinematic composition." },
    { category: "Cyberpunk", text: "A sprawling cyberpunk metropolis with megastructures stretching into the clouds, glowing holographic advertisements, flying transit vehicles." },
    { category: "Cyberpunk", text: "A sci-fi research facility underwater with giant transparent domes showing bioluminescent ocean creatures swimming outside, moody aqua lighting." },
    { category: "Cyberpunk", text: "A futuristic police hover-car parked on a rooftop looking down over a glowing rain-soaked cyberpunk city, dramatic lens flare." },
    { category: "Cyberpunk", text: "A cybernetic assassin wearing a sleek matte-black suit with glowing red optical visors, standing in a dark rain-filled alleyway." },
    { category: "Cyberpunk", text: "An abandoned alien temple on a distant desert planet, twin moons in the sky, glowing alien runes etched into giant monoliths." },

    // Fantasy & Mythology
    { category: "Fantasy", text: "A giant majestic dragon perched on a craggy mountain peak at sunset, glowing fire breathing from mouth, epic cinematic scale, intricate scales." },
    { category: "Fantasy", text: "An enchanted bioluminescent forest at night, glowing mushrooms, floating light specks, magical blue water spring, whimsical atmosphere." },
    { category: "Fantasy", text: "A majestic floating castle suspended in mid-air surrounded by waterfalls plunging into clouds, sunset sky, high fantasy art style." },
    { category: "Fantasy", text: "A knight in glowing silver plate armor wielding a sword of pure golden fire, standing before a shadowy demon king in a dark cathedral." },
    { category: "Fantasy", text: "An ancient giant tree of life with glowing golden leaves growing in the middle of a peaceful crystal lake, ethereal atmosphere." },
    { category: "Fantasy", text: "A mythical Phoenix bird bursting into golden flames and rising from ashes, dramatic motion burst, vibrant fiery colors." },
    { category: "Fantasy", text: "A hidden elven city built into giant Redwood trees, glowing lanterns connecting suspension bridges, ethereal fantasy landscape." },
    { category: "Fantasy", text: "An underwater kingdom of Atlantis, majestic coral palaces, mermaids swimming around glowing underwater obelisks, sunbeams through ocean water." },
    { category: "Fantasy", text: "A dark necromancer floating in a swirling storm of green ethereal souls inside a ruined Gothic castle." },
    { category: "Fantasy", text: "A friendly forest spirit creature made of moss and flowers sitting peacefully beside a sleeping deer in a sunlit glade." },

    // Anime & Illustration
    { category: "Anime", text: "Studio Ghibli style cozy cottage garden with vibrant flowers, lush green meadows, soft sunlight, hand-painted watercolor aesthetic." },
    { category: "Anime", text: "Anime style samurai girl standing beneath falling cherry blossom trees, holding a glowing katana, dynamic wind effect, detailed background." },
    { category: "Anime", text: "A retro 80s synthwave anime aesthetic girl driving a vintage car along a palm tree beach at sunset, neon color palette." },
    { category: "Anime", text: "A high-octane anime battle scene with glowing energy slashes, dynamic action pose, detailed impact effects, Makoto Shinkai style sky." },
    { category: "Anime", text: "An anime girl sitting on a train window seat, soft pastel lighting, rain drops on glass, peaceful lofi aesthetic." },
    { category: "Anime", text: "A magical academy library filled with floating books, glowing spells, vibrant anime art style, detailed lighting." },
    { category: "Anime", text: "Detailed flat vector illustration of a peaceful mountain landscape during sunrise, minimalist color palette, clean lines." },
    { category: "Anime", text: "A vibrant cyber-anime girl with headphones, glowing holographic overlays, colorful street fashion style." },
    { category: "Anime", text: "Ink and watercolor painting of a traditional Japanese pagoda surrounded by autumn red maple trees and misty mountains." },
    { category: "Anime", text: "Chibi style cute wizard cat wearing an oversized star-patterned hat casting a tiny glowing star spell, soft pastel render." },

    // Surreal & 3D Art
    { category: "Surreal", text: "An isometric 3D miniature island in a glass sphere, floating in space, glowing mini waterfall, Blender render, cute lighting." },
    { category: "Surreal", text: "A surreal desert landscape with giant floating geometric shapes, pastel pink sky, melting clocks, Salvador Dali inspired." },
    { category: "Surreal", text: "A glossy glass sphere reflecting a colorful cosmic nebula resting on a black silk surface, ray-traced, ultra photorealistic." },
    { category: "Surreal", text: "An abstract liquid chrome splash exploding into iridescent pastel colors, fluid motion, octane render, clean white studio background." },
    { category: "Surreal", text: "A surreal staircase spiraling infinitely into a cloud-filled sky, golden hour lighting, dreamlike landscape." },
    { category: "Surreal", text: "Cute claymation style 3D monster monster sitting on a tiny mushroom, soft pastel textures, tilt-shift camera effect." },
    { category: "Surreal", text: "A surreal astronaut floating peacefully through a vibrant room made entirely of blooming red roses in deep space." },
    { category: "Surreal", text: "An intricate origami dragon made of glowing gold and marble paper, folded with extreme precision, macro focus." },
    { category: "Surreal", text: "A floating ocean inside a transparent cube suspended over a misty canyon, surreal digital art, dramatic lighting." },
    { category: "Surreal", text: "A futuristic 3D abstract geometric sculpture made of polished gold, matte black porcelain, and translucent glass, octane render." }
];

const promptsGrid = document.getElementById('promptsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const toast = document.getElementById('toast');

let activeCategory = 'All';

function renderPrompts() {
    promptsGrid.innerHTML = '';
    const query = searchInput.value.toLowerCase();

    const filtered = promptsData.filter((item) => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.text.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="badge">${item.category}</span>
                    <span class="prompt-num">#${index + 1}</span>
                </div>
                <p class="prompt-text">${item.text}</p>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${escapeJsString(item.text)}')">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copy Prompt
            </button>
        `;
        promptsGrid.appendChild(card);
    });

    if(filtered.length === 0) {
        promptsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No prompts found matching your criteria.</p>`;
    }
}

function escapeJsString(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        renderPrompts();
    });
});

searchInput.addEventListener('input', renderPrompts);

renderPrompts();
          
