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

  // --- HTML Code Editor Modal ---
  function createCodeModal() {
    const overlay = document.createElement('div');
    overlay.id = 'gysb-code-overlay';
    overlay.innerHTML = `
      <div id="gysb-code-modal">
        <div id="gysb-code-header">
          <span id="gysb-code-title">Edit HTML Code</span>
          <div id="gysb-code-actions">
            <button id="gysb-code-cancel">Cancel</button>
            <button id="gysb-code-apply">Apply</button>
          </div>
        </div>
        <textarea id="gysb-code-editor" spellcheck="false"
          placeholder="Paste your HTML code here..."></textarea>
        <div id="gysb-code-hint">Tip: Paste any HTML/CSS. Click Apply to render it on the canvas.</div>
      </div>
    `;
    document.body.appendChild(overlay);

    const textarea = overlay.querySelector('#gysb-code-editor');
    const applyBtn = overlay.querySelector('#gysb-code-apply');
    const cancelBtn = overlay.querySelector('#gysb-code-cancel');

    // Tab key inserts spaces
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const s = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, s) + '  ' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = s + 2;
      }
    });

    cancelBtn.addEventListener('click', () => { overlay.style.display = 'none'; });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.style.display = 'none';
    });

    return { overlay, textarea, applyBtn };
  }

  let modal = null;

  function openCodeEditor(component) {
    if (!modal) modal = createCodeModal();
    const { overlay, textarea, applyBtn } = modal;

    // Get current inner HTML from the component
    const currentHtml = component.getInnerHTML
      ? component.getInnerHTML()
      : component.get('content') || '';
    textarea.value = currentHtml;
    overlay.style.display = 'flex';
    textarea.focus();

    // Replace old listener
    const newApply = applyBtn.cloneNode(true);
    applyBtn.parentNode.replaceChild(newApply, applyBtn);
    modal.applyBtn = newApply;

    newApply.addEventListener('click', () => {
      component.components(textarea.value);
      overlay.style.display = 'none';
    });
  }

  // Register "edit-html-code" command
  editor.Commands.add('edit-html-code', {
    run(ed) {
      const selected = ed.getSelected();
      if (selected && selected.get('type') === 'custom-html-block') {
        openCodeEditor(selected);
      }
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
        components: '<div style="padding:20px; background:#f8fafc; border:1px dashed #94a3b8; min-height:60px; font-family:monospace; font-size:14px; color:#475569; text-align:center">HTML Block — double-click or use the toolbar to edit code</div>',
        toolbar: [
          { attributes: { class: 'fa fa-code' }, command: 'edit-html-code', label: '&lt;/&gt; Edit Code' },
          { attributes: { class: 'fa fa-arrow-up' }, command: 'select-parent' },
          { attributes: { class: 'fa fa-arrows' }, command: 'tlb-move' },
          { attributes: { class: 'fa fa-clone' }, command: 'tlb-clone' },
          { attributes: { class: 'fa fa-trash-o' }, command: 'tlb-delete' },
        ],
      },
    },
    view: {
      events: {
        dblclick: 'onDblClick',
      },
      onDblClick() {
        openCodeEditor(this.model);
      },
    },
  });
}
