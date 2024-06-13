const adLinks = [
    { headline: 'Buy One, Get One Free!', link: 'https://example.com/ad1' },
    { headline: '50% Off All Items!', link: 'https://example.com/ad2' },
    { headline: 'Free Shipping on Orders Over $50!', link: 'https://example.com/ad3' },
    { headline: 'New Collection Launched!', link: 'https://example.com/ad4' },
    { headline: 'Subscribe and Save 20%', link: 'https://example.com/ad5' },
    { headline: 'Join our discord for more links!', link: 'https://discord.gg/YmDqEu3afn' }
];
function getRandomAd() {
    const randomIndex = Math.floor(Math.random() * adLinks.length);
    return adLinks[randomIndex];
}

// Function to display the random ad
function displayRandomAd() {
    const ad = getRandomAd();
    const adContainer = document.getElementById('ads-container');

    const adElement = document.createElement('div');
    adElement.className = 'ad';

    const adHeadline = document.createElement('h2');
    adHeadline.textContent = ad.headline;
    adHeadline.style.color = "#000";

    const adLink = document.createElement('a');
    adLink.href = ad.link;
    adLink.textContent = 'Click here to learn more';
    adLink.target = '_blank';  // Open link in new tab

    adElement.appendChild(adHeadline);
    adElement.appendChild(adLink);
    adContainer.appendChild(adElement);
}

window.onload = displayRandomAd;
console.log("%cNalla Worker", "color:#ffa500; font-weight:600;", "Loaded Ads JS File");
