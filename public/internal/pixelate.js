// Author: https://github.com/yashrajbharti/pixelate

class Pixelated extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		this.canvas = document.createElement("canvas");
		this.canvas.id = "canvas";
		this.wrapper = document.createElement("div");
		this.wrapper.appendChild(this.canvas);
		this.shadowRoot.appendChild(this.wrapper);

		const style = document.createElement("style");
		style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      div {
        position: relative;
        display: inline-block;
        image-rendering: pixelated;
      }

      div::after {
        position: absolute;
        content: "";
        inline-size: 100%;
        block-size: 100%;
        inset-inline-start: 0;
        inset-block-start: 0;
        background-image: none;
        background-size: 10px 10px;
        margin: 0;
        mix-blend-mode: multiply;
      }
    `;
		this.shadowRoot.appendChild(style);

		this.canvas.setAttribute("role", "img");
		this.canvas.setAttribute(
			"aria-label",
			"Pixelated image of the provided source."
		);

		this.originalImageData = null; // To store the original image data
	}

	static get observedAttributes() {
		return [
			"src",
			"pixel-size",
			"lego-size",
			"max-width",
			"max-height",
			"lego-effect",
		];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
			if (name === "src") {
				const pixelSize =
					parseInt(this.getAttribute("pixel-size")) || 10;
				this.loadImage(newValue, pixelSize);
			} else if (name === "pixel-size") {
				this.updatePixelation(parseInt(newValue) || 10);
			} else if (name === "lego-size") {
				const style = this.shadowRoot.querySelector("style");
				const gridSize = parseInt(newValue) || 10;
				style.textContent = style.textContent.replace(
					/background-size: \d+px \d+px;/,
					`background-size: ${gridSize}px ${gridSize}px;`
				);
			} else if (name === "lego-effect") {
				const style = this.shadowRoot.querySelector("style");
				if (newValue === "true")
					style.textContent = style.textContent.replace(
						"background-image: none;",
						"background-image: url(./assets/circle.jpg);"
					);
				else {
					style.textContent = style.textContent.replace(
						"background-image: url(./assets/circle.jpg);",
						"background-image: none;"
					);
				}
			}
		}
	}

	connectedCallback() {
		const imageUrl = this.getAttribute("src");
		const pixelSize = parseInt(this.getAttribute("pixel-size")) || 10;

		if (imageUrl) {
			this.loadImage(imageUrl, pixelSize);
		}
	}

	loadImage(imageUrl, pixelSize) {
		const canvas = this.canvas;
		const ctx = canvas.getContext("2d");

		const maxWidth = parseInt(this.getAttribute("max-width")) || 500;
		const maxHeight = parseInt(this.getAttribute("max-height")) || 500;

		const img = new Image();
		img.crossOrigin = "Anonymous";
		img.onload = () => {
			let newWidth = img.width;
			let newHeight = img.height;

			if (img.width > maxWidth || img.height > maxHeight) {
				const aspectRatio = img.width / img.height;
				if (img.width > img.height) {
					newWidth = maxWidth;
					newHeight = maxWidth / aspectRatio;
				} else {
					newHeight = maxHeight;
					newWidth = maxHeight * aspectRatio;
				}
			}

			canvas.width = newWidth;
			canvas.height = newHeight;
			this.wrapper.style.height = newHeight + "px";

			ctx.drawImage(img, 0, 0, newWidth, newHeight);
			this.originalImageData = ctx.getImageData(
				0,
				0,
				canvas.width,
				canvas.height
			); // Store original image data
			this.pixelateImage(ctx, canvas, pixelSize);
		};

		img.onerror = () => {
			console.error("Failed to load the image.");
			ctx.fillStyle = "#ccc";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "#000";
			ctx.font = "16px Arial";
			ctx.fillText("Image failed to load", 10, 50);
		};

		img.src = imageUrl;
	}

	updatePixelation(pixelSize) {
		if (!this.originalImageData) return;

		const canvas = this.canvas;
		const ctx = canvas.getContext("2d");

		ctx.putImageData(this.originalImageData, 0, 0);

		this.pixelateImage(ctx, canvas, pixelSize);
	}

	pixelateImage(ctx, canvas, pixelSize) {
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const data = imageData.data;

		for (let y = 0; y < canvas.height; y += pixelSize) {
			for (let x = 0; x < canvas.width; x += pixelSize) {
				const pixelIndex = (y * canvas.width + x) * 4;
				const r = data[pixelIndex];
				const g = data[pixelIndex + 1];
				const b = data[pixelIndex + 2];

				for (let dy = 0; dy < pixelSize; dy++) {
					for (let dx = 0; dx < pixelSize; dx++) {
						const index = ((y + dy) * canvas.width + (x + dx)) * 4;
						data[index] = r;
						data[index + 1] = g;
						data[index + 2] = b;
					}
				}
			}
		}

		ctx.putImageData(imageData, 0, 0);
	}
}

customElements.define("image-pixelated", Pixelated);
