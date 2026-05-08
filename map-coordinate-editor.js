(function () {
  "use strict";

  const DEFAULT_MAP = "https://raw.githubusercontent.com/cengobee/XxxGotapu/main/9a310694-860c-493b-9cb1-a454e0a6bcf8.png";

  class MapCoordinateEditor {
    constructor(root, options = {}) {
      if (!root) throw new Error("MapCoordinateEditor icin root element gerekli.");
      this.root = root;
      this.options = {
        mapSrc: options.mapSrc || root.dataset.mapSrc || DEFAULT_MAP,
        initialPoints: options.initialPoints || [],
        onChange: typeof options.onChange === "function" ? options.onChange : null
      };
      this.state = {
        points: this.options.initialPoints.map((point, index) => this.normalizePoint(point, index)),
        selectedId: null,
        exportMode: "json",
        dragId: null
      };
      this.mount();
      this.render();
    }

    mount() {
      this.root.classList.add("mce-root");
      this.root.innerHTML = `
        <style>${MapCoordinateEditor.styles()}</style>
        <div class="mce-app">
          <section class="mce-workspace">
            <header class="mce-topbar">
              <div>
                <h2>Harita Koordinat Editörü</h2>
                <p>Haritaya tıkla, noktayı sürükle, il ve ürün bilgisini düzenle.</p>
              </div>
              <div class="mce-toolbar">
                <label><input data-mce-grid type="checkbox"> Izgara</label>
                <label><input data-mce-labels type="checkbox" checked> Etiketler</label>
                <button data-mce-clear type="button">Seçimi bırak</button>
              </div>
            </header>
            <div class="mce-map-shell">
              <div class="mce-map-stage" data-mce-stage>
                <img data-mce-image alt="Harita" src="${this.escapeAttr(this.options.mapSrc)}">
              </div>
            </div>
          </section>
          <aside class="mce-side">
            <section>
              <h3>Seçili Nokta</h3>
              <div class="mce-fields">
                <label class="mce-wide"><span>İl adı</span><input data-mce-city placeholder="Örn. Gaziantep"></label>
                <label class="mce-wide"><span>Ürün / not</span><input data-mce-product placeholder="Örn. Baklava, fıstık"></label>
                <label><span>X (%)</span><input data-mce-x type="number" step="0.01" min="0" max="100"></label>
                <label><span>Y (%)</span><input data-mce-y type="number" step="0.01" min="0" max="100"></label>
                <label><span>X (px)</span><input data-mce-px readonly></label>
                <label><span>Y (px)</span><input data-mce-py readonly></label>
              </div>
              <div class="mce-actions">
                <button data-mce-update class="mce-primary" type="button">Güncelle</button>
                <button data-mce-delete class="mce-danger" type="button">Sil</button>
              </div>
              <div data-mce-status class="mce-status"></div>
            </section>
            <section>
              <h3>Noktalar</h3>
              <div class="mce-table-wrap">
                <table>
                  <thead><tr><th>İl</th><th>Ürün</th><th>X</th><th>Y</th></tr></thead>
                  <tbody data-mce-table></tbody>
                </table>
              </div>
            </section>
            <section>
              <h3>Dışa Aktar</h3>
              <textarea data-mce-output spellcheck="false"></textarea>
              <div class="mce-actions">
                <button data-mce-json type="button">JSON</button>
                <button data-mce-html type="button">HTML noktaları</button>
                <button data-mce-copy class="mce-primary" type="button">Kopyala</button>
              </div>
            </section>
            <section>
              <h3>İçe Aktar / Görsel</h3>
              <label><span>Farklı harita görseli seç</span><input data-mce-file type="file" accept="image/*"></label>
              <label><span>JSON yapıştır</span><textarea data-mce-import placeholder='[{"city":"İzmir","product":"Boyoz","x":14.2,"y":61.4}]' spellcheck="false"></textarea></label>
              <button data-mce-import-btn type="button">JSON içe aktar</button>
            </section>
          </aside>
        </div>
      `;

      this.stage = this.root.querySelector("[data-mce-stage]");
      this.image = this.root.querySelector("[data-mce-image]");
      this.table = this.root.querySelector("[data-mce-table]");
      this.cityInput = this.root.querySelector("[data-mce-city]");
      this.productInput = this.root.querySelector("[data-mce-product]");
      this.xInput = this.root.querySelector("[data-mce-x]");
      this.yInput = this.root.querySelector("[data-mce-y]");
      this.pxInput = this.root.querySelector("[data-mce-px]");
      this.pyInput = this.root.querySelector("[data-mce-py]");
      this.output = this.root.querySelector("[data-mce-output]");
      this.importInput = this.root.querySelector("[data-mce-import]");
      this.status = this.root.querySelector("[data-mce-status]");

      this.stage.addEventListener("click", event => {
        if (event.target.closest(".mce-point")) return;
        const coords = this.clientToPercent(event.clientX, event.clientY);
        this.addPoint(coords.x, coords.y);
      });

      this.root.querySelector("[data-mce-update]").addEventListener("click", () => this.updateSelectedFromInputs());
      this.root.querySelector("[data-mce-delete]").addEventListener("click", () => this.deleteSelected());
      this.root.querySelector("[data-mce-clear]").addEventListener("click", () => {
        this.state.selectedId = null;
        this.render();
      });
      this.root.querySelector("[data-mce-grid]").addEventListener("change", event => {
        this.root.classList.toggle("mce-grid-on", event.target.checked);
      });
      this.root.querySelector("[data-mce-labels]").addEventListener("change", event => {
        this.root.classList.toggle("mce-labels-hidden", !event.target.checked);
      });
      this.root.querySelector("[data-mce-json]").addEventListener("click", () => {
        this.state.exportMode = "json";
        this.renderExport();
      });
      this.root.querySelector("[data-mce-html]").addEventListener("click", () => {
        this.state.exportMode = "html";
        this.renderExport();
      });
      this.root.querySelector("[data-mce-copy]").addEventListener("click", async () => {
        await navigator.clipboard.writeText(this.output.value);
        this.showStatus("Çıktı panoya kopyalandı.");
      });
      this.root.querySelector("[data-mce-import-btn]").addEventListener("click", () => this.importJson());
      this.root.querySelector("[data-mce-file]").addEventListener("change", event => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        this.image.src = URL.createObjectURL(file);
        this.showStatus("Harita görseli değişti.");
      });
      this.image.addEventListener("load", () => this.render());

      [this.cityInput, this.productInput, this.xInput, this.yInput].forEach(input => {
        input.addEventListener("keydown", event => {
          if (event.key === "Enter") this.updateSelectedFromInputs();
        });
      });
    }

    normalizePoint(point, index) {
      return {
        id: point.id || this.uid(),
        city: String(point.city || point.il || `İl ${index + 1}`),
        product: String(point.product || point.urun || ""),
        x: Number(this.fixed(this.clamp(Number(point.x), 0, 100))),
        y: Number(this.fixed(this.clamp(Number(point.y), 0, 100)))
      };
    }

    uid() {
      return Math.random().toString(36).slice(2, 9);
    }

    clamp(value, min, max) {
      return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
    }

    fixed(value) {
      return Number(value).toFixed(2);
    }

    naturalSize() {
      return {
        width: this.image.naturalWidth || this.image.clientWidth || 1,
        height: this.image.naturalHeight || this.image.clientHeight || 1
      };
    }

    clientToPercent(clientX, clientY) {
      const rect = this.stage.getBoundingClientRect();
      return {
        x: this.clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
        y: this.clamp(((clientY - rect.top) / rect.height) * 100, 0, 100)
      };
    }

    pointPixels(point) {
      const size = this.naturalSize();
      return {
        px: Math.round((point.x / 100) * size.width),
        py: Math.round((point.y / 100) * size.height)
      };
    }

    selectedPoint() {
      return this.state.points.find(point => point.id === this.state.selectedId) || null;
    }

    showStatus(text) {
      this.status.textContent = text;
      window.clearTimeout(this.statusTimer);
      this.statusTimer = window.setTimeout(() => this.status.textContent = "", 1800);
    }

    addPoint(x, y) {
      const point = {
        id: this.uid(),
        city: `İl ${this.state.points.length + 1}`,
        product: "",
        x: Number(this.fixed(x)),
        y: Number(this.fixed(y))
      };
      this.state.points.push(point);
      this.state.selectedId = point.id;
      this.changed();
      this.render();
      this.showStatus("Nokta eklendi.");
    }

    updateSelectedFromInputs() {
      const point = this.selectedPoint();
      if (!point) return;
      point.city = this.cityInput.value.trim() || "İsimsiz";
      point.product = this.productInput.value.trim();
      point.x = Number(this.fixed(this.clamp(Number(this.xInput.value), 0, 100)));
      point.y = Number(this.fixed(this.clamp(Number(this.yInput.value), 0, 100)));
      this.changed();
      this.render();
      this.showStatus("Nokta güncellendi.");
    }

    deleteSelected() {
      if (!this.state.selectedId) return;
      this.state.points = this.state.points.filter(point => point.id !== this.state.selectedId);
      this.state.selectedId = this.state.points[0] ? this.state.points[0].id : null;
      this.changed();
      this.render();
      this.showStatus("Nokta silindi.");
    }

    importJson() {
      try {
        const parsed = JSON.parse(this.importInput.value);
        if (!Array.isArray(parsed)) throw new Error("JSON bir dizi olmalı.");
        this.state.points = parsed.map((item, index) => this.normalizePoint(item, index));
        this.state.selectedId = this.state.points[0] ? this.state.points[0].id : null;
        this.changed();
        this.render();
        this.showStatus("JSON içe aktarıldı.");
      } catch (error) {
        this.showStatus(error.message || "JSON okunamadı.");
      }
    }

    changed() {
      if (this.options.onChange) {
        this.options.onChange(this.getPoints());
      }
      this.root.dispatchEvent(new CustomEvent("map-coordinate-change", {
        detail: { points: this.getPoints() }
      }));
    }

    getPoints() {
      return this.state.points.map(({ city, product, x, y }) => ({
        city,
        product,
        x: Number(this.fixed(x)),
        y: Number(this.fixed(y))
      }));
    }

    render() {
      this.fillForm(this.selectedPoint());
      this.renderPoints();
      this.renderTable();
      this.renderExport();
    }

    renderPoints() {
      this.stage.querySelectorAll(".mce-point").forEach(node => node.remove());
      for (const point of this.state.points) {
        const marker = document.createElement("div");
        marker.className = `mce-point${point.id === this.state.selectedId ? " mce-selected" : ""}`;
        marker.style.setProperty("--x", point.x);
        marker.style.setProperty("--y", point.y);
        marker.dataset.id = point.id;
        marker.innerHTML = `<span class="mce-pin"></span><span class="mce-label">${this.escapeHtml(point.city)}</span>`;
        marker.addEventListener("pointerdown", event => {
          event.preventDefault();
          event.stopPropagation();
          this.state.dragId = point.id;
          this.state.selectedId = point.id;
          marker.setPointerCapture(event.pointerId);
          this.render();
        });
        marker.addEventListener("pointermove", event => {
          if (this.state.dragId !== point.id) return;
          const coords = this.clientToPercent(event.clientX, event.clientY);
          point.x = Number(this.fixed(coords.x));
          point.y = Number(this.fixed(coords.y));
          this.fillForm(point);
          marker.style.setProperty("--x", point.x);
          marker.style.setProperty("--y", point.y);
          this.renderTable();
          this.renderExport();
        });
        marker.addEventListener("pointerup", () => {
          if (this.state.dragId === point.id) {
            this.changed();
            this.showStatus("Konum güncellendi.");
          }
          this.state.dragId = null;
        });
        this.stage.appendChild(marker);
      }
    }

    renderTable() {
      this.table.innerHTML = "";
      for (const point of this.state.points) {
        const row = document.createElement("tr");
        row.className = point.id === this.state.selectedId ? "mce-active" : "";
        row.innerHTML = `
          <td>${this.escapeHtml(point.city)}</td>
          <td>${this.escapeHtml(point.product || "-")}</td>
          <td>${this.fixed(point.x)}</td>
          <td>${this.fixed(point.y)}</td>
        `;
        row.addEventListener("click", () => {
          this.state.selectedId = point.id;
          this.render();
        });
        this.table.appendChild(row);
      }
    }

    fillForm(point) {
      if (!point) {
        this.cityInput.value = "";
        this.productInput.value = "";
        this.xInput.value = "";
        this.yInput.value = "";
        this.pxInput.value = "";
        this.pyInput.value = "";
        return;
      }
      const pixels = this.pointPixels(point);
      this.cityInput.value = point.city;
      this.productInput.value = point.product || "";
      this.xInput.value = this.fixed(point.x);
      this.yInput.value = this.fixed(point.y);
      this.pxInput.value = pixels.px;
      this.pyInput.value = pixels.py;
    }

    renderExport() {
      if (this.state.exportMode === "html") {
        this.output.value = this.state.points.map(point => {
          const title = [point.city, point.product].filter(Boolean).join(" - ");
          return `<button class="map-point" style="left:${this.fixed(point.x)}%;top:${this.fixed(point.y)}%;" data-city="${this.escapeAttr(point.city)}" data-product="${this.escapeAttr(point.product || "")}" aria-label="${this.escapeAttr(title)}"></button>`;
        }).join("\n");
        return;
      }
      this.output.value = JSON.stringify(this.getPoints(), null, 2);
    }

    escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char]));
    }

    escapeAttr(value) {
      return this.escapeHtml(value).replace(/`/g, "&#096;");
    }

    static styles() {
      return `
        .mce-root{--mce-bg:#f6f2ec;--mce-panel:#fffaf3;--mce-ink:#2c2621;--mce-muted:#74685d;--mce-line:#ddd1c3;--mce-accent:#1f7a5a;--mce-red:#c73a2f;color:var(--mce-ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
        .mce-root *{box-sizing:border-box}
        .mce-root button,.mce-root input,.mce-root textarea{font:inherit}
        .mce-root button{border:1px solid var(--mce-line);background:#fffdf8;color:var(--mce-ink);border-radius:7px;padding:9px 12px;cursor:pointer}
        .mce-root button:hover{border-color:#b8a99a}
        .mce-root .mce-primary{background:var(--mce-accent);border-color:var(--mce-accent);color:#fff}
        .mce-root .mce-danger{background:#fff4f1;border-color:#e7b6ac;color:#9b2a21}
        .mce-root input,.mce-root textarea{width:100%;border:1px solid var(--mce-line);border-radius:7px;background:#fffdf8;color:var(--mce-ink);padding:9px 10px;outline:none}
        .mce-root textarea{min-height:150px;resize:vertical;font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",monospace;font-size:12px;line-height:1.45}
        .mce-app{display:grid;grid-template-columns:minmax(0,1fr) 390px;min-height:720px;background:var(--mce-bg);border:1px solid var(--mce-line);border-radius:8px;overflow:hidden}
        .mce-workspace{min-width:0;padding:18px;display:flex;flex-direction:column;gap:14px}
        .mce-topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
        .mce-topbar h2{margin:0;font-size:22px;line-height:1.15;letter-spacing:0}
        .mce-topbar p{margin:5px 0 0;color:var(--mce-muted);font-size:13px}
        .mce-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .mce-toolbar label{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--mce-line);border-radius:7px;padding:8px 10px;background:#fffdf8;color:var(--mce-muted);font-size:13px;white-space:nowrap}
        .mce-toolbar input{width:auto;accent-color:var(--mce-accent)}
        .mce-map-shell{min-height:0;flex:1;border:1px solid var(--mce-line);border-radius:8px;overflow:auto;background:#efe7dd;box-shadow:0 16px 44px rgba(50,38,27,.12)}
        .mce-map-stage{position:relative;width:min(100%,1400px);margin:0 auto;user-select:none}
        .mce-map-stage img{display:block;width:100%;height:auto;pointer-events:none}
        .mce-point{position:absolute;left:calc(var(--x)*1%);top:calc(var(--y)*1%);transform:translate(-50%,-50%);display:grid;grid-template-columns:14px max-content;align-items:center;gap:4px;z-index:5;cursor:grab}
        .mce-pin{width:14px;height:14px;border-radius:50%;background:var(--mce-red);border:2px solid white;box-shadow:0 2px 7px rgba(36,20,12,.35)}
        .mce-selected .mce-pin{background:var(--mce-accent);box-shadow:0 0 0 4px rgba(31,122,90,.25),0 3px 9px rgba(36,20,12,.35)}
        .mce-label{padding:3px 5px;border-radius:5px;background:rgba(255,253,248,.94);border:1px solid rgba(90,75,60,.2);box-shadow:0 4px 12px rgba(30,20,12,.12);font-size:11px;font-weight:700;color:#31271f;white-space:nowrap;pointer-events:none}
        .mce-labels-hidden .mce-label{display:none}
        .mce-grid-on .mce-map-stage:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,rgba(0,0,0,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.14) 1px,transparent 1px);background-size:10% 10%}
        .mce-side{border-left:1px solid var(--mce-line);background:var(--mce-panel);padding:16px;overflow:auto}
        .mce-side section{border-bottom:1px solid var(--mce-line);padding-bottom:14px;margin-bottom:14px}
        .mce-side section:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}
        .mce-side h3{margin:0 0 9px;font-size:14px;font-weight:800}
        .mce-fields{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .mce-wide{grid-column:1/-1}
        .mce-root label span{display:block;margin:0 0 5px;font-size:12px;color:var(--mce-muted);font-weight:700}
        .mce-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
        .mce-table-wrap{max-height:230px;overflow:auto;border:1px solid var(--mce-line);border-radius:8px;background:#fffdf8}
        .mce-root table{width:100%;border-collapse:collapse;font-size:12px}
        .mce-root th,.mce-root td{padding:8px;border-bottom:1px solid #eadfd3;text-align:left;vertical-align:top}
        .mce-root th{position:sticky;top:0;background:#fff8ee;z-index:1;color:var(--mce-muted);font-size:11px}
        .mce-root tr{cursor:pointer}
        .mce-root tr.mce-active{background:rgba(31,122,90,.1)}
        .mce-status{min-height:18px;color:var(--mce-accent);font-size:12px;font-weight:700}
        @media (max-width:1040px){.mce-app{grid-template-columns:1fr}.mce-side{border-left:0;border-top:1px solid var(--mce-line)}}
      `;
    }
  }

  window.MapCoordinateEditor = MapCoordinateEditor;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-map-coordinate-editor]").forEach(root => {
      if (!root.__mapCoordinateEditor) {
        root.__mapCoordinateEditor = new MapCoordinateEditor(root);
      }
    });
  });
})();
