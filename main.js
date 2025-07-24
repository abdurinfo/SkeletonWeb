class SkeletonWeb {
  constructor(options = {}) {
    this.options = {
      color: '#eee',
      highlight: '#f5f5f5',
      duration: '1.5s',
      opacity: '1',
      ...options
    };
    
    this.applyGlobalStyles();
  }
  
  applyGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --sk-color: ${this.options.color};
        --sk-highlight: ${this.options.highlight};
        --sk-animation-duration: ${this.options.duration};
        --sk-opacity: ${this.options.opacity};
      }
    `;
    document.head.appendChild(style);
  }
  
  create(elementType = 'div', classes = '', attributes = {}) {
    const element = document.createElement(elementType);
    element.className = `skeletonweb ${classes}`;
    
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    
    return element;
  }
  
  wrap(element, classes = '') {
    if (!element) return null;
    
    const wrapper = this.create('div', classes);
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
    return wrapper;
  }
  
  applyTo(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.add('skeletonweb');
    });
    return elements;
  }
  
  removeFrom(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.remove('skeletonweb');
    });
    return elements;
  }
  
  static init(options) {
    return new SkeletonWeb(options);
  }
}

// Automatic initialization if script is included directly
if (!window.SkeletonWeb) {
  window.SkeletonWeb = SkeletonWeb.init();
}
