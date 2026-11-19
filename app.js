// Initialize Discord Embedded App SDK
let discordSdk;

async function initDiscordSdk() {
    discordSdk = new DiscordSDK(CLIENT_ID);
    await discordSdk.ready();
    console.log("Discord SDK is ready");
}

initDiscordSdk();

function filterCategory(category) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchCatalog() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
  }
