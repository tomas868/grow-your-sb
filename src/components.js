export function registerComponents(editor) {
  // --- Carousel Component ---
  editor.DomComponents.addType('carousel', {
    model: {
      defaults: {
        tagName: 'div',
        draggable: true,
        droppable: false,
        attributes: { class: 'gysb-carousel' },
        styles: `
          .gysb-carousel {
            position: relative;
            overflow: hidden;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .gysb-carousel-track {
            display: flex;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .gysb-carousel-track::-webkit-scrollbar { display: none; }
          .gysb-carousel-slide {
            flex: 0 0 100%;
            scroll-snap-align: start;
            min-height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f1f5f9;
          }
          .gysb-carousel-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gysb-carousel-nav {
            display: flex;
            justify-content: center;
            gap: 8px;
            padding: 12px 0;
          }
          .gysb-carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #cbd5e1;
            border: none;
            cursor: pointer;
            padding: 0;
          }
          .gysb-carousel-dot.active { background: #4f46e5; }
        `,
        components: [
          {
            tagName: 'div',
            attributes: { class: 'gysb-carousel-track' },
            components: [
              {
                tagName: 'div',
                attributes: { class: 'gysb-carousel-slide' },
                style: { background: '#dbeafe' },
                components: [{ tagName: 'span', content: 'Slide 1' }],
              },
              {
                tagName: 'div',
                attributes: { class: 'gysb-carousel-slide' },
                style: { background: '#fce7f3' },
                components: [{ tagName: 'span', content: 'Slide 2' }],
              },
              {
                tagName: 'div',
                attributes: { class: 'gysb-carousel-slide' },
                style: { background: '#d1fae5' },
                components: [{ tagName: 'span', content: 'Slide 3' }],
              },
            ],
          },
          {
            tagName: 'div',
            attributes: { class: 'gysb-carousel-nav' },
            components: [
              { tagName: 'button', attributes: { class: 'gysb-carousel-dot active', 'data-slide': '0' }, content: '' },
              { tagName: 'button', attributes: { class: 'gysb-carousel-dot', 'data-slide': '1' }, content: '' },
              { tagName: 'button', attributes: { class: 'gysb-carousel-dot', 'data-slide': '2' }, content: '' },
            ],
          },
        ],
        script: function () {
          var el = this;
          var track = el.querySelector('.gysb-carousel-track');
          var dots = el.querySelectorAll('.gysb-carousel-dot');
          if (!track || !dots.length) return;
          dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
              var idx = parseInt(dot.getAttribute('data-slide') || '0');
              var slides = track.querySelectorAll('.gysb-carousel-slide');
              if (slides[idx]) {
                track.scrollTo({ left: slides[idx].offsetLeft, behavior: 'smooth' });
              }
              dots.forEach(function (d) { d.classList.remove('active'); });
              dot.classList.add('active');
            });
          });
        },
        traits: [
          {
            type: 'number',
            name: 'data-autoplay',
            label: 'Autoplay (ms, 0=off)',
            default: 0,
          },
        ],
      },
    },
  });

  // --- Custom HTML Textarea Trait ---
  editor.TraitManager.addType('html-textarea', {
    createInput({ trait }) {
      const el = document.createElement('div');
      el.innerHTML = `
        <textarea class="gysb-html-textarea" rows="10" placeholder="Paste your HTML here..."
          style="width:100%; min-height:180px; padding:10px; font-family:'Courier New',monospace;
          font-size:13px; background:#0f0f23; color:#e0e7ff; border:1px solid #2a2a4a;
          border-radius:6px; resize:vertical; line-height:1.5; tab-size:2;"></textarea>
        <button class="gysb-html-apply-btn"
          style="margin-top:8px; padding:8px 16px; background:#818cf8; color:#fff;
          border:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:600;
          width:100%;">Apply HTML</button>
      `;
      const textarea = el.querySelector('textarea');
      const btn = el.querySelector('button');

      // Load existing HTML from the component
      const component = this.target;
      if (component) {
        const inner = component.getInnerHTML ? component.getInnerHTML() : '';
        textarea.value = inner;
      }

      btn.addEventListener('click', () => {
        const component = this.target;
        if (component) {
          component.components(textarea.value);
        }
      });

      // Also allow Ctrl+Enter to apply
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          btn.click();
        }
        // Allow Tab to insert tab character
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }
      });

      return el;
    },
  });

  // --- Custom HTML Block Component ---
  editor.DomComponents.addType('custom-html-block', {
    model: {
      defaults: {
        tagName: 'div',
        draggable: true,
        droppable: false,
        attributes: { class: 'gysb-html-block' },
        components: '<div style="padding:20px; background:#f8fafc; border:1px dashed #94a3b8; min-height:60px; font-family:monospace; font-size:14px; color:#475569">Custom HTML Block — select this element, then go to the <b>Settings</b> tab on the right to edit the HTML code.</div>',
        traits: [
          {
            type: 'html-textarea',
            name: 'custom-html',
            label: 'HTML Code',
          },
        ],
      },
    },
  });
}
