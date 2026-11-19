// Preserve the provider's actual count and locations in one non-interactive image.
const visitorSource = document.getElementById('visitor-source');
const visitorImage = document.getElementById('visitor-map-image');
const viewsCount = document.getElementById('views-count');
let worldMapDataUrl;

function displayStaticMap() {
  const map = visitorSource.querySelector('.mapmyvisitors-map.liveDotsReady svg');
  const label = visitorSource.querySelector('.mapmyvisitors-visitors');
  const count = label?.textContent.match(/([\d,]+)\s+(?:Total\s+)?Pageviews\b/i);
  if (!map || !count || !worldMapDataUrl) return;

  const snapshot = map.cloneNode(true);
  const width = Number.parseFloat(map.getAttribute('width')) || 220;
  const height = Number.parseFloat(map.getAttribute('height')) || width / 2.04;
  snapshot.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  snapshot.setAttribute('viewBox', `0 0 ${width} ${height}`);
  snapshot.setAttribute('width', width);
  snapshot.setAttribute('height', height);
  snapshot.style.background = '#ffffff';
  const background = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  background.setAttribute('width', width);
  background.setAttribute('height', height);
  background.setAttribute('href', worldMapDataUrl);
  snapshot.insertBefore(background, snapshot.firstChild);
  // Hide zoom buttons baked into the provider's background; markers stay above it.
  const controlCover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  controlCover.setAttribute('x', '0');
  controlCover.setAttribute('y', height * 0.62);
  controlCover.setAttribute('width', width * 0.11);
  controlCover.setAttribute('height', height * 0.38);
  controlCover.setAttribute('fill', '#ffffff');
  snapshot.insertBefore(controlCover, background.nextSibling);

  snapshot.querySelectorAll('script, style, animate, animateTransform, animateMotion, set, foreignObject').forEach((element) => element.remove());
  snapshot.querySelectorAll('a').forEach((link) => link.replaceWith(...link.childNodes));
  snapshot.querySelectorAll('*').forEach((element) => {
    Array.from(element.attributes).forEach((attribute) => {
      if (attribute.name.startsWith('on')) element.removeAttribute(attribute.name);
    });
  });
  snapshot.querySelectorAll('circle').forEach((marker) => {
    marker.setAttribute('r', '2.5');
    marker.style.r = '2.5px';
    marker.style.fill = '#e34b4b';
    marker.style.stroke = '#ffffff';
    marker.style.strokeWidth = '0.5px';
  });

  visitorImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(snapshot))}`;
  visitorImage.hidden = false;
  viewsCount.textContent = `${count[1]} Views`;
  mapObserver.disconnect();
  visitorSource.remove();
}

const mapObserver = new MutationObserver(displayStaticMap);
mapObserver.observe(visitorSource, { childList: true, subtree: true, attributes: true, characterData: true });
displayStaticMap();

// The provider draws land as a separate background image, outside its marker SVG.
fetch('assets/visitor-worldmap.png')
  .then((response) => {
    if (!response.ok) throw new Error('World map unavailable');
    return response.blob();
  })
  .then((blob) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      worldMapDataUrl = reader.result;
      displayStaticMap();
    });
    reader.readAsDataURL(blob);
  })
  .catch(() => { /* Leave the count label available if the image cannot load. */ });
