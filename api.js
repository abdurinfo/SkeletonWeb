// Initialize with custom options
const sk = SkeletonWeb.init({
  color: '#f0f0f0',
  highlight: '#e0e0e0',
  duration: '2s'
});

// Create skeleton elements
const card = sk.create('div', 'skeletonweb-card', {
  'style': 'width: 300px; height: 200px;'
});
document.body.appendChild(card);

// Wrap existing elements
const img = document.querySelector('img.profile');
sk.wrap(img, 'skeletonweb-circle');

// Apply to multiple elements
sk.applyTo('.loading-placeholder');

// Later, remove skeletons
setTimeout(() => {
  sk.removeFrom('.loading-placeholder');
}, 3000);
